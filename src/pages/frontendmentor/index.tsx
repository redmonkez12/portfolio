import { Group, MultiSelect } from "@mantine/core";
import { CardWrapper } from "~/components/Card/CardWrapper";
import { useEffect, useState } from "react";

import { projects } from "~/data/data";
import { type Level, type Project } from "~/data/types";
import { PaginationWrapper } from "~/components/Pagination/PaginationWrapper";

const defaultLevels: Level[] = ["newbie", "junior", "intermediate", "advanced", "guru"];

const PER_PAGE = 6;

export default function Frontendmentor() {
  const [page, setPage] = useState(1);
  const [levels, setLevels] = useState<Level[]>([]);
  const [data, setData] = useState<Project[]>([]);

  useEffect(() => {
    const currentLevels = levels.length === 0 ? defaultLevels : levels;

    const newData = projects.filter(project => currentLevels.includes(project.level))
      .slice((page - 1) * PER_PAGE, page * PER_PAGE);

    setData(newData);
  }, [levels, page]);

  function difficultyChange(levels: Level[]) {
    setLevels(levels);
  }

  const PAGES = Math.ceil(projects.length / PER_PAGE);


  return (
    <>
      <div className={"flex md:w-full w-auto mt-8"}>
        <MultiSelect
          onChange={difficultyChange}
          value={levels}
          className={"flex-1 md:flex-none"}
          placeholder="Difficulty"
          data={[
            { value: 'newbie', label: 'Newbie' },
            { value: 'junior', label: 'Junior' },
            { value: 'intermediate', label: 'Intermediate' },
            { value: 'advanced', label: 'Advanced' },
            { value: 'guru', label: 'Guru' },
          ]}
        />
      </div>

      <div className={"grid py-8 place-items-center"}>
        <Group className={"gap-10 items-stretch"}>
          {data.map(project => (
            <CardWrapper
              key={project.image}
              {...project}
            />
          ))}
        </Group>

        <PaginationWrapper total={PAGES} activePage={page} handlePage={setPage}/>
      </div>
    </>
  );
}