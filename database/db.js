const { createAction } = require("@reduxjs/toolkit");
const createUserTable = require("../models/user");
const sqlite = require("sqlite3");

const filePath = "./sql.db";

function createDbConnection() {
    const db = new sqlite.Database(filePath, (error) => {
        if (error) {
            return console.error(error)
        }
    })
    
    createUserTable(db);
    
    console.log("database connected successfully");
    return db;
}

const db = createDbConnection();

module.exports = db;