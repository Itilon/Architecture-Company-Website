const init = (db) => {
    const contactSchema = new db.Schema({
        title: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true,
        },
        values: [
            {
                type: String,
                required: true
            }
        ]
    });

    return db.model('Contact', contactSchema);
};

module.exports = { init };