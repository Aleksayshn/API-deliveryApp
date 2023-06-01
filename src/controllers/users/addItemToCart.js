const {
  updateOrderHistory, getOrderstByIdUser,
} = require("../../services/userServices/user");

const addItemToCart = async (req, res, _) => {
  const { _id } = req.user;

  const user = await getOrderstByIdUser(_id);
  
  const userCart = user.orders;
  const { order } = req.body;
  userCart.push({
      ...order,
    });

    const newCart = await updateOrderHistory(_id, { orders: userCart });

    res.status(200).json({
        status: "success",
        code: 200,
        data: {
            newCart,
        }
    });
};

module.exports = addItemToCart;