'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TicketSchema extends Schema {
  up () {
    this.create('tickets', (table) => {
      table.increments()
      table.integer('business_id').unsigned().references('id').inTable('user_businesses').notNullable()
      table.integer('points').unsigned().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('tickets')
  }
}

module.exports = TicketSchema
