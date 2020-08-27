module.exports = async (req, res) => {
    try {
        const db = await require('../../database').getInstance();

        const query = 'SELECT * FROM GameTable';
        let condition = '';
        const replacements = [];

        for (const key in req.query) {
            condition += !condition ? ` WHERE ${key} = ?` : ` AND ${key} = ?`;
            replacements.push(req.query[key]);
        }

        const [games] = await db.execute(query + condition, replacements);

        res.status(200).send({ error: false, games });
    } catch (e) {
        res.status(200).send({ error: true, message: e.message });
    }
};
