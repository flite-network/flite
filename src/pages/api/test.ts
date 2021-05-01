import {connectToDatabase} from '../../db/database';
import type {NextApiRequest, NextApiResponse} from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json({"output":"Successful!"});
    connectToDatabase();
}

export default handler;