import { Client as SSH2Client } from 'ssh2';
import { sshConf, dbConf } from './db.config';
import { makeExecutableSchema } from 'graphql-tools';
import { graphqlHTTP } from 'express-graphql';
import bodyParser from 'body-parser';
import { typeDefs, resolvers } from '../graphql';

const ssh = new SSH2Client();

export default function (app) {
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
}
