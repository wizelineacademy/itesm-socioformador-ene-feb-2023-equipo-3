import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    console.log("si entroooooo")
    const flaskResponse = await axios.post('http://localhost:5000/generate-json', req.body, {
      headers: req.headers,
    });
    res.status(200).json(flaskResponse.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error generating JSON' });
  }
}
