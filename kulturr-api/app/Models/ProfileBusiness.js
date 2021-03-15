'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ProfileBusiness extends Model {
    
    profileBusiness (){
        return this.belongsTo('App/Models/UserBusiness')
    }

    ticket (){
        return this.hasOne('App/Models/Ticket')
    }

}

module.exports = ProfileBusiness
