import knex from 'knex'
import {resolve} from './services/pathProviderService'
import {readFile} from 'fs/promises'

const getDbConnection = async (name:string) => {
    const connConfigPath = resolve(`/connections/${name}.json`)
    const contents = await readFile(connConfigPath, {encoding: 'utf-8'});
    const config = JSON.parse(contents)
    const db = knex(config)

    return db
}

const getDb = () => getDbConnection('db')


export {
    getDb,
}
