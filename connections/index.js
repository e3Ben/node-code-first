const fs = require('fs')

/**
 * @typedef Connection
 * @property {string} host
 * @property {string} user
 * @property {string} password
 * @property {string} database
 */

/**
 * @typedef Config
 * @property {string} client
 * @property {Connection} connection
 */

/**
 * @param {string} connection Name of json file in the connections folder (without the extension)
 * @returns {Config}
 */
const getConfig = (connection) => {
    const configJSON = fs.readFileSync(`./connections/${connection}.json`, {encoding: 'utf-8'})
    const config = JSON.parse(configJSON)
    return config
}

module.exports = {
    getConfig,
}