import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import ProductsModel from './mongo/products.model.js';
import UserModel from './mongo/user.model.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config();
const SECRET_KEY =
	'058c8d96d0302f686220c3179bad568d639e07e5f38fe0c8ed99ede7cca02998';

const app = express();
const port = 8080;

const connect = mongoose.connect(
	'mongodb+srv://minenkoreserve:b68NX3NPZ8g4oczt@cluster0.amhfx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
);

connect
	.then(() => console.log('Підключено до MongoDB'))
	.catch(err => console.error('Помилка підключення до MongoDB:', err));

app.use(cors());
app.use(express.json());

app.get('/users', async (_, res) => {
	try {
		const users = await UserModel.find();
		res.send(users);
	} catch (error) {
		res.status(500).send(error, 'Помилка сервера');
	}
});

app.post('/users', async (req, res) => {
	const { username, password } = req.body;

	try {
		const user = await UserModel.findOne({ username });

		if (!user) {
			return res.status(401).json({ message: 'Користувача не знайдено' });
		}

		const isPasswordValid = await bcrypt.compare(password, user.password);

		if (!isPasswordValid) {
			return res.status(401).json({ message: 'Невірний пароль' });
		}

		const token = jwt.sign({ username: user.username }, SECRET_KEY, {
			expiresIn: '1h',
		});

		res.json({ token });
	} catch (error) {
		res.status(500).json({ message: 'Помилка сервера', error });
	}
});

app.get('/products', async (_, res) => {
	try {
		const products = await ProductsModel.find();
		res.send(products);
	} catch (error) {
		res.status(500).send(error, 'Помилка сервера');
	}
});

app.post('/products', async (req, res) => {
	try {
		const newProduct = new ProductsModel(req.body);
		const savedProduct = await newProduct.save();

		res.status(201).send(savedProduct);
	} catch (error) {
		res.status(500).send('Помилка сервера: ' + error.message);
	}
});

app.put('/products/:id', async (req, res) => {
	try {
		const id = req.params.id;

		const existingProduct = await ProductsModel.findById(id);
		if (!existingProduct) {
			return res.status(404).send('Товар не знайдено');
		}
		await ProductsModel.updateOne({ _id: id }, req.body);

		const updatedProduct = await ProductsModel.findById(id);

		res.status(200).send(updatedProduct);
	} catch (error) {
		res.status(500).send('Помилка сервера: ' + error.message);
	}
});

app.delete('/products/:id', async (req, res) => {
	try {
		const id = req.params.id;
		const result = await ProductsModel.deleteOne({ _id: id });
		if (result.deletedCount === 0) {
			return res.status(404).send('Продукт не знайдено');
		}
		res.status(200).send({ message: 'Продукт успішно видалено' });
	} catch (error) {
		res.status(500).send('Помилка сервера: ' + error.message);
	}
});

app.listen(port, () => {
	console.log(`Сервер запущено на порті ${port}`);
});
