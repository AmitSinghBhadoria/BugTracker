insertUserQuery =
  "insert into user_master(name, username, email, is_admin) values($1,$2,$3,$4)";

  module.exports ={
    insertUserQuery
  }
