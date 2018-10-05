import mongoose from 'mongoose'

import Message from '../models/message.model'

export const getMessages = (req, res) => {
  Message.find().exec((err, messages) => {
    if (err) {
      return res.json({
        'success': false,
        'message': 'Messages could not be fetched'
      });
    }

    return res.json({
      'success': true,
      'message':'Messages fetched successfully',
      messages
    });
  });
}

export const generateStubMessages = (req, res) => {
  const stubMessage = {
    unread: Math.random() > 0.5,
    authorId: 'someId',
    sentByCurrentUser: Math.random() > 0.5,
    title: 'Some title',
    messageSynopsis: 'Some content',
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