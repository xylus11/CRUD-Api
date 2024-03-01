const Product = require('../models/product.models')


const getProducts = async (req,res)=>{

    try {
        const products = await Product.find(req.body);
        res.status(200).json(products);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }

}



const updateProd =async(req,res)=>{
    try{
      const {id} =req.params;
      const product1 = await Product.findByIdAndUpdate(id,req.body);
      if(!product1)
      {
        return res.status(404).json({message: "product not found"});
      }
      const updateProduct =   await Product.findById(id);
      res.status(200).json(updateProduct);
    }
    catch(error)
    {res.status(500).json({message: error.message})
  
    }
  };


  const getProd =async(req,res)=>{
    try{
      const {id} =req.params;
      const product1 = await Product.findByIdAndUpdate(id,req.body);
      if(!product1)
      {
        return res.status(404).json({message: "product not found"});
      }
      const updateProduct =   await Product.findById(id);
      res.status(200).json(updateProduct);
    }
    catch(error)
    {res.status(500).json({message: error.message})
  
    }
  };
  
const deleteProd= async(req,res)=>{
    try{
      const {id} =req.params;
      const product1 = await Product.findByIdAndDelete(id);
      if(product1)
      {
        return res.status(404).json({message: "product not found"});
      }
      res.status(200).json({message: "product deleted successfully"});
    }
    catch(error)
    {res.status(500).json({message: error.message})
  
    }
  };
  
const createProduct=  async (req, res)=>{ 
  try{
     const product= await Product.create(req.body);
     res.status(200).json(product);
  
  
  }
    catch(error)
    {     
    res.status(500).json({message: error.message });
    } 
  }; 



module.exports ={ getProd,getProducts, createProduct, deleteProd, updateProd};