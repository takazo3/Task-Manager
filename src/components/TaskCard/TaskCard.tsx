import { TaskDocument } from "@/models/task"
import TaskDeleteButton from "./TaskDeleteButton/TaskDeleteButton"
import TaskEditButton from "./TaskEditButton/TaskEditButton"
import { FaRegThumbsUp } from "react-icons/fa6";
import { BsEmojiKiss, BsEmojiTear } from "react-icons/bs";
import { LuClock3 } from "react-icons/lu";

interface TaskCardProps {
  task: TaskDocument;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  // Skip unchanged code
  const colordOk =
    //hasDone&&dueDate <=today: !hasDone&&dueDate>=today: !hasDone&&dueDate<=today
    task.hasDone && (new Date(task.dueDate) <= new Date())
      ? <BsEmojiKiss className="text-pink-400" />
      : (!task.hasDone && (new Date(task.dueDate) <= new Date() ? <BsEmojiTear className="text-indigo-400" /> : <LuClock3 className="text-teal-400" />))

  return (
    <div className={`w-64 h-52 p-4 bg-white rounded-md shadow-md flex flex-col justify-between ${task.hasDone ? "filter brightness-90" : ""}`}>
      <header>
        <h1 className="text-lg font-semibold text-teal-900 bg-teal-100 rounded-md">{task.title}</h1>
        <div className="mt-1 text-sm line-clamp-3">{task.description}</div>
      </header>
      <div>
        <div className="flex">
          <div className={`text-sm ${(new Date(task.dueDate) < new Date()) && (!task.hasDone) ? "text-red-500" : ""}`}>{task.dueDate}</div>
          <div className={`ml-2 size-5 ${colordOk}`}>{colordOk}</div>
        </div>
        <div className="flex justify-between items-center">
          <div className={`mt-1 text-sm px-4 py-1 text-center text-white rounded-full shadow-sm ${task.hasDone ? "bg-teal-300" : 'bg-pink-400'}`}>
            {task.hasDone ? "Done" : "OnGoing"}
          </div>
          <div className="flex gap-4">
            <TaskEditButton id={task._id} />
            <TaskDeleteButton id={task._id} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskCard
