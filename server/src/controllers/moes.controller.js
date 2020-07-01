const moesController = {};

// Register moe
moesController.register = (req, res, next) => {
    res.send({
        msg: "Moe is registered "
    });
};

module.exports = moesController;