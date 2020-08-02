const init = () => {
    const deleteOne = async (DataObject, filter) => {
        try {
            return await DataObject.deleteOne(filter);
        } catch(err) {
            console.error(err.message);
        }
    };

    return { deleteOne };
};

module.exports = { init };