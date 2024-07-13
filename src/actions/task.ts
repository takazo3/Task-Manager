"use server";

import { Task, TaskModel } from "@/models/task";
import { connectDb } from "@/utils/database";
import { redirect } from "next/navigation";

export interface FormState {
  error: string;
}

export const createTask = async (state: FormState, formData: FormData) => {
  const newTask: Task = {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    dueDate: formData.get("dueDate") as string,
    hasDone: false,
  };

  try {
    await connectDb();
    await TaskModel.create(newTask);
  } catch (error) {
    state.error = "Failed to create task";
    return state;
  }

  redirect("/");
};

export const updateTask = async (
  id: string,
  state: FormState,
  formData: FormData
) => {
  const updateTask: Task = {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    dueDate: formData.get("dueDate") as string,
    hasDone: Boolean(formData.get("hasDone")),
  };

  try {
    await connectDb();
    await TaskModel.updateOne({ _id: id }, updateTask);
  } catch (error) {
    state.error = "Failed to update task";
    return state;
  }

  redirect("/");
};

export const deleteTask = async (
  id: string,
  state: FormState,
) => {

  try {
    await connectDb();
    await TaskModel.deleteOne({ _id: id });
  } catch (error) {
    state.error = "Failed to delete task";
    return state;
  }

  redirect("/");
};