const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.listen(8080, () => {
	console.log('server is running on localhost 8080');
});

let todos = [];

app.get('/', (req, res) => {
	res.send({ status: 'hello' });
});

app.post('/todos', (req, res) => {
	todos.push({
		...req.body,
	});
	res.send(todos);
});

app.get('/todos', (req, res) => {
	res.send(todos);
});
