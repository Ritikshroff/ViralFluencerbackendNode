import mongoose from "mongoose";
import { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";


const commentSchema = new Schema({
    content: {
        type: String,
        required: true,
    },
    video: {
        type: Schema.Types.ObjectId,
        ref: "Video",
        required:
            true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    // userId: {
    //     type: Schema.Types.ObjectId,
    //     ref: "User",
    //     required: true,
    // },
    // comment: {
    //     type: String,
    //     required: true,
    // },
    // likes: {
    //     type: Number,
    //     default: 0,
    // },
    // dislikes: {
    //     type: Number,
    //     default: 0,
    // },
    // reply: [{
    //     type: Schema.Types.ObjectId,
    //     ref: "Comment",
    // }]
}, { timestamps: true });

commentSchema.plugin(mongooseAggregatePaginate);

export const Comment = mongoose.model("Comment", commentSchema);