const { createDataController, deleteDataController, getDataController, updateDataController } = require('./controllers').init();

const init = (db) => {

    const aboutData = require('./about.data')
        .init(require('./models/about.model').init(db), {
            createDataController,
            getDataController,
            updateDataController
        });

    const contactData = require('./contact.data')
        .init(require('./models/contact.model').init(db), {
            getDataController
        });

    const fullProjectData = require('./full.project.data')
        .init(require('./models/full.project.model').init(db), {
            createDataController,
            getDataController,
            updateDataController
        });

    const linkData = require('./link.data')
            .init(require('./models/link.model').init(db), {
                createDataController,
                deleteDataController,
                getDataController,
                updateDataController
            });

    const messageData = require('./message.data')
            .init(require('./models/message.model').init(db), {
                createDataController
            });
    
    const projectSnapshotData = require('./project.snapshot.data')
            .init(require('./models/project.model').init(db), {
                createDataController,
                getDataController,
                updateDataController
            });
    
    const userData = require('./user.data')
            .init(require('./models/user.model').init(db), {
                createDataController,
                deleteDataController,
                getDataController
            });

    return Promise.resolve({ aboutData, contactData, fullProjectData, linkData, messageData, projectSnapshotData, userData });
};

module.exports = { init };