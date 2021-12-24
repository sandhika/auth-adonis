'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CurrencySchema extends Schema {
    up() {
        this.create('currencies', (table) => {
            table.increments()
            table.string('name', 150).notNullable()
            table.float('price', 18, 2)
            table.timestamps()
        })
    }

    down() {
        this.drop('currencies')
    }
}

module.exports = CurrencySchema