const init = (db) => {
    const userSchema = new db.Schema({
        name: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        },
        email: {
            type: String,
            requred: true
        },
        password: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now
        }
    });

    return db.model('User', userSchema);
};

module.exports = { init };