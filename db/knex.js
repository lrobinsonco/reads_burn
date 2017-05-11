require("dotenv").load()
var config = require('../knexfile')
var environment = 'development'
var pg = require('knex')(config[environment])

module.exports = pg
