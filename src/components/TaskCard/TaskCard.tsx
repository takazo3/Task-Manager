import TaskDeleteButton from "./TaskDeleteButton/TaskDeleteButton"
import TaskEditButton from "./TaskEditButton/TaskEditButton"

const TaskCard = () => {
  return (
    <div className="w-64 h-52 p-4 bg-white rounded-md shadow-md flex flex-col justify-between">
      <header>
        <h1 className="text-lg font-semibold text-teal-900 bg-teal-100 rounded-md">Title</h1>
        <div className="mt-1 text-sm line-clamp-3">Descrioption</div>
      </header>
      <div>
        <div className="text-sm">2024-7-21</div>
        <div className="flex justify-between items-center">
          <div className={`mt-1 text-sm px-4 py-1 text-center text-white rounded-full shadow-sm ${true ? "bg-teal-300" : 'bg-pink-400'}`}>
            {true ? "Done" : "OnGoing"}
          </div>
          <div className="flex gap-4">
            <TaskEditButton id='1' />
            <TaskDeleteButton id='1' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskCard
