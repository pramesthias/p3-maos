const { MongoClient } = require("mongodb");

const uri = "";

const client = new MongoClient(uri);

let db;

async function connect() {
  try {
    const database = client.db("Maos");
    db = database;
    return database;
  } catch (error) {
    console.log(error);
  }
}

function getDb() {
  return db;
}

module.exports = { connect, getDb };
