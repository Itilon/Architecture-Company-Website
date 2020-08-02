const init = (data) => {
    const getController = require('./get.controller').init(data);
    const postController = require('./post.controller').init(data);

    return { getController, postController };
};

module.exports = { init };