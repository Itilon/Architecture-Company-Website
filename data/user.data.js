const bcrypt = require('bcryptjs');

const { parseDate } = require('./helpers/date.transform.helper');
const { normalizeName } = require('./helpers/name.normalize.helper');

const init = (User, { createDataController, deleteDataController, getDataController }) => {

    const createUser = async (options) => {
        let { name, username, email, password, confirmedPassword } = options;

        const user = await getUserByUsername({ username });

        if (user) {
            return Promise.reject({ message: 'Това потребителско име вече е регистрирано.' });
        }

        if (password !== confirmedPassword) {
            return Promise.reject({ message: 'Повторената парола не съвпада с оригиналната.' });
        }

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        password = hash;

        return createDataController.createOne(User, { name, username, email, password });
    };
    
    const checkUserPassword = async (username, password) => {
        const user = await getUserByUsername({ username });

        if (!user) {
            return Promise.reject('Invalid user');
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return Promise.reject('Invalid password');
        }

        return Promise.resolve(isMatch);
    };

    const getAllUsers = async () => { 
        const dbUsers = await getDataController.getAll(User);

        const users = dbUsers.map((user) => {
            const { name, username, email, date } = user;
            const normalizedName = normalizeName(name);
            const parsedDate = parseDate(date);
            return { name: normalizedName, username, email, date: parsedDate };
        });

        return Promise.resolve(users);
    };
    
    const getUserById = async (id) => getDataController.getOneById(User, id);

    const getUserByUsername = async (filter) => getDataController.getOne(User, filter);

    const deleteUser = async (filter) => deleteDataController.deleteOne(User, filter);

    return { createUser, checkUserPassword, getAllUsers, getUserById, getUserByUsername, deleteUser };
};

module.exports = { init };