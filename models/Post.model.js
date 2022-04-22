const { Schema, model } = require("mongoose");
const User = require("./User.model");


const postSchema = new Schema(
    {
        content: String,
        creatorId: [{ type: Schema.Types.ObjectId, ref: 'User' }],
        picPath: [{ type: User.imageUrl }],
        pickName: String 
})
module.exports = model("Post", postSchema);