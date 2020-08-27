module.exports = async (req, res) => {
    try {
        const db = await require('../../database').getInstance();

        await db.execute('DELETE FROM GameTable WHERE id = ?', [req.params.id]);

        res.status(200).send({ error: false, message: 'Game was deleted' });
    } catch (e) {
        res.status(200).send({ error: true, message: e.message });
    }
};
