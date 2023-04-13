import { Badge, Button, Card, Group, Image, Text } from "@mantine/core";

type Level = "newbie" | "junior" | "intermediate" | "advanced" | "guru";

type Props = {
  title: string;
  description: string;
  image: string;
  level: Level;
};


export function CardWrapper({ image, description, title, level }: Props) {
  function getColor() {
    if (level === "junior") {
      return "lime";
    }

    return "teal";
  }

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder className={"flex flex-col max-w-[338px]"}>
      <Card.Section>
        <Image
          src={`/images/${image}`}
          height={160}
          alt="Portfolio image"
        />
      </Card.Section>

      <Group position="apart" className={"py-4"}>
        <Text weight={500} className={"truncate flex-1"}>{title}</Text>

        <Badge size="lg" color={getColor()} radius="xl" className={`overflow-visible px-4`}>
          {level}
        </Badge>
      </Group>

      <Text size="sm" color="dimmed" className={"mb-4"}>{description}</Text>

      <Group grow={true} className={"mt-auto"}>
        <Button variant="filled" radius="md">
          View Code
        </Button>

        <Button variant="filled" radius="md">
          View Page
        </Button>
      </Group>
    </Card>
  );
}