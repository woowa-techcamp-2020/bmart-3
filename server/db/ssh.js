const SSH2Client = require('ssh2').Client;
const { sshConf, dbConf } = require('./db.config');
const { makeExecutableSchema } = require('graphql-tools');
const { graphqlHTTP } = require('express-graphql');
const bodyParser = require('body-parser');
const { typeDefs, resolvers } = require('./graphql');
const ssh = new SSH2Client();

module.exports = function (app) {
  ssh.on('ready', function () {
    ssh.forwardOut('127.0.0.1', 24000, dbConf.host, dbConf.port, async function (err, stream) {
      if (err) throw err;

      app.use(
        '/graphql',
        bodyParser.json(),
        graphqlHTTP({
          schema: makeExecutableSchema({
            // 타입 정의
            typeDefs,
            //  GraphQL 서버단 함수 구현
            resolvers: await resolvers(stream),
          }),
          tracing: true, // 모니터링을 위한 config
          cacheControl: true, // cache를 위한 config,
          graphiql: true,
        })
      );
    });
  });

  ssh.connect(sshConf);
};
