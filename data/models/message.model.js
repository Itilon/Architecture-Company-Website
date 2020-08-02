const init = (db) => {
    const messageSchema = new db.Schema({
        name: {
            type: String,
            requred: true
        },
        email: {
            type: String,
            requred: true
        },
        message: {
            type: String,
            requred: true
        }
    });

    return db.model('Message', messageSchema);
};

module.exports = { init };