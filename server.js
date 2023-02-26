import express from 'express';

const app = express();
const port = 5000;
const users = []

app.use(express.json());

app.get('/users', (req, res) => {
    res.json(users);
});

app.post('/users', (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const email = req.body.email;
    const user = { id, name, email };
    users.push(user);
    res.json(user);
});

app.put('/users/:id', (req, res) => {
    const routeParamsId = req.params.id;
    const nameBodyParams = req.body.name;
    const index = users.findIndex(user => user.id === Number(routeParamsId));
    if (index > -1) {
        users[index].name = nameBodyParams;
    }
    res.json({ message: 'success' });
});

app.delete('/users/:id', (req, res) => {
    const routeParamsId = req.params.id;
    const index = users.findIndex(user => user.id === Number(routeParamsId));
    if (index > -1) {
        users.splice(index, 1);
    }
    res.json({ message: 'success' });
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
