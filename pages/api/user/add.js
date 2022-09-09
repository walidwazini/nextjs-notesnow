

import connectMongo from "../../../utils/db"
import User from "../../../models/user"

/**
 * 
 * @param {import("next").NextApiRequest} req 
 * @param {import("next").NextApiResponse} res 
 */

const addUser = async (req, res) => {
  const { name, email } = req.body
  try {
    await connectMongo()

    const newUser = await User.create({ name, email })
    res.json({ newUser })

  } catch (err) {
    console.log(err)
  }
}

export default addUser