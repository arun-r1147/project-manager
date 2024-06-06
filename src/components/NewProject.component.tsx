import { FC, useRef } from "react";
import Input from "./shared/Input.component";

interface ProjectData {
  title: string;
  description: string;
  dueDate: string;
}
interface NewProjectProps {
  onSave: (data: ProjectData) => void;
}

export const NewProject: FC<NewProjectProps> = ({ onSave }) => {
  const title = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);
  const description = useRef<HTMLInputElement | HTMLTextAreaElement | null>(
    null
  );
  const dueDate = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);

  const onClickGetInputs = () => {
    const enteredTitle = title.current?.value;
    const enteredDesc = description.current?.value;
    const enteredDate = dueDate.current?.value;
    if (enteredTitle && enteredDate && enteredDesc) {
      onSave({
        title: enteredTitle,
        description: enteredDesc,
        dueDate: enteredDate,
      });
    }
  };
  const onResetForm = () => {};
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <button
          onClick={onResetForm}
          className="text-stone-800 hover:text-stone-950"
        >
          Cancel
        </button>
        <button
          onClick={onClickGetInputs}
          className="bg-stone-800 text-stone-50 hover:bg-stone-950 rounded-md py-2 px-6"
        >
          Save
        </button>
      </menu>
      <div>
        <Input
          isTextArea={false}
          ref={title}
          type="text"
          id="title"
          label="Title"
          placeholder="Add title"
        />
        <Input
          isTextArea={true}
          ref={description}
          id="description"
          label="Description"
          placeholder="Add description"
        />
        <Input
          isTextArea={false}
          ref={dueDate}
          type="text"
          id="duedate"
          label="Due date"
          placeholder="Add due date"
        />
      </div>
    </div>
  );
};
