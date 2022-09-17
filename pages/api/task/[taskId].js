import Morgan from 'morgan'
import asyncHandler from 'express-async-handler'

import Task from "../../../models/task";
import connectMongo from "../../../utils/db";
import runMiddleware from '../../../utils/runMiddleware'

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */

connectMongo()

export default asyncHandler(async (req, res) => {
  const { body, method, query: { taskId } } = req
  const morgan = Morgan('dev')


  switch (method) {
    case 'GET':
      try {
        const task = await Task.findById(taskId)
        if (!task) return res.status(404).json({ msg: 'Task does not exist, check your taskId' })
        await runMiddleware(req, res, morgan)
        return res.status(200).json({ task: task })
      } catch (err) {
        console.log(err)
        return res.status(400).json({ error: err.message })
      }

    case 'DELETE':
      try {
        await Task.findByIdAndDelete(taskId)
        // if (!deletedTsk) return res.status(404).json({msg: 'Does does not exist'})
        res.status(200).json({ msg: 'Task deleted' })
      } catch (err) {
        return res.status(400).json({ error: err.message })
      }
    case 'PUT':
      try {
        const edittedTask = await Task.findByIdAndUpdate(taskId, body, {
          new: true,
          runValidators: true
        })
        return res.status(200).json({ task: edittedTask })
      } catch (err) {
        console.log(err)
      }

    default:
      return res.status(400).json({ msg: 'this method si not supported.' })
  }
})