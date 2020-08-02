const { Router } = require('express');

const serverRouter = (app, controllers) => {
    const router = new Router;

    const { getController, postController } = controllers;

    router
        .get('/', getController.getHomepage)

        .get('/admin', getController.getAdminPage)

        .get('/login', getController.getLoginPage)

        .get('/404', getController.get404Page)

        .get('/projects/:id', getController.getProjectData)

        .get('*', getController.getWrongPage)

        .post('/addUser', postController.createUser)

        .post('/contact', postController.createMessage)

        .post('/login', postController.login);

    app.use('/', router);
};

module.exports = { serverRouter };