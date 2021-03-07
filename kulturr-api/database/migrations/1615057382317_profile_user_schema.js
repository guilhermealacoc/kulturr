'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProfileUserSchema extends Schema {
  up () {
    this.create('profile_users', (table) => {
      table.increments()
      table.timestamps()
      table.integer('user_id').unsigned().references('id').inTable('users').notNullable()
      table.integer('age').notNullable()
      table.string('gender', 80).notNullable()
      table.string('photo_url', 100)
      table.integer('id_wallet').unsigned().references('id').inTable('wallets').notNullable()
    })
  }

  down () {
    this.drop('profile_users')
  }
}

module.exports = ProfileUserSchema
