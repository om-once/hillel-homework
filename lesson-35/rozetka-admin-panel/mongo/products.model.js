import { Schema, model } from 'mongoose';

const ProductsSchema = new Schema({
	_id: {
		type: String,
	},
	name: {
		type: String,
		required: true,
	},
	category: {
		type: String,
		required: true,
	},
	quantity: {
		type: Number,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	img: {
		type: String,
		required: true,
	},
});

export default model('Products', ProductsSchema);
