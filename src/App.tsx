import { FC, useState } from "react";
import { NewProject } from "./components/NewProject.component";
import { NoProject } from "./components/NoProjects.component";
import { Sidebar } from "./components/Sidebar.component";

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
  }>({ selectedProjectId: undefined, projects: [] });

  const onClickAddNewProject = () => {
    setProjectsState((prevState) => {
      return { ...prevState, selectedProjectId: null, projects: [] };
    });
  };
  // let projectDatas: {
  //   title: string;
  //   description: string;
  //   dueDate: string;
  // } = { title: "", description: "", dueDate: "" };

  const handleAddProject = (projectData: {
    title: string;
    description: string;
    dueDate: string;
  }) => {
    // projectDatas = projectData;
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
    console.log("data", projectsState);
  };

  const handleCancelProject = () => {
    setProjectsState((prevState) => {
      return { ...prevState, selectedProjectId: undefined, projects: [] };
    });
  };

  // useEffect(() => {
  //   setProjectsState((prevState) => {
  //     const newProject = {
  //       ...projectDatas,
  //       id: Math.random(),
  //     };
  //     return { ...prevState, projects: [...prevState.projects, newProject] };
  //   });
  // }, [projectDatas]);

  let content;
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
      />
      {content}
    </main>
  );
};
