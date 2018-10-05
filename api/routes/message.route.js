import express from 'express'

import * as messageController from '../controllers/message.controller'

const router = express.Router()

router.route('/')
  .get(messageController.getInvite)

// router.route('/:id')
//   .get(messageController.getTodo)
//   .delete(messageController.deleteTodo)

export default router