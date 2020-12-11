module.exports = {
  development: {
    // Complete.
    client: 'sqlite3',
      useNullAsDefault: true, // needed for sqlite
      connection: {
        filename: './data/projects.db3',
        
      },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: './data/seeds'
    },
  },
  testing: {
    // Complete (otherwise `npm test` won't work in your local machine).
    migrations: {
      directory: "./data/migrations",
    },
  }
};
