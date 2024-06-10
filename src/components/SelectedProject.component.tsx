import { FC } from "react";
import { Tasks } from "./Tasks.component";
interface Task {
  id: number;
  projectId: number | null | undefined;
  text: string;
}
interface SelectedProjectProps {
  project: {
    title: string;
    description: string;
    dueDate: string;
  };
  tasks: Task[];
  onDelete: () => void;
  onSaveTask: (text: string) => void;
  onDeleteTask: (id:number) => void;
}
export const SelectedProject: FC<SelectedProjectProps> = ({
  project,
  onDelete,
  onSaveTask,
  onDeleteTask,
  tasks,
}) => {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "numeric",
  });
  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {project.title}
          </h1>
          <button
            onClick={onDelete}
            className="text-stone-600 hover:text-stone-950 hover:border-stone-950"
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap ">
          {project.description}
        </p>
      </header>
      <Tasks
        onHandleSave={(text) => onSaveTask(text)}
        onClearTask={(id)=>onDeleteTask(id)}
        taskList={tasks}
      />
    </div>
  );
};
