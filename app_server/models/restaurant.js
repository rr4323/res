const mongoose=require('mongoose');




const reviewSchema=new mongoose.Schema({
  name:{type:String},
  rating:{type:Number},
  comment:{type:String}
})
const resInfoSchema=new mongoose.Schema(
  {
    name:{type:String},
    rating:{type:Number},
    address:{type:String},
    reviews:[reviewSchema]
  }
)
mongoose.model('Restaurant',resInfoSchema);
