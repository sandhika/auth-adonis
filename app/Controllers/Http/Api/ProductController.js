'use strict'
const axios = use('axios')
const Env = use('Env')
var https = use('https');
const ProductModel = use('App/Models/Product')
const VwProductModel = use('App/Models/VwProduct')
const CurrencyModel = use('App/Models/Currency')

var JDS_API_URL = Env.get('JDS_API_URL', 'https://60c18de74f7e880017dbfd51.mockapi.io/api/v1/jabar-digital-services/product');
var FREECUR_API_URL = Env.get('FREECUR_API_URL', 'https://freecurrencyapi.net/api/v2/latest');
var FREECUR_API_KEY = Env.get('FREECUR_API_KEY', '3e8797d0-6499-11ec-a1c3-339e729cac6a');

class ProductController {

    // Download Product from Resource
    async getDownloadProduct({ request, response, view }) {
        try {
            var usr = await auth.getUser();

            const delProduct = await ProductModel.truncate()

            axios.get(JDS_API_URL, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(async function(res) {

                    console.log(res.data);

                    for (let data of res.data) {

                        //

                        var dtNew = new ProductModel()
                        dtNew.id = data.id
                        dtNew.product = data.id
                        dtNew.department = data.department
                        dtNew.price = data.price
                        dtNew.createdAt = data.createdAt
                        await dtNew.save()

                    }

                    return response.json({ "msg": "Sukses Download" })

                }).catch(function(error) {
                    console.log(error);
                });

        } catch (error) {
            response.send('Missing or invalid jwt token');
        }

    }

    // Get One Dollar from API
    async getOneDolar({ request, response, view }) {
        try {
            var usr = await auth.getUser();

            const delProduct = await ProductModel.truncate()

            axios.get(FREECUR_API_URL + '?apikey=' + FREECUR_API_KEY, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(async function(res) {
                    console.log(res.data);

                    var dtNew = new CurrencyModel();
                    dtNew.name = 'IDR'
                    dtNew.price = res.data.data['IDR']
                    await dtNew.save()


                }).catch(function(error) {
                    console.log(error);
                });

        } catch (error) {
            response.send('Missing or invalid jwt token');
        }

    }

    // Get All Data
    async getAll({ request, response, view }) {
        try {
            var usr = await auth.getUser();

            var data = await VwProductModel.all();

            return response.json({ "data": data })

        } catch (error) {
            response.send('Missing or invalid jwt token');
        }
    }

}

module.exports = ProductController