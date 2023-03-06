// Update with your config settings.
const {getConfig} = require('./connections')
const devConfig = getConfig('db')

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    ...devConfig,
    migrations: {
      tableName: "knex_migrations"
    }
  },

  staging: {
    client: 'mssql',
    connection: {
      host: 'localhost',
      user: 'user',
      password: 'password',
      database: 'database'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'mssql',
    connection: {
      host: 'localhost',
      user: 'user',
      password: 'password',
      database: 'database'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
