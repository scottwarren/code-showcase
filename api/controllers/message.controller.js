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
