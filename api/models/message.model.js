import mongoose from 'mongoose'

var Schema = mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now
  },
  isUnread: Boolean,
  author: String,
  isSentByCurrentUser: Boolean,
  content: String,
})

export default mongoose.model('Message', Schema)