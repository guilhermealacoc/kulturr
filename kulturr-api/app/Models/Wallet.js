'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Wallet extends Model {
    wallet (){
        return this.belongsTo('App/Models/ProfileUser')
    }
}

module.exports = Wallet
