const init = () => {
    const createOne = async (DataObject, options) => {
        const newObject = new DataObject(options);

        try {
            return await newObject.save();
        } catch(err) {
            console.error(err.message);
        }
    };

    return { createOne };
};

module.exports = { init };