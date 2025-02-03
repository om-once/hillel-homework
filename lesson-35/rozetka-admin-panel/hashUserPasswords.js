import bcrypt from 'bcrypt';
import UserModel from './mongo/user.model.js';
import mongoose from 'mongoose';

const saltRounds = 10;

async function hashUserPasswords() {
	try {
		await mongoose.connect(
			'mongodb+srv://minenkoreserve:b68NX3NPZ8g4oczt@cluster0.amhfx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
			},
		);

		const users = await UserModel.find();
		for (const user of users) {
			const hashedPassword = await bcrypt.hash(user.password, saltRounds);
			user.password = hashedPassword;
			await user.save();
		}

		console.log('Паролі успішно хешовані!');
	} catch (error) {
		console.error('Помилка під час хешування паролів:', error);
	} finally {
		mongoose.connection.close();
	}
}

hashUserPasswords();
