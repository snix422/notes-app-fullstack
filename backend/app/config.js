require('dotenv').config();

module.exports = {
    port: process.env.PORT || 3000,
    database: process.env.DATABASE,
    sessionSecretKey: process.env.SESSION_KEY_SECRET
}