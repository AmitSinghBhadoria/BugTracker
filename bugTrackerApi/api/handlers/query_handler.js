insertUserQuery =
  "insert into user_master(name, username, email, is_admin, password) values($1,$2,$3,$4)";

getUserByUsername = "select * from user_master where username = $1";

module.exports = {
  insertUserQuery,
  getUserByUsername
};
