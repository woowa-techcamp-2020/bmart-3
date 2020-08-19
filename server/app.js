import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import ssh from './db/share/ssh';
import cors from 'cors';

const app = express();
app.use(
  cors({
    credentials: true,
  })
);
ssh(app);

const __dirname = path.resolve();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

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

export default app;
