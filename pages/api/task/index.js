import Morgan from 'morgan'
import asyncHandler from 'express-async-handler'

import Task from "../../../models/task";
import connectMongo from "../../../utils/db";
import runMiddleware from '../../../utils/runMiddleware'

/**
 * 
 * @param {import("next").NextApiRequest} req 
 * @param {import("next").NextApiResponse} res 
 */

connectMongo()

const task = asyncHandler(async (req, res) => {
  const { method, body } = req
  const morgan = Morgan('dev')


  switch (method) {
    case 'GET':
      try {
        const tasks = await Task.find()
        await runMiddleware(req, res, morgan)
        return res.status(200).json({ tasks: tasks })
      } catch (err) {
        console.log(err)
        return res.status(400).json({ error: err.message })
      }
    case 'POST':
      try {
        const newTask = new Task(body)
        const savedTask = await newTask.save()

        return res.status(200).json(savedTask)

      } catch (err) {
        return res.status(400).json(err)
      }
  }
})

export default task
