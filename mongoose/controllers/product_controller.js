const Model=require('./../models/product')

// create product
const createProduct= async(req,res)=>{
    const body =req.body;
    try{
        const product= await Model.product.create(body)
        res.status(201).json({result:"SUCCESS", message:"a new product has been created", product})
    }catch(error){
        res.status(400).json({result:"FAIL", message:"an error has occured", error})
    }

}

module.exports={
    createProduct
}