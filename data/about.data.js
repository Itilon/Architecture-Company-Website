const init = (About, { createDataController, getDataController, updateDataController }) => {
    const createAboutData = async (options) => createDataController.createOne(About, options);

    const getAboutData = async (filter) => getDataController.getOne(About, filter);

    const updateAboutData = async (filter, update) => updateDataController.updateOne(About, filter, update);

    return { createAboutData, getAboutData, updateAboutData };
};

module.exports = { init };