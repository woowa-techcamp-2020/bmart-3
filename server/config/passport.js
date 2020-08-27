import passport from 'passport';
import passportJWT from 'passport-jwt';
import { getJwtByGoogleId } from '../db/user';

const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

export default () => {
  // JWT Strategy
  passport.use(
    new JWTStrategy(
      {
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_SECRET,
      },
      async (jwtPayload, done) => {
        try {
          const { success, token } = await getJwtByGoogleId(jwtPayload.googleId);
          if (success) {
            return done(null, token);
          } else {
            return done(null, null);
          }
        } catch (err) {
          return done(err);
        }
      }
    )
  );
};
