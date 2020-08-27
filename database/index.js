const mysql = require('mysql2/promise');

module.exports = (() => {
    let instance;

    async function initConnection() {
        const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

        return await mysql.createConnection({ host: DB_HOST, user: DB_USER, password: DB_PASSWORD, database: 'GameStore' });
    }

    return {
        getInstance: async () => {
            if (!instance) instance = await initConnection();
            return instance;
        }
    };
})();
