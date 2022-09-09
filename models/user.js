import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
})

const User = models.User || model('User', UserSchema)

export default User