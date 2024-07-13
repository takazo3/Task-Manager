'use client';

import { deleteTask, FormState } from "@/actions/task";
import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { FaTrashCan } from "react-icons/fa6"

interface TaskDeleteButtonProps {
  id: string
}

const TaskDeleteButton: React.FC<TaskDeleteButtonProps> = ({ id }) => {
  const deleteTaskWithId = deleteTask.bind(null, id);
  const initialState:FormState = { error: "" };
  const [state, formAction] = useFormState(deleteTaskWithId, initialState);

  useEffect(() => {
    if (state && state.error !== '') {
      alert(state.error);
    }
  }
  , [state]);

  const SubmitButton = () => {
    const { pending } = useFormStatus();
    return (
      <button 
      type="submit" 
      disabled={pending} 
      className="size-5 text-pink-500 hover:text-pink-300 text-lg cursor-pointer disabled:bg-grey-400">
      <FaTrashCan />
    </button>
    )
  }
  return (
    <form action={formAction}>
      <SubmitButton />
    </form>

  )
}

export default TaskDeleteButton
