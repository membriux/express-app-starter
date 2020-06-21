// Parse config
let Parse = require('parse/node')

Parse.initialize("APP_ID", "CLIENT_ID")
Parse.serverURL = "SERVER_URL"

module.exports = Parse
