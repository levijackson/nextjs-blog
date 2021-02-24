import { getPosts } from '../../lib/posts'

export default (req, res) => {
    const results = req.query.q ? getPosts().filter(post => post.id.includes(req.query.q.toLowerCase())) : [];

    res.status(200).json({ results });
}