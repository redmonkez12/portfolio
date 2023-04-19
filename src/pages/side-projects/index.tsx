import { Group } from "@mantine/core";

import { CardWrapper } from "~/components/Card/CardWrapper";
import { SideProjectData } from "~/data/side-project.data";

export default function SideProjects() {
  return (
    <div className={"grid py-8 place-items-center"}>
      <Group className={"gap-10 items-stretch"}>
        {SideProjectData.map(project => (
          <CardWrapper
            key={project.image}
            image={project.image}
            description={project.description}
            title={project.title}
            level={project.level}
          />
        ))}
      </Group>
    </div>
  );
}