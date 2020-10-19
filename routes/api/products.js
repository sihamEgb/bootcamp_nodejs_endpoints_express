const express = require("express");
const router = express.Router();
const uuid = require("uuid");

let products = require("../../Products");


// get all products
router.get("/products",(req,res) => {
	res.json(products);
})

// get product by id
router.get('/:id', (req,res) => {
	const found = products.some(product => product.id === parseInt(req.params.id));
	if(found){
		res.json(products.filter((product) => product.id === parseInt(req.params.id)));
	}
	else{
		res.sendStatus(400);
	}
});

// create new product
router.post('/',(req,res) => {
	console.log("request",req.body);
	const newProduct = {
		id:uuid.v1(),
		name:req.body.name,
		price:req.body.price,
	}

	console.log("new product",newProduct);
	if(!newProduct.name || !newProduct.price){
		return res.sendStatus(400);
	}
	products.push(newProduct);
	res.json(products);
});
module.exports = router