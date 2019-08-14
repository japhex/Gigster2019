import mongoose from 'mongoose'
const Schema = mongoose.Schema

const userSchema = new Schema({
	username: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	created_at: Date,
	updated_at: Date
});

export const User = mongoose.model('User', userSchema);