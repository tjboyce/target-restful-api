const express = require('express');
const router = express.Router();
const axios = require('axios');
const dataStore= require('./data.store.js')

router.get('/:id', (req, res) => {
   let id = req.url 
    axios({
        method: 'GET',
        url: 'https://redsky.target.com/v2/pdp/tcin'+ id + '?excludes=taxonomy,promotion,bulk_ship,rating_and_review_reviews,rating_and_review_statistics,question_answer_statistics',
        params: {
            limit: 5,
        }
    }).then(response => {
        let newItem = { price: response.data.product.price.listPrice.price, id: response.data.product.item.tcin, name: response.data.product.item.product_description.title }
        res.send(newItem)
        dataStore.push(newItem)
        console.log(dataStore)
    }).catch(error => {
        console.log('error in router GET request', error);
    })
})

module.exports = router;