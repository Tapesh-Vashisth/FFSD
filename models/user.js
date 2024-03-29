function createUserTable(db) {
  db.exec(`
        DROP TABLE if exists user;
    `)

  db.exec(`
        CREATE TABLE if not exists user (
            user_id TEXT,
            name TEXT,
            email TEXT,
            password TEXT,
            gender TEXT,
            followers INTEGER,
            following INTEGER,
            friends INTEGER,
            posts INTEGER,
            dob TEXT,
            description TEXT,
            status INTEGER,
            token TEXT,
            joined TEXT
        )
    `)
}

module.exports = createUserTable
