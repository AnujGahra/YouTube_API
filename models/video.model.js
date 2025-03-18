import mongoose from "mongoose";

const videoSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    videoUrl: {
      type: String,
      required: true,
      trim: true,
    },
    thumbnailUrl: {
      type: String,
      required: true,
      trim: true,
    },
    thumbnailId: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    tags: [
      {
        type: String,
        trim: true,
      },
    ],
    likes: {
        type: Number,
        default: 0,
        min: 0,
    },
    dislikes: {
        type: Number,
        default: 0,
        min: 0,
    },
    views: {
        type: Number,
        default: 0,
        min: 0,
    },
    likedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    disLikedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    viewedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

// Virtual fields for likes, dislikes, and views
// videoSchema.virtual("likes").get(function () {
//   return this.likedBy.length;
// });

// videoSchema.virtual("dislikes").get(function () {
//   return this.disLikedBy.length;
// });

// videoSchema.virtual("views").get(function () {
//   return this.viewedBy.length;
// });

// Ensure virtual fields are included in JSON output
// videoSchema.set("toJSON", {
//   virtuals: true,
// });

const videoModel = mongoose.model("Video", videoSchema);
export default videoModel;