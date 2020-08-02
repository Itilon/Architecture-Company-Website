const init = (db) => {
    const projectSchema = new db.Schema({
        id: {
            type: Number,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    });

    return db.model('Project', projectSchema);
};

module.exports = { init };