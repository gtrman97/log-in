const express = require('express');
const app = express();
const bcrypt = require('bcrypt');

const users = [];

app.get('/users', (req, res) => {
    res.json(users);
});

app.post('/users', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        console.log(salt);
        console.log(hashedPassword);
        const user = {user: req.body.name, password: hashedPassword};
        users.push(user);
        res.status(201).send();
    } catch {
        res.status(500).send();
    }

})

app.listen(3000);