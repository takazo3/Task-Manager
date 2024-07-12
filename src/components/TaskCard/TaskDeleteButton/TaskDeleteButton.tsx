import Link from "next/link"
import { FaTrashCan } from "react-icons/fa6"

interface TaskDeleteButtonProps {
  id: string
}

const TaskDeleteButton: React.FC<TaskDeleteButtonProps> = ({ id }) => {
  return (
    <form action="">
    <button type="submit">
      <FaTrashCan className="size-5 text-pink-500 hover:text-pink-300 text-lg cursor-pointer" />
    </button>
    </form>

  )
}

export default TaskDeleteButton
