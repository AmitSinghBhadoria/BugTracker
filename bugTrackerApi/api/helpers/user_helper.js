const client = require("../../config/dbConfig");
const queryHandler = require("../handlers/query_handler");

const registerUser = data => {
  return client.query(queryHandler.insertUserQuery, [
    data.name,
    data.username,
    data.email,
    data.user_role,
    data.password
  ]);
};

const loginUser = data => {
  return client.query(queryHandler.getUserByUsername, [data]);
};

module.exports = {
  registerUser,
  loginUser
};
