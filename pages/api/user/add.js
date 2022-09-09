

import connectMongo from "../../../utils/db"
import User from "../../../models/user"

/**
 * 
 * @param {import("next").NextApiRequest} req 
 * @param {import("next").NextApiResponse} res 
 */

export default async function addUser(req, res) {
  const { name, email } = req.body
  try {
    await connectMongo()
    console.log(`Mongo connected!`)

    const newUser = await User.create({ name, email })
    console.log(newUser)
    res.json({ newUser })

  } catch (err) {
    console.log(err)
  }
}