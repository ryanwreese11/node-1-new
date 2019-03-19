




const express = require('express')
const products = require('../products.json')
const app = express()
const getProducts = require('./getProducts')

const PORT = 3369

app.get('/api/products', getProducts.getProducts)
app.get('/api/products/:id', getProducts.getProductById)
app.get('/api/productsprice', getProducts.getPrice)



app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})