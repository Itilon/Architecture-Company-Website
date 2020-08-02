const passport = require('passport');

const init = (data) => {
    const { messageData, userData } = data;

    const createMessage = async (req, res) => {
        const { name, email, message } = req.body;

        try {
            const message = await messageData.createMessage({ name, email, message });
            console.log(message);
            res.redirect('/');
        } catch(err) {
            console.error(err.message);
        }
    };

    const createUser = async (req, res) => {
        const { name, username, email, password, confirmedPassword } = req.body;

        try {
            const user = await userData.createUser({ name, username, email, password, confirmedPassword });
            console.log(user);
            res.redirect('/admin');
        } catch(err) {
            console.error(err.message);
        }
    };

    const login = (req, res, next) => {
        passport.authenticate('local', {
            successRedirect: '/admin',
            failureRedirect: '/login'
        })(req, res, next);
    };

    return { createMessage, createUser, login };
};

module.exports = { init };