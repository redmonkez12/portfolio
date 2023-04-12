import { Button, Card, Group, Image, Text } from "@mantine/core";

type Props = {
  title: string;
  description: string;
  image: string
};

export function CardWrapper({ image, description, title }: Props) {
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
        <Text weight={500}>{title}</Text>
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