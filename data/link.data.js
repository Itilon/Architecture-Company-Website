const init = (Link, { createDataController, deleteDataController, getDataController, updateDataController }) => {

    const createOne = async (options) => createDataController.createOne(Link, options);

    const deleteOne = async (filter) => deleteDataController.deleteOne(Link, filter);
    
    const getAll = async () => getDataController.getAll(Link);

    const updateOne = async (filter, update) => updateDataController.updateOne(Link, filter, update);

    return { createOne, deleteOne, getAll, updateOne };
};

module.exports = { init };