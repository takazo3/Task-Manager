import mongoose, { Document } from "mongoose";

export interface Task {
  title: string;
  description: string;
  dueDate: string;
  hasDone: boolean;
}

export interface TaskDocument extends Task, Document {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
}

const taskSchema = new mongoose.Schema<TaskDocument>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  dueDate: { type: String, required: true },
  hasDone: { type: Boolean, default: false },
}, { timestamps: true });

export const TaskModel = mongoose.models?.Task || mongoose.model('Task', taskSchema);