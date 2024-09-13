import { model, models, Schema, Document } from "mongoose";

// 1. create an interface
export interface IQuestion extends Document {
  title: string;
  content: string;
  tags: Schema.Types.ObjectId;
  views: number;
  upvotes: Schema.Types.ObjectId[];
  dowvotes: Schema.Types.ObjectId[];
  author: Schema.Types.ObjectId;
  answears: Schema.Types.ObjectId[];
  createdAt: Date;
}

// 2.create the Schema
const QuestionSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  tags: [{ type: Schema.Types.ObjectId, ref: "Tag" }],
  views: { type: Number, reequired: false },
  upvotes: [{ type: Schema.Types.ObjectId, ref: "User" }],
  downvotes: [{ type: Schema.Types.ObjectId, ref: "User" }],
  author: { type: Schema.Types.ObjectId, ref: "User" },
  answers: [{ type: Schema.Types.ObjectId, ref: "Answer" }],
});

// 3. convert the Schema to a model
const Question = models.Question || model("Question ", QuestionSchema);
export default Question;
