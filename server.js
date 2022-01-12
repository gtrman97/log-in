const express = require('express');
const app = express();
const bcrypt = require('bcrypt');

const users = [];

app.get('/users', (req, res) => {
    res.json(users);
});

app.post('/users', async (req, rest) => {
    try {
        const salt = await bcrypt.genSalt();
    }
    const user = {user: req.body.name, password: req.body.password};
    users.push(user);
    res.status(201).send();

})

app.listen(3000);