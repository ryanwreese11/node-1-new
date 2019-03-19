
const products = require('../products.json')  

module.exports = {

getProducts: (req, res) => res.status(200).send(products),
getProductById: (req, res) => {
    const { id } = req.params
    const product = products.find((item) => item.id == id)
    if(!product) {
        res.status(500).send('item not on list')
    }
     res.status(200).send(product)
},
getPrice: (req, res) => {
    if (req.query.price) {
        const productPrice = products.filter(val => val.price >= req.query.price *1);
        return res.status(200).send(productPrice);
    }
    res.status(200).send(products);
}

}
