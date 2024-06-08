import { FC } from "react";
import { Button } from "./shared/Button.component";

interface SidebarProps {
  onClickAddNewProject: () => void;
  projectsList: {
    title: string;
    description: string;
    dueDate: string;
    id: number;
  }[];
}
export const Sidebar: FC<SidebarProps> = ({
  onClickAddNewProject,
  projectsList,
}) => {
  return (
    <>
      <aside className="w-1/3 h-full px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl overflow-y-auto">
        <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
          Your projects
        </h2>
        <div>
          <Button onClick={onClickAddNewProject}> + Add Project</Button>
        </div>
        <ul className="mt-8">
          {projectsList.map((project) => (
            <li key={project.id}>
              <button className="w-full text-left px-2 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800">
                Title: {project.title}
              </button>
              <p>Description: {project.description}</p>
              <p>Due Date: {project.dueDate}</p>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};
