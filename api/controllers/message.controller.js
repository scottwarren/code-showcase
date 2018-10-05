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
      'message': 'Messages fetched successfully',
      messages
    });
  });
}

export const generateStubMessages = (req, res) => {
  const stubMessage = {
    isUnread: Math.random() > 0.5,
    author: 'Frederick Jones',
    isSentByCurrentUser: Math.random() > 0.5,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus molestie lacus a est fringilla lobortis. Mauris ac rhoncus turpis. Praesent sed ullamcorper dui. Duis lacinia urna ut urna tincidunt, quis porttitor nulla vestibulum.',
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