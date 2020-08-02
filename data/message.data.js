const init = (Message, { createDataController }) => {
    const createMessage = async (options) => createDataController.createOne(Message, options);

    return { createMessage };
};

module.exports = { init };