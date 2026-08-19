const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
    level:String,
    email:String,
    location:String,
    proc_types:String,
    log:String,
    }, {
        timestamps: {
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
    }
)
class AuditLog extends mongoose.model{

}
schema.loadClass(AuditLog)
module.exports=mongoose.model("Audit_logs",schema)