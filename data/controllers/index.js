const init = () => {
    const createDataController = require('./create.data.controller').init();
    const deleteDataController = require('./delete.data.controller').init();
    const getDataController = require('./get.data.controller').init();
    const updateDataController = require('./update.data.controller').init();

    return { createDataController, deleteDataController, getDataController, updateDataController };
};

module.exports = { init };