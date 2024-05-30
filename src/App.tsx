import { FC, useState } from "react";
import { NewProject } from "./components/NewProject.component";
import { NoProject } from "./components/NoProjects.component";
import { Sidebar } from "./components/Sidebar.component";

export const App: FC = () => {
  const [projectsState, setProjectsState] = useState<{
    selectedProjectId: null | number | undefined;
    projects: string[];
  }>({ selectedProjectId: undefined, projects: [] });

  const onClickAddNewProject = () => {
    setProjectsState((prevState) => {
      return { ...prevState, selectedProjectId: null, projects: [] };
    });
  };
  let content;
  if (projectsState.selectedProjectId === null) {
    content = <NewProject />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProject onClickAddNewProject={onClickAddNewProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onClickAddNewProject={onClickAddNewProject} />
      {content}
    </main>
  );
};
