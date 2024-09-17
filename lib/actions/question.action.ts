"use server";

import Question from "@/database/question.model";
import { connectToDatabase } from "../mongoose";
import Tag from "@/database/tag.model";

export async function createQuestion(params: any) {
  try {
    // always connect to database .
    connectToDatabase();
    const { title, content, tags, author, path } = params;
    // create a question
    const question = await Question.create({
      title,
      content,
      author,
    });

    const tagDocument = [];
    // create tags or get them they already exist
    for (const tag of tags) {
      const existingTag = await Tag.findOneAndUpdate(
        { name: { $regex: new RegExp(`^${tag}$`, "i") } },
        { $setOnInsert: { name: tag }, $push: { question: question._id } },
        { upsert: true, new: true }
      );
      tagDocument.push(existingTag._id);
    }

    // find the question and update it
    await Question.findByIdAndUpdate(question._id, {
      $push: { tags: { $each: { tagDocument } } },
    });
  } catch (error) {}
}
