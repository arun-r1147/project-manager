import { FC, useState } from "react";

interface NewTaskProps {
  onHandleSave: (text: string) => void;
}

export const NewTask: FC<NewTaskProps> = ({ onHandleSave }) => {
  const [task, setTask] = useState<string>("");

  const handleTaskEntry = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const onHandleSaveTask = () => {
    if (task.trim() === "") {
      return;
    }
    onHandleSave(task);
    setTask("");
  };
  return (
    <div className="flex items-center gap-4">
      <input
        value={task}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleTaskEntry(e)
        }
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
      />
      <button
        onClick={onHandleSaveTask}
        className="text-stone-700 hover:text-stone-950"
      >
        Add task
      </button>
    </div>
  );
};
