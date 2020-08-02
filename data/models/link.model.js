const init = (db) => {
    const linkSchema = new db.Schema({
        name: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        }
    });

    return db.model('Link', linkSchema);
};

module.exports = { init };