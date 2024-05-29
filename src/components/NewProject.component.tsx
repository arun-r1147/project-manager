import { FC } from "react";
import { Input } from "./shared/Input.component";

export const NewProject: FC = () => {
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <button className="text-stone-800 hover:text-stone-950">Cancel</button>
        <button className="bg-stone-800 text-stone-50 hover:bg-stone-950 rounded-md py-2 px-6">Save</button>
      </menu>
      <div >
        <Input
          isTextArea={false}
          type="text"
          id="title"
          label="Title"
          placeholder="Add title"
        />
        <Input
          isTextArea={true}
          id="description"
          label="Description"
          placeholder="Add description"
        />
        <Input
          isTextArea={false}
          type="text"
          id="duedate"
          label="Due date"
          placeholder="Add due date"
        />
      </div>
    </div>
  );
};
