const client = require('../../config/dbConfig');
const queryHandler = require('../handlers/query_handler');

const registerUser = (data) => {
    return client.query(queryHandler.insertUserQuery, [data.name, data.username, data.email, data.user_role]);
}

module.exports ={
    registerUser
}