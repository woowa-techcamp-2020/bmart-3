import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import { makeExecutableSchema } from 'graphql-tools';
import { graphqlHTTP } from 'express-graphql';
import bodyParser from 'body-parser';
import { typeDefs, resolvers } from './db/graphql';

const app = express();
app.use(cors());

const __dirname = path.resolve();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

(async function () {
  app.use(
    '/graphql',
    bodyParser.json(),
    graphqlHTTP({
      schema: makeExecutableSchema({
        // 타입 정의
        typeDefs,
        //  GraphQL 서버단 함수 구현
        resolvers: await resolvers(),
      }),
      tracing: true, // 모니터링을 위한 config
      cacheControl: true, // cache를 위한 config,
      graphiql: true,
    })
  );
})();

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const port = Number(process.env.PORT || 3000);
app.listen(port, () => {
  console.log('Express server started on port: ' + port);
});
