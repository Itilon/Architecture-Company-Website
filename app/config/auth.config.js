const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const { Strategy } = require('passport-local');

const configAuth = (app, { users }) => {
    passport.use(new Strategy(
        (username, password, done) => {
            return users.checkUserPassword(username, password)
                .then(() => users.getUserByUsername({ username }))
                .then((user) => done(null, user))
                .catch((err) => done(null, false, { err }));
        }
    ));

    app.use(cookieParser());
    app.use(session({
        secret: 'Secret cat is secret',
        resave: true,
        saveUninitialized: true
    }));
    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser((user, done) => {
        done(null, user._id);
    });

    passport.deserializeUser((id, done) => {
        return users.getUserById(id)
            .then((user) => { done(null, user) })
            .catch(done);
    });
};

module.exports = { configAuth };