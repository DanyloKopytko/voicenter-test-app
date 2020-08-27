module.exports = async (req, res) => {
    try {
        const db = await require('../../database').getInstance();

        const { name, description, rating } = req.body;

        db.execute('INSERT INTO GameTable (name, description, rating) VALUES (?, ?, ?)', [name, description, rating]);

        res.status(200).send({ error: false, message: 'A new game was added to the database'});
    } catch (e) {
        res.status(200).send({ error: true, message: e.message });
    }
};
