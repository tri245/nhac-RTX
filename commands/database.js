const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, '../data/database.DB');
const db = new sqlite3.Database(DBPath);

