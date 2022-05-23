import { Document } from "mongoose"

export interface TodoItem extends Document {
    text: string;
    createdAt: Date;
}