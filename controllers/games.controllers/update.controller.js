module.exports = async (req, res) => {
    try {
        const db = await require('../../database').getInstance();

        const query = 'UPDATE GameTable SET';
        let condition = '';
        const replacements = [];

        for (const key in req.body) {
            condition += !condition ? ` ${key} = ?` : `, ${key} = ?`;
            replacements.push(req.body[key]);
        }

        replacements.push(req.params.id);

        await db.execute(query + condition + ' WHERE id = ?', replacements);

        res.status(200).send({ error: false, message: 'Game was updated' });
    } catch (e) {
        res.status(200).send({ error: true, message: e.message });
    }
};
