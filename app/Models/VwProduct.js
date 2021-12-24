'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class VwProduct extends Model {
    static get table() {
        return 'vwPayments'
    }
}

module.exports = VwProduct