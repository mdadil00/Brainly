import mongoose, { model, Schema } from "mongoose";

mongoose.connect("mongodb+srv://madil22:63QNFZUmRHexh84U@cluster0.7swe4.mongodb.net/brainly");

// const Schema = mongoose.Schema;
// const ObjectId = mongoose.Types.ObjectId;

const UserSchema = new Schema({
    username: { type: String, unique: true },
    password: String
})

export const UserModel = model("User", UserSchema);


const ContentSchema = new Schema({
    title: String,
    link: String,
    tags: [{ type: mongoose.Types.ObjectId, ref: 'Tag' }],
    type: String,
    userId: { type: mongoose.Types.ObjectId, ref: 'User', required: true }
})
const LinkSchema = new Schema({
    hash: String,
    userId: { type: mongoose.Types.ObjectId, ref: 'User', required: true, unique: true }
})

export const contentmodel = model("Content", ContentSchema);
export const LinkModel = model("Links", LinkSchema);


// module.exports = {
//     userModel
// }