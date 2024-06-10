import { FC } from "react";
import { NewTask } from "./NewTask.component";

interface Task {
  id: number;
  projectId: number | null | undefined;
  text: string;
}
interface TasksProps {
  onHandleSave: (text: string) => void;
  taskList: Task[];
  onClearTask:(id:number)=>void
}

export const Tasks: FC<TasksProps> = ({
  onHandleSave,
  taskList,
  onClearTask
}) => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700mb-4">Tasks</h2>
      <NewTask
        onHandleSave={(text) => onHandleSave(text)}
      />
      {taskList.length == 0 ? (
        <p className="text-stone-800 my-4">
          The project does not have any tasks yet.
        </p>
      ) : (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {taskList.map((item) => (
            <li key={item.id} className="flex justify-between my-4">
              <span>{item.text}</span>
              <button onClick={()=>onClearTask(item.id)} className="text-stone-700 hover:text-red-500">
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};
