import type {NextApiRequest, NextApiResponse} from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json({"test":"Successful"});
}

export default handler;