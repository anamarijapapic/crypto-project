import { getTimeRangeBlocks } from '@/services/rpc';

export default async function handler(req, res) {
  try {
    const { timeRange = '24h', page = 1, limit = 10 } = req.query;
    const blocks = await getTimeRangeBlocks(
      timeRange,
      parseInt(page),
      parseInt(limit)
    );
    // console.log('Fetched blocks:', blocks);
    res.status(200).json(blocks);
  } catch (error) {
    console.error('Error fetching blocks:', error);
    res.status(500).json({ error: 'Failed to fetch blocks' });
  }
}
