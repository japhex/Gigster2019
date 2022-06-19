import mongoose from 'mongoose'

const Schema = mongoose.Schema
const SchemaTypes = mongoose.Schema.Types

const gigSchema = new Schema({
  artist: {
    name: { type: String },
    image: { type: String },
  },
  date: { type: String },
  venue: {
    location: { type: String },
    name: { type: String },
    latitude: { type: String },
    longitude: { type: String },
    city: { type: String },
    country: { type: String },
  },
  lineup: { type: SchemaTypes.Mixed },
  festival: {
    start_date: { type: String },
    end_date: { type: String },
  },
  userId: { type: String },
})

export const Gig = mongoose.model('Gig', gigSchema)
