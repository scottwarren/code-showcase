import express from 'express'

import * as MessageController from '../controllers/message.controller'

const router = express.Router()

router.route('/')
  .get(MessageController.getMessages)

export default router