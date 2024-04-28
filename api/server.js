const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('node:fs');
const readline = require('readline');
const uuid = require('uuid').v4;

const app = express();
app.use(cors());
app.use(bodyParser.json());

const users = [];

app.listen(3001, () => {
    console.log('application is started on 3001 port');
    const fileStream = fs.createReadStream('./NxtWave_Raw');
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });
    
    rl.on('line', (line) => {
        const data = line.split('|').map(d => d.trim()).filter(d => d != '');
        let user = {};
        user['id'] = uuid();
        user['name'] = data[0];
        user['age'] = data[1];
        user['country'] = data[2];
        user['mobile'] = data[3];
        user['email'] = data[4];
        users.push(user);
    });
    
    rl.on('close', () => {
        users.splice(0, 2);
    });
});

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get('/users', (req, res) => {
    const { search } = req.query;
    if (search) {
        const filteredUsers = users.filter(u => u.name?.toLowerCase().includes(search.toLowerCase()));
        res.send(filteredUsers);
    } else {
        res.send(users);
    }
});