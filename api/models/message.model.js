import mongoose from 'mongoose'

var Schema = mongoose.Schema({
  createdAt:{
    type: Date,
    default: Date.now
  },
  _teacherId: String,
  _employerId: String,
  _lastMessageId: String,
  thread: Array,
})

export default mongoose.model('Invite', Schema)