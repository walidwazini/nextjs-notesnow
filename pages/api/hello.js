// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectMongo from "../../utils/db"
/**
 * 
 * @param {import("next").NextApiRequest} req 
 * @param {import("next").NextApiResponse} res 
 */

export default async function handler(req, res) {
  await connectMongo()
  res.status(200).json({ message: "Hello" })
}

