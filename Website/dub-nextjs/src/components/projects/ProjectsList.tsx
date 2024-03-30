// react
import { FC } from "react";

// ui-components
import Spinner from "~/core/ui/Spinner";
import { ProjectsTable } from "./ProjectsTable";
import handleOpenCreateProjectModal from "./ProjectsWrapper"

import { useState } from "react";
// hooks
import useFetchProjects from "~/lib/projects/hooks/use-fetch-projects";
import ProjectsWrapper from "./ProjectsWrapper";


const ProjectsList: FC<{ userId: string}> = ({ userId }) => {
  const { data: projectsList, status } = useFetchProjects(userId);

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center">
        <Spinner />
      </div>
    );
  }

  if (projectsList.length === 0) {
    return (
      <div className="flex flex-col w-full h-[65vh]  items-center justify-center space-y-20">
        <img className="w-max h-max" src="/assets/images/folder.png"></img>
        <div className="flex w-full h-[5vh] items-center justify-center">
          <span className='text-xl text-gray-600'>You don’t have any projects yet, click on the button above to translate your first video or audio </span>
        </div>
      </div>
    );
  }

  return (
    <div className={"flex flex-col space-y-6 pb-36"}>
      <ProjectsTable projects={projectsList} />
    </div>
  );
};

export default ProjectsList;
