const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        email:{type:String,required:true},
        password:{type:String,required:true,},
        isActive:{type:Boolean,default:true},
        first_name:{type:String,required:true},
        last_name:{type:String,required:true},
        phone_number:{type:String,required:true}
    }, {
        timestamps: {
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
    }
)
class Users extends mongoose.model{

}
schema.loadClass(Users)
module.exports=mongoose.model("users",schema)