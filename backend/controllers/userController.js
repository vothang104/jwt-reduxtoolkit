
const User = require('../models/Users');

userController = {
    // get all user
    getAllUser: async (req, res) => {
        try {
            const user = await User.find();
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    // delete user
    deleteUser: async (req, res) => {
        try {
            const user = await User.findById(req.params.id);
            if (user) {
                res.status(200).json('Delete successfully!');
            }
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

module.exports = userController