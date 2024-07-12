
const EditTaskForm = () => {
  return (
    <div className="mt-10 mx-auto w-full max-w-sm">
      <form action="">
        <div>
          <label htmlFor="title" className="block text-sm font-medium">Title</label>
          <input type="text" id="title" name="title" required className="block mt-2 py-1.5 px-2 w-full rouded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300" />
        </div>
        <div className="mt-6">
          <label htmlFor="description" className="block text-sm font-medium">Description</label>
          <input type="text" id="description" name="description" required className="block mt-2 py-1.5 px-2 w-full rouded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300" />
        </div>
        <div className="mt-6">
          <label htmlFor="dueDate" className="block text-sm font-medium">Due Date</label>
          <input type="date" id="dueDate" name="dueDate" min="2020-01-01" max="2999-12-31" required className="block mt-2 py-1.5 px-2 w-full rouded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300" />
        </div>
        <div className="mt-6 flex items-center">
          <input type="checkbox" id="hasDone" name="hasDone"  className="mr-2 w-4 h4"/>
          <label htmlFor="hasDone" className="text-sm">Make this "Done"</label>
        </div>
        <button type="submit" className="mt-8 py-2 w-full rounded-md text-white bg-pink-400 hover:bg-pink-200 text-sm font-semibold shadow-sm">Edit</button>
      </form>
    </div>
  )
}

export default EditTaskForm
