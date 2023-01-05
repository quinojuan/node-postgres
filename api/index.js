const { query } = require("express");
const { Pool } = require("pg");

const config = {
  user: "postgres",
  host: "localhost",
  password: "admin",
  database: "library",
};

const pool = new Pool(config);

const getBooks = async () => {
  try {
    const res = await pool.query("select * from books");
    console.log(res.rows);
  } catch (error) {
    console.log(error);
  }
};

const insertUser = async () => {
  await pool.query(`INSERT INTO users(username, password) VALUES ($1,$2)`, [
    "camila",
    "camilawww",
  ]);

  const res = await pool.query("select * from users");
  console.log(res.rows);
};

const deleteUser = async () => {
  const text = "DELETE FROM users where username = $1";
  const value = ["jhon"];
  const res = await pool.query(text, value);
  console.log(res);
};

const deleteAllUsers = async () => {
  const text = "DELETE FROM users";
  const res = await pool.query(text);
  console.log(res);
};

const getUsers = async () => {
  const text = "SELECT * FROM users";
  const res = await pool.query(text);
  console.log(res.rows);
  // pool.end();
};

const updateUser = async () => {
  const text = "UPDATE users set username = $1 where username = $2";
  const values = ["juan", "camila"];

  const res = await pool.query(text, values);
  console.log(res);
  // pool.end()
};

// getBooks();
// insertUser();
// deleteUser();
// deleteAllUsers();
getUsers();
// updateUser();
