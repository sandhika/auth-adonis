'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VwProductsSchema extends Schema {
    up() {
        let strSQL = 'CREATE VIEW vwProducts AS SELECT \n' +
            ' p.id, p.department, p.product, p.price,  (select price from currencies LIMIT 1) * p.price  as priceIDR, p.createdAt, p.created_at, p.updated_at \n' +
            ' FROM products p';

        this.raw(strSQL);
    }

    down() {
        this.drop('vw_products')
    }
}

module.exports = VwProductsSchema