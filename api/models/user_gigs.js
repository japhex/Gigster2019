import mongoose from 'mongoose'
const Schema = mongoose.Schema

const userGigsSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  gig: { type: Schema.Types.ObjectId, ref: 'Gig' },
  rating: Number,
})

export const UserGigs = mongoose.model('UserGigs', userGigsSchema)
