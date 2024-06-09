import { FC, useRef } from "react";
import Input from "./shared/Input.component";
import Modal from "./shared/Modal.component";

interface ProjectData {
  title: string;
  description: string;
  dueDate: string;
}
interface NewProjectProps {
  onSave: (data: ProjectData) => void;
}
type DialogHandle = HTMLDialogElement & {
  openModal: () => void;
}


export const NewProject: FC<NewProjectProps> = ({ onSave }) => {
  const modal = useRef<DialogHandle| null>(null);

  const title = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);
  const description = useRef<HTMLInputElement | HTMLTextAreaElement | null>(
    null
  );
  const dueDate = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);

  const onClickGetInputs = () => {
    const enteredTitle = title.current?.value;
    const enteredDesc = description.current?.value;
    const enteredDate = dueDate.current?.value;
    if (
      enteredTitle?.trim() == "" ||
      enteredDate?.trim() == "" ||
      enteredDesc?.trim() == ""
    ) {
      return;
    }
    onSave({
      title: enteredTitle ?? "",
      description: enteredDesc ?? "",
      dueDate: enteredDate ?? "",
    });
  };
  const onResetForm = () => {};
  return (
    <>
      <Modal ref={modal}>
        <p>error in datas</p>
      </Modal>

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
            type="date"
            id="duedate"
            label="Due date"
            placeholder="Add due date"
          />
        </div>
      </div>
    </>
  );
};
