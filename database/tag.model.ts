import { Description } from "@radix-ui/react-dialog";
import mongoose, { model, models, Schema, Document } from "mongoose";
import { title } from "process";
import Question from "./question.model";

export interface ITag extends Document {
  name: string;
  description: string;
  questions?: Schema.Types.ObjectId[];
  followers: Schema.Types.ObjectId[];
  createdOn: Date;
}

const TagSchema = new Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  questions: [{ type: Schema.Types.ObjectId, ref: "Question" }],
  followers: [{ type: Schema.Types.ObjectId, ref: "User" }],
  creatOn: { type: Date, default: Date.now() },
});

const Tag = models.Tag || model("Tag", TagSchema);
export default Tag;
