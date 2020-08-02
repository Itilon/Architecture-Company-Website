const init = (Project, { createDataController, getDataController, updateDataController }) => {
    const createProject = async (options) => createDataController.createOne(Project, options);

    const getAllProjects = async () => getDataController.getAll(Project);

    const updateProject = async (filter, update) => updateDataController.updateOne(Project, filter, update);

    return { createProject, getAllProjects, updateProject };
};

module.exports = { init };