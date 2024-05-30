import { FC } from "react";
import logo from "../assets/logo.png";
import { Button } from "./shared/Button.component";
interface NoProjectProps {
  onClickAddNewProject: () => void;
}
export const NoProject: FC<NoProjectProps> = ({onClickAddNewProject}) => {

  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={logo}
        alt="no project image"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No project selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with new one
      </p>
      <p className="mt-8">
        <Button onClick={onClickAddNewProject}>Create new Project</Button>
      </p>
    </div>
  );
};
