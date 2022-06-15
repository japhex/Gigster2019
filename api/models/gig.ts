import mongoose from 'mongoose'
const Schema = mongoose.Schema

const gigSchema = new Schema({
  songKickGig: { type: Object },
})

export const Gig = mongoose.model('Gig', gigSchema)
