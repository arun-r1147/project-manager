import { FC, useState } from "react";
import { NewProject } from "./components/NewProject.component";
import { NoProject } from "./components/NoProjects.component";
import { Sidebar } from "./components/Sidebar.component";
import { SelectedProject } from "./components/SelectedProject.component";

interface Project {
  id: number;
  title: string;
  description: string;
  dueDate: string;
}
export const App: FC = () => {
  const [projectsState, setProjectsState] = useState<{
    selectedProjectId: null | number | undefined;
    projects: Project[];
  }>({
    selectedProjectId: undefined,
    projects: [],
  });

  const onClickAddNewProject = () => {
    setProjectsState((prevState) => {
      return { ...prevState, selectedProjectId: null };
    });
  };

  const handleAddProject = (projectData: {
    title: string;
    description: string;
    dueDate: string;
  }) => {
    setProjectsState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  };

  const handleCancelProject = () => {
    setProjectsState((prevState) => {
      return { ...prevState, selectedProjectId: undefined };
    });
  };

  const onHandleSelectProject = (id: number) => {
    setProjectsState((prevState) => {
      return { ...prevState, selectedProjectId: id, };
    });
  };
  const selectedPro = projectsState.projects.find(
    (p) => p.id == projectsState.selectedProjectId
  );
  let content;
  console.log(selectedPro, projectsState);

  if (selectedPro) {
    content = <SelectedProject project={selectedPro} />;
  }
  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject
        onSave={(data) => handleAddProject(data)}
        onCancel={handleCancelProject}
      />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProject onClickAddNewProject={onClickAddNewProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onClickAddNewProject={onClickAddNewProject}
        projectsList={projectsState.projects}
        onSelectProject={onHandleSelectProject}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
};
