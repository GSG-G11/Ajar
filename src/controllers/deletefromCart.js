const deleteCar = require('../database/quires');

const deleteCar =(req,res) =>{
   
    user_id=req.body
   
    deleteCar( user_id).then( data=> res.json(data.rows))




}


module.exports=deleteCar;