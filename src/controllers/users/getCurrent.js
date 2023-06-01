const getCurrentUser = async (req, res, _) => {
  const { email } = req.user;
    res.status(200).json({
        status: "success",
        code: 200,
        data: {
            user: {
                email,
            }
        }
    });
};

module.exports = getCurrentUser;