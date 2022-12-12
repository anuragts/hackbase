import type{ NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../db/client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
 const allUsers = await prisma.user.findMany();
    res.json(allUsers);
}