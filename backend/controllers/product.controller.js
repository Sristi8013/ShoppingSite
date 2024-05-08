const ProductModel = require("../models/productModel");

exports.createProduct = async (req, res) => {

    try{
    const {title, description, price, imgUrl} = req.body;//object dis-structuring

    let newProduct = new ProductModel({
        title,
        description,
        price,
        imgUrl,
    });

   newProduct= await newProduct.save(); //asynchronus js syntax async await

   res.status(201).json(newProduct);//succcess code
    } catch(err) {
        console.log(err);
        res.status(500).json({ message: err.message});//error msg showed to user
    }
   };

exports.allProducts = async (req, res) => {//function to get all product details(24-32)
    try{
const products = await ProductModel.find({});

res.status(200).json(products);
    } catch(err){
        console.log(err);
        res.status(500).json({ message: err.message});
    }
};

exports.updateProduct = async (req, res) => {  //to update any item

    try{
    const {title, description, price, imgUrl} = req.body;

    let updatedProduct = new ProductModel({
        title,
        description,
        price,
        imgUrl,
        _id: req.params.id,
    });

    updatedProduct = await ProductModel.findByIdAndUpdate(req.params.id, updatedProduct);

    res.status(200).json(updatedProduct);
    } catch(err){
        //console.log(err);
        res.status(500).json({ message: err.message});
    }
};

exports.deleteProduct = async (req, res) => {   //to delete product
    try{
        await ProductModel.findByIdAndDelete(req.params.id);

        res.status(200).json({ message: "Product deleted successfully!"});
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
};


exports.singleProduct = async (req, res) => {   //to fetch single product
    try{
        const product = await ProductModel.findById(req.params.id);

        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
};