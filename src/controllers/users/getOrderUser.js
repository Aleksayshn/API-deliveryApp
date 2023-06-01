const {
  getOrderstByIdUser,
} = require("../../services/userServices/user");

const getOrderUser = async (req, res, _) => {
    const { _id } = req.user;

    const user = await getOrderstByIdUser(_id);
    res.status(200).json({
        status: "success",
        code: 200,
        data: {
            orders: user.orders
        }
    });
};

module.exports = getOrderUser;