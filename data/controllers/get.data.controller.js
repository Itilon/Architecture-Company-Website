const init = () => {
    const getAll = async (DataObject) => {
        try {
            return await DataObject.find();
        } catch(err) {
            console.error(err.message);
        }
    };

    const getOneById = async (DataObject, id) => {
        try {
            return await DataObject.findById(id);
        } catch(err) {
            console.error(err.message);
        }
    };

    const getOne = async (DataObject, filter) => {
        try {
            return await DataObject.findOne(filter);
        } catch(err) {
            console.error(err.message);
        }
    };

    return { getAll, getOneById, getOne };
};

module.exports = { init };