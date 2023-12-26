const DeleteService = async (Request, Model) => {
    try {
        const DeleteID = Request.params.id;
        const UserEmail = Request.headers['email'];

        const QueryObject = {
            '_id': DeleteID,
            'UserEmail': UserEmail // Assuming 'UserEmail' is the field name in the collection
        };

        const Delete = await Model.deleteMany(QueryObject);

        return {
            status: "success",
            Delete: Delete
        };
    } catch (error) {
        return {
            status: "fail",
            data: error
        };
    }
};

module.exports = DeleteService;
