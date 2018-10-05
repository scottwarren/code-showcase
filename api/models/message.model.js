import mongoose from 'mongoose'

var Schema = mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now
  },
  unread: Boolean,
  authorId: String,
  sentByCurrentUser: Boolean,
  title: String,
  messageSynopsis: String,
})

export default mongoose.model('Message', Schema)