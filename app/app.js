const express = require('express');

const init = async (data) => {
    const app = express();

    require('./config/app.config').configApp(app);
    require('./config/auth.config').configAuth(app, data);

    const controllers = require('./controllers').init(data);
    require('./routers').serverRouter(app, controllers);

    return await app;
};

module.exports = { init };