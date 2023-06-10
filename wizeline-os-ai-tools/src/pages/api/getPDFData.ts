import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaa")
    const formData = new FormData();
    formData.append('file', req.body);

    const flaskResponse = await axios.post('http://127.0.0.1:5000/generate-json', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    res.status(200).json(formData);

}