import mongoose from 'mongoose'
import faker from 'faker'

import Message from '../models/message.model'

export const getMessages = (req, res) => {
  // Sort by newest message first
  Message.find().sort({ 'createdAt': -1 }).exec((err, messages) => {
    if (err) {
      return res.json({
        'success': false,
        'message': 'Messages could not be fetched'
      });
    }

    return res.json({
      'success': true,
      'message': 'Messages fetched successfully',
      messages
    });
  });
}

export const generateStubMessages = (req, res) => {
  const stubMessage = {
    isUnread: true,
    author: faker.fake('{{name.firstName}} {{name.lastName}}'),
    isSentByCurrentUser: faker.fake('{{random.boolean}}'),
    content: faker.fake('{{lorem.paragraphs(5)}}'),
  }

  const newMessage = new Message(stubMessage)

  newMessage.save((err, message) => {
    if (err) {
      return res.json({
        'success': false,
        'message': 'New Message generation failed',
      })
    }

    return res.json({
      'success': true,
      'message': 'New Message generated successfully',
      message,
    })
  })
}

export const markMessageAsRead = (req, res) => {

  const messageId = req.params.id

  Message.findOneAndUpdate({ _id: messageId }, { isUnread: false }).exec((err, message) => {
    if (err) {
      return res.json({
        'success': false,
        'message': 'Message could not be marked as read'
      })
    }
    if (message) {
      return res.json({
        'success': true,
        'message': 'Message was successfully marked as read',
        'messageId': messageId,
      })
    } else {
      return res.json({
        'success': false,
        'message': 'Message with the given ID was not found'
      })
    }
  })
}