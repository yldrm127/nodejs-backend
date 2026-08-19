const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
    role_name:{type:String,required:true},
    is_active:{type:Boolean,default:true},
    versionKey:false,
    created_by:{
        type:mongoose.SchemaTypes.ObjectId,
        required:true
    }
    }, {
        timestamps: {
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
    }
)
class Roles extends mongoose.model{

}
schema.loadClass(Roles)
module.exports=mongoose.model("roles",schema)