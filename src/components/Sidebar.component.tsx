import { FC } from "react";
import { Button } from "./shared/Button.component";

interface SidebarProps {
  onClickAddNewProject: () => void;
}
export const Sidebar: FC<SidebarProps> = ({ onClickAddNewProject }) => {
  return (
    <>
      <aside className="w-1/3 h-full px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
        <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
          Your projects
        </h2>
        <div>
          <Button onClick={onClickAddNewProject}> + Add Project</Button>
        </div>
        <ul></ul>
      </aside>
    </>
  );
};
