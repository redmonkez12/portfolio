import { Badge, Button, Card, Group, Image, Text, Title } from "@mantine/core";

import { type Project } from "~/data/types";
import { useEffect, useState } from "react";

type Props = Project;

export function CardWrapper({ image, description, title, level, page, github }: Props) {
  const [formattedDate, setFormattedDate] = useState("");

  function getColor() {
    if (level === "junior") {
      return "lime";
    }

    return "teal";
  }

  function goToPage(url?: string) {
    if (url) {
      window.open (url, '_ blank');
    }
  }
  
  useEffect(() => {
    if (!github) {
      return;
    }

    void (async () => {
      const repoUrl = "https://api.github.com/repos/redmonkez12/trading-app-trpc";
      const repo = github.split("/").at(-1) || "";

      const response = await fetch(
        `${repoUrl.replace(":repo", repo)}`
      );
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const data: { pushed_at: string } = await response.json();

      const date = new Date(data.pushed_at);
      const options = { year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric" };
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const formatter = new Intl.DateTimeFormat("en-US", options);

      const formattedDate = formatter.format(date);
      setFormattedDate(formattedDate)
    })();
  }, [github]);

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder className={"flex flex-col max-w-[338px]"}>
      <Card.Section>
        <Image
          src={`/images/${image}`}
          height={160}
          alt="Portfolio image"
        />
      </Card.Section>

      <Group position="apart" className={"pt-4 pb-2"}>
        <Text weight={500} className={"truncate flex-1"}>{title}</Text>

        <Badge size="lg" color={getColor()} radius="xl" className={`overflow-visible px-4`}>
          {level}
        </Badge>
      </Group>

      <Title className={"pb-2"} order={6}>Last update: {formattedDate || "UNKNOWN"}</Title>

      <Text size="sm" color="dimmed" className={"mb-4"}>{description}</Text>

      <Group grow={true} className={"mt-auto"}>
        <Button variant="filled" radius="md" onClick={() => goToPage(github)}>
          View Code
        </Button>

        <Button variant="filled" radius="md" onClick={() => goToPage(page)}>
          View Page
        </Button>
      </Group>
    </Card>
  );
}
