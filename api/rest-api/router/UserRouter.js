const express = require('express');
const router = express.Router();
const UserController = require('../controller/UserController');

router.get('/', async (res) => {
    try {
        const users = await UserController.getUsers();
        res.status(200).send(users);
    } catch (error) {
    }
});

router.post('/login', async (req, res) => {
    try {
        const user = await UserController.login(req.body);
        if (user) {
            res.status(200).send(user);
        } else {
            res.status(401).send({ message: 'Unauthorized' });
        }
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const user = await UserController.createUser(req.body);
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const user = await UserController.getUserById(req.params.id);
        if (user) {
            res.status(200).send(user);
        } else {
            res.status(404).send({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const user = await UserController.updateUser(req.params.id, req.body);
        res.status(200).send(user);
    } catch (error) {
        if (error.message === 'User not found') {
            res.status(404).send({ message: error.message });
        } else {
            res.status(400).send({ message: error.message });
        }
    }
});

router.delete('/:id', async (req, res) => {
    try {
        UserController.deleteUser(req.params.id);
        res.status(204).send();
    } catch (error) {
        if (error.message === 'User not found') {
            res.status(404).send({ message: error.message });
        }
    }
});

module.exports = router;
