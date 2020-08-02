const init = (db) => {
    const aboutSchema = new db.Schema({
        title: {
            type: String,
            required: true
        },
        textParagraphs: [
            {
                type: String,
                required: true
            }
        ],
        cards: [
            {
                title: {
                    type: String,
                    required: true
                },
                icon: {
                    type: String,
                    required: true
                },
                textParagraphs: [
                    {
                        type: String,
                        required: true
                    }
                ]
            }
        ]
    });

    return db.model('About', aboutSchema);
};

module.exports = { init };