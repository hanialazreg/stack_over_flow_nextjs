import { model, models, Schema, Document } from "mongoose";

// 1. create an interface
export interface IUser extends Document {
  clerckId: string;
  name: string;
  username: string;
  email: string;
  password?: string;
  bio?: string;
  picture: string;
  location?: string;
  portfoliowebsite?: string;
  reputation?: number;
  saved: Schema.Types.ObjectId[];
  joinedAt: Date;
}

// 2.create the Schema
const UserSchema = new Schema({
  clerckId: { type: String, required: true },
  Name: { type: String, required: true, unique: true },
  Username: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  password: { type: String },
  bio: { type: String },
  picture: { type: String, required: true },
  location: { type: String },
  portfolioLink: { type: String },
  reputation: { type: Number, default: 0 },
  saved: [{ type: Schema.Types.ObjectId, ref: "Question" }],
  joinedAt: [{ type: Date, default: Date.now() }],
});

// 3. convert the Schema to a model
const User = models.User || model("User", UserSchema);
export default User;
