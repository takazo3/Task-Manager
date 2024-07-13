'use client';

import { FormState, updateTask } from "@/actions/task";
import { TaskDocument } from "@/models/task";
import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";

interface EditTaskFormProps {
  task: TaskDocument;
}
const EditTaskForm: React.FC<EditTaskFormProps> = ({ task }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [dueDate, setDueDate] = useState(task.dueDate);
  const [hasDone, setHasDone] = useState(task.hasDone);

  const updateTaskWithId = updateTask.bind(null, task._id);
  const initialState: FormState = { error: "" };
  const [state, formAction] = useFormState(updateTaskWithId, initialState);
  const SubmitButton = () => {
    const { pending } = useFormStatus();
    return (
      <button 
      type="submit" 
      disabled={pending}
      className="mt-8 py-2 w-full rounded-md text-white bg-pink-400 hover:bg-pink-200 text-sm font-semibold shadow-sm disabled:bg-gray-400">Edit</button>
    )
  }
  return (
    <div className="mt-10 mx-auto w-full max-w-sm">
      <form action={formAction}>
        <div>
          <label htmlFor="title" className="block text-sm font-medium">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="block mt-2 py-1.5 px-2 w-full rouded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300" />
        </div>
        <div className="mt-6">
          <label htmlFor="description" className="block text-sm font-medium">{task.description}</label>
          <input
            type="text"
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="block mt-2 py-1.5 px-2 w-full rouded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300" />
        </div>
        <div className="mt-6">
          <label htmlFor="dueDate" className="block text-sm font-medium">{task.dueDate}</label>
          <input
            type="date"
            id="dueDate"
            name="dueDate"
            min="2020-01-01"
            max="2999-12-31"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
            className="block mt-2 py-1.5 px-2 w-full rouded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300" />
        </div>
        <div className="mt-6 flex items-center">
          <input
            type="checkbox"
            id="hasDone"
            name="hasDone"
            checked={hasDone}
            onChange={(e) => setHasDone(e.target.checked)}
            className="mr-2 w-4 h4" />
          <label htmlFor="hasDone" className="text-sm">Make this &quot;Done&quot;</label>
        </div>
        <SubmitButton />
        { state.error && <div className="mt-4 text-red-500 text-sm">{state.error}</div>}
      </form>
    </div>
  )
}

export default EditTaskForm
