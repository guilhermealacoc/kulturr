'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProfileBusinessSchema extends Schema {
  up () {
    this.create('profile_businesses', (table) => {
      table.increments()
      table.timestamps()
      table.integer('business_id').unsigned().references('id').inTable('user_businesses').notNullable()
      table.integer('document_number').notNullable()
      table.string('legal_register_number', 80).notNullable()
      table.string('adress', 80).notNullable()
      table.string('photo_url', 100)
      table.integer('id_ticket').unsigned().references('id').inTable('tickets').notNullable()
    })
  }

  down () {
    this.drop('profile_businesses')
  }
}

module.exports = ProfileBusinessSchema
