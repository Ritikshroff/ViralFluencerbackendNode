import mongoose from "mongoose";
import { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";



const videoSchema = new Schema({
    videoFile: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    views: {
        type: Number,
        default: 0,
    },
    duration: {
        type: Number,
        required: true,
    },
    isPublished: {
        type: Boolean,
        default: false,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref : "User",
    }
})

videoSchema.plugin(mongooseAggregatePaginate);

export default mongoose.model("Video", videoSchema);