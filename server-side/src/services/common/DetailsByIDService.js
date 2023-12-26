const DetailsByIDService = async (Request, DataModel) => {
    try {
        const DetailsID = Request.params.id;
        const UserEmail = Request.headers['email'];

        const data = await DataModel.findOne({
            '_id': DetailsID,
            'UserEmail': UserEmail
        });

        if (!data) {
            return { status: "fail", data: "No matching record found" };
        }

        return { status: "success", data: data };
    } catch (error) {
        return { status: "fail", data: error.message };
    }
};

module.exports = DetailsByIDService;
