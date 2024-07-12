import TaskCard from "@/components/TaskCard/TaskCard";
import Link from "next/link";
import { MdAddTask } from "react-icons/md";

export default function MainPage() {
  return (
    <div className="text-gray-800 p-8 h-full overflow-auto pb-24">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold flex items-center">All Tasks</h1>
        <Link href="/new" className="bg-indigo-500 text-pink-100 flex items-center gap-1 font-semibold border px-4 py-2 rounded-full shadow-md hover:bg-indigo-300">
          <MdAddTask className="sixe-5"/>
          <div>Add Task</div>
        </Link>
      </header>
      <div className="mt-8 flex flex-wrap gap-4"><TaskCard /></div>
    </div>
  );
}
