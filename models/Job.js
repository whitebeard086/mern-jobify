import mongoose from "mongoose";

const JobSchema = new mongoose.Schema(
  {
    company: {
      type: "string",
      required: [true, "Please provide a company"],
      maxlength: 50,
    },
    position: {
      type: "string",
      required: [true, "Please provide a position"],
      maxlength: 100,
    },
    status: {
      type: "string",
      enum: ["interview", "declined", "pending"],
      default: "pending",
    },
    jobType: {
      type: "string",
      enum: ["full-time", "part-time", "remote", "internship"],
      default: "full-time",
    },
    jobLocation: {
      type: "string",
      default: "my city",
      required: true,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide a user"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Job", JobSchema);
