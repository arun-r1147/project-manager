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
  onSelectProject: (id: number) => void;
  selectedProjectId: number | null | undefined;
}
export const Sidebar: FC<SidebarProps> = ({
  onClickAddNewProject,
  projectsList,
  onSelectProject,
  selectedProjectId,
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
          {projectsList.map((project) => {
            let cssClass =
              "w-full text-left px-2 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800";
            if (project.id === selectedProjectId) {
              cssClass += " bg-stone-800 text-stone-200";
            } else {
              cssClass += " text-stone-400";
            }
            return (
              <li key={project.id}>
                <button
                  onClick={() => onSelectProject(project.id)}
                  className={cssClass}
                >
                  {" "}
                  {project.title}{" "}
                  ({project.description})
                </button>
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
};
