const init = (FullProject, { createDataController, getDataController, updateDataController }) => {
    const createFullProject = async (options) => createDataController.createOne(FullProject, options);

    const deleteFullProject = async (filter) => deleteDataController.deleteOne(FullProject, filter);

    const getAllFullProjects = async () => getDataController.getAll(FullProject);

    const getFullProject = async (filter) => getDataController.getOne(FullProject, filter);

    const updateFullProject = async (filter, update) => updateDataController.updateOne(FullProject, filter, update);

    return { createFullProject, deleteFullProject, getAllFullProjects, getFullProject, updateFullProject };
};

module.exports = { init };