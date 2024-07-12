import Link from "next/link";
import { FaPen } from "react-icons/fa";

interface TaskEditButtonProps {
  id: string;
}
const TaskEditButton: React.FC<TaskEditButtonProps> = ({ id }) => {
  return (
    <Link href={`/edit/${id}`}>
      <FaPen className="size-5 text-indigo-500 hover:text-indigo-300 text-lg cursor-pointer" />
    </Link>
  )
}

export default TaskEditButton
