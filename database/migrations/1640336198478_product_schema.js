'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductSchema extends Schema {
    up() {
        this.create('products', (table) => {
            table.increments()
            table.string('department', 150)
            table.string('product', 150)
            table.float('price', 18, 2)
            table.float('priceIDR', 18, 2)

            table.timestamp('createdAt')
            table.timestamps()
        })
    }

    down() {
        this.drop('products')
    }
}

module.exports = ProductSchema