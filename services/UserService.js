
const UserModel = require("../model/UserModel")
const UserService = {
    addUser: (username, password) => {
        return UserModel.create({
            username, password
        })
    },
    findUser: (username) => {

        console.log('%c [  ]-11', 'font-size:13px; background:pink; color:#bf2c9f;', "here")
        return UserModel.find({ username });
    },
    updateUser: (_id, username, age, password) => {
        return UserModel.updateOne({ _id }, {
            username, age, password
        })
    },
    deleteUser: (_id) => {
        return UserModel.deleteOne({
            _id: _id
        })
    },
    getUser: (page, limit) => {
        return UserModel.find({}, ["username", "age"]).sort({ age: -1 }).skip((page - 1) * limit).limit(limit)
    },

    login: (username, password) => {
        return UserModel.find({ username, password })
    }
}


module.exports = UserService