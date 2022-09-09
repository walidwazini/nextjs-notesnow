import { Schema, model, models } from "mongoose";

const TaskSchema = new Schema({
  title: {
    type: String,
    trim: true,
    maxlength: [40, 'title is too long.']
  },
  content: {
    type: String,
    trim: true,
    maxlength: [200, 'Contnent is too long.']
  },
}, {
  timestamps: true,
  versionKey: false,
})

const Task = models.Task || model('Task', TaskSchema)

export default Task