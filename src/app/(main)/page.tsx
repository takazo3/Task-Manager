import TaskCard from "@/components/TaskCard/TaskCard";
import { TaskDocument } from "@/models/task";
import Link from "next/link";
import { MdAddTask } from "react-icons/md";


const getAllTasks = async(): Promise<TaskDocument[]> => {
  const res = await fetch(`${process.env.API_URL}/tasks`,{cache: "no-store"});

  if(res.status!==200){
    throw new Error("Failed to fetch tasks");
  }

  const data = await res.json();
  return data.tasks as TaskDocument[];
}

export default async function MainPage() {
  const allTasks = await getAllTasks();
  return (
    <div className="text-gray-800 p-8 h-full overflow-auto pb-24">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold flex items-center text-pink-500">All Tasks</h1>
        <Link href="/new" className="bg-indigo-500 text-pink-100 flex items-center gap-1 font-semibold border px-4 py-2 rounded-full shadow-md hover:bg-indigo-300">
          <MdAddTask className="sixe-5"/>
          <div>Add Task</div>
        </Link>
      </header>
      <div className="mt-8 flex flex-wrap gap-4">
        {allTasks.map((task) => <TaskCard key={task._id} task={task} />)}
      </div>
    </div>
  );
}
