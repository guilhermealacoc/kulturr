'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserBusinessSchema extends Schema {
  up () {
    this.create('user_businesses', (table) => {
      table.increments()
      table.string('name', 80).notNullable()
      table.string('username', 80).notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('user_businesses')
  }
}

module.exports = UserBusinessSchema
