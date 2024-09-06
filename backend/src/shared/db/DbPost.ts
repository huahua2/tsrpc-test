import { ObjectId } from "mongodb";

export interface DbPost {
  _id: ObjectId;
  content: string;
  time: Date
}