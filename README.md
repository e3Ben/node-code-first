# node-code-first
This is a nodejs code first database starter project

# Environment Setup
- Copy knexfile.template.js to knexfile.js and change fields as necessary
- Create the empty database
- Run `knex migrate:latest` to update the database

NOTE: The dev connection is currently being source from the ./connections/[name].json file
NOTE: You have to manually create the database first (just the database NO tables)

# Migrations
Migrations are handled through knex. Run `knex --help` to get more info

# Scaffold TypeScript Types
`yarn gen-models`
