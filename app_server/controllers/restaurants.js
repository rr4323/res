//const request=require('request');
const mongoose=require('mongoose');
const Res=mongoose.model('Restaurant');



module.exports.index=(req,res)=>Res.find({},(err,data)=>{
  for (var i=0 ;i<data.length;i++){
  res.render('resList',data[i]);}})
module.exports.restaurantInfo=(req,res)=>Res.findById(req.params.resId,(err,data)=>res.render('resInfo',data));
module.exports.restaurantInfoUpdate=(req,res)=>Res.findById(req.params.resId,'reviews',function(err,info){

  info.reviews.push({name:req.body.name,rating:req.body.rating,comment:req.body.review});
  info.save();
  //res.render('resInfo',)
});

module.exports.addReview=(req,res)=>res.render('newReview',{title:'Add Review',_id:req.params.resId});
