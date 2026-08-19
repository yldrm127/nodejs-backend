const mongoose=require("mongoose")
let instance=null;
class DataBase{
  constructor(){
     if (!instance) {
        this.mongoConnection=null;
        instance=this;
     }
     return instance
  }
  async connect(options){
   try {
       let db=await mongoose.connect(options.CONNECTION_STRING)
     this.mongoConnection=db
     console.log("db connected")
   } catch (error) {
      console.log(error)
      process.exit()
   }
    
  }
}
module.exports=DataBase