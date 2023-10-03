const Model=require('./../models/product')

// create product
const createProduct= async(req,res)=>{
    const body =req.body;
    try{
        const product= await Model.product.create(body)
        res.status(201).json({result:"SUCCESS", message:"a new product has been created", product})
    }catch(error){
        // res.status(400).json({result:"FAIL", message:"an error has occured", stack:error.stack})
    }

}

const getProduct= async (req,res)=>{
    try{
        const products= await Model.product.find().select('-__v')
        res.status(200).json({result:"SUCCESS", size:products.length, products})
    } catch(error){
        res.status(400).json({result:"FAIL", message:"an error has occured", stack:error.stack})
    }
}

module.exports={
    createProduct,
    getProduct
}