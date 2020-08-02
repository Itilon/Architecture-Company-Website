const init = (data) => {
    const { aboutData, contactData, fullProjectData, linkData, projectSnapshotData, userData } = data;

    const getHomepage = async (req, res) => {
        const about = await aboutData.getAboutData();
        const contacts = await contactData.getAll();
        const links = await linkData.getAll();

        const projectSnapshots = await projectSnapshotData.getAllProjects();
        projectSnapshots.sort((a, b) => a.id - b.id);

        res.render('home', { about, contacts, links, projectSnapshots });
    };

    const getLoginPage = (req, res) => res.render('login');

    const getAdminPage = async (req, res) => {
        const users = await userData.getAllUsers();
        res.render('admin', { users });
    };

    const get404Page = (req, res) => res.status(404).render('404');

    const getWrongPage = (req, res) => res.redirect('404');

    const getProjectData = async (req, res) => {
        const fullProject = await fullProjectData.getFullProject({ id: req.params.id });
        res.json(fullProject);
    };

    return { getHomepage, getLoginPage, getAdminPage, get404Page, getWrongPage, getProjectData };
};

module.exports = { init };