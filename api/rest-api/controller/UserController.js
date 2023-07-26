const user = require('../models/user.js');

exports.getUserById = async (id) => {
    const user = await user.findById(id);
    return user;
};

exports.login = async (user) => {
    const userLogin = await user.login(user);
    return userLogin;
};

exports.getUsers = async (res) => {
    const users = await user.findAll();
    return res.send(users);
}

exports.createUser = async (user) => {
    const newUser = await user.create(user);
    return newUser;
}

exports.updateUser = async (id, user) => {
    const updateUser = await user.update(id, user);
    return updateUser;
}

exports.deleteUser = async (id) => {
    const deleteUser = await user.delete(id);
    return deleteUser;
}
