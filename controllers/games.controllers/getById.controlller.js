module.exports = async (req, res) => {
    try {
        const db = await require('../../database').getInstance();

        const [game] = await db.execute('SELECT * FROM GameTable WHERE id = ?', [req.params.id]);

        res.status(200).send({ error: false, game });
    } catch (e) {
        res.status(200).send({ error: true, message: e.message });
    }
};
