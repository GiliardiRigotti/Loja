const express = require('express')
const connection = require('./database/connection')


const routes = express.Router()

routes.route('/products')
  .get( async function(req, res) {
    const products = await connection('products').select('*')

    return res.json(products)
  })
  .post(async (req, res) => {
    const {name, description, size,value, categorie_id} = req.body;

    await connection('products').insert({
        name,
        description,
        size,
        value,
        categorie_id
    })
    return res.json();
  })
  .put(function(req, res) {
   
  });

  routes.route('/categories')
  .get(function(req, res) {
    const categories = await connection('categories').select('*')

    return res.json(categories)
  })
  .post(async (req, res) => {
    const {name} = req.body;

    await connection('products').insert({
        name,
    })
  })
  .put(function(req, res) {
    res.send('Update the book');
  });

routes.get('/login',function (req, res){
    res.send('login')
})

module.exports = routes;