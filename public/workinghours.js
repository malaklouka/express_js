//create middleware
const workinghours=(req,res,next)=>{
    let date= new Date()
    let days=date.getDay()
    let hours=date.getHours()
    //if ( 5 < days < 1 || 17 < hours < 9 ) 
    // if (days==7)
    if (days==0||days==6||hours<9||hours>17)
   {
        res.send("this web application is unvailable now!!")
    } else{
        next();
    }
}
//export module
  module.exports=workinghours;