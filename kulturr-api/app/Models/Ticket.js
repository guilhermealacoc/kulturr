'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Ticket extends Model {
    ticket (){
        return this.belongsTo('App/Models/ProfileBusiness')
    }
}

module.exports = Ticket
