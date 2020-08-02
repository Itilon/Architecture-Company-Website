const init = () => {
    const updateOne = async (DataObject, filter, update) => {
        try {
            return DataObject.findOneAndUpdate(filter, update); 
        } catch(err) {
            console.error(err.message);
        }
    };

    return { updateOne };
};

module.exports = { init };