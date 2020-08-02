const init = (db) => {
    const fullProjectSchema = new db.Schema({
        id: {
            type: Number,
            required: true
        },
        text: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        location: {
            type:  String,
            required: true
        },
        urls: [
            {
                type: String,
                required: true
            }
        ]
    });

    return db.model('FullProject', fullProjectSchema);
};

module.exports = { init };