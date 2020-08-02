const { port, connectionString } = require('./port.config');

const init = async () => {
    try {
        const db = await require('../../db').init(connectionString);
        const data = await require('../../data').init(db);
        const app = await require('../app').init(data);

        app.listen(port, () => console.log(`Server starts at port ${port}`));
    } catch(err) {
        console.error(err.message);
    }
};

module.exports = { init };