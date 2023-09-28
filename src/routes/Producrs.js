const express = require('express');
const router = express.Router();
const Product = require('../Model/Product')


router.post('/products', async (req, res) => {
    try {
console.log(req.body)
        const newProduct = new Product({
            title: req.body.title,
            price: req.body.price,
            rating: req.body.rating,
            description: req.body.description
        })
        // for single insert 
        const productData = await newProduct.save()
        // for multi insert 
        // const productData = await Product.insertMany([
        //     {
        //         title: "i phone 6 ",
        //         price: 700,
        //         description: "this is very good phone"
        //     },
        //     {
        //         title: "i phone 8 ",
        //         price: 1000,
        //         description: "this is very good phone"
        //     },
        //     {
        //         title: "i phone 10 ",
        //         price: 2000,
        //         description: "this is very good phone"
        //     },
        // ])
        res.status(201).send(productData)
    } catch (error) {
        res.status(500).send({ message: error.message })
        console.log(error.message);
    }
})

// get all products 
router.get('/products', async (req, res) => {
    try {
        const price = req.query.price
        const price2 = req.query.price2
        const price3 = req.query.price3
        const rating = req.query.rating
        console.log(rating)
        let products;
        if (!price) {
             products = await Product.find()
        }
        else {
             products = await Product.find()
        }

        if (products) {
            res.status(200).send({data:products})
        }
        else {
            res.status(502).send({ message: 'Products not found' })
        }
    } catch (err) { res.status(500).send({ message: err.message }) }
})

// get single product 
router.get('/products/:id', async (req, res) => {
    try {
        const id = req.params.id
        const products = await Product.findOne({ _id: id })
        if (products) {
            res.status(201).send(products)
        }
        else {
            res.status(403).send({ message: 'Products not found' })
        }
    } catch (err) { res.status(500).send({ message: error.message }) }
})

// delete
router.delete('/products/:id',async(req,res)=>{
    try {
       const id = req.params.id
       const products = await Product.deleteOne({ _id: id })
       if (products) {
           res.status(201).send(products)
       }
       else {
           res.status(403).send({ message: 'Products not found' })
       }
   } catch (err) { res.status(500).send({ message: error.message }) }
   })
   
   // update 
   router.put('/products/:id',async(req,res)=>{
       try {
           const id = req.params.id
           const filter = {_id:id};
           const updatedDoc={
               $set:{
                   rating:4.8
               }
           }
           const updatedProduct = await Product.updateOne(filter,updatedDoc)
           if (updatedProduct) {
               res.status(201).send(updatedProduct)
           }
           else {
               res.status(403).send({ message: 'Products not found' })
           }
       } catch (err) { res.status(500).send({ message: error.message }) }
       
   })

   module.exports=router