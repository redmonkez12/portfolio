import { Title, List, ThemeIcon } from "@mantine/core";
import { IconCircleCheck, IconBrandPython, IconBrandJavascript, IconBrandAngular, IconCoffee } from "@tabler/icons-react";

export default function Lecturing() {
  return (
    <div className={"py-4"}>
      <Title order={1} color={"blue"}>
        <a href="https://sdacademy.ee/en/" target="_blank">SDA: 2021 - Present </a>
      </Title>

      <List className={"my-4"} spacing={"sm"}>
        <List.Item
          icon={
            <ThemeIcon color="teal" size={24} radius="xl">
              <IconCircleCheck size="1rem" />
            </ThemeIcon>
          }
        >I started teaching frontend technologies</List.Item>
        <List.Item
          icon={
            <ThemeIcon color="teal" size={24} radius="xl">
              <IconCircleCheck size="1rem" />
            </ThemeIcon>
          }
        >Currently I teach mainly python and SQL databases</List.Item>
        <List.Item
          icon={
            <ThemeIcon color="teal" size={24} radius="xl">
              <IconCircleCheck size="1rem" />
            </ThemeIcon>
          }
        >Occasionally I teach Spring - Java</List.Item>
      </List>

      <Title order={2} color={"blue"}>Courses</Title>

      <List className={"my-4"} spacing={"sm"}>
        <List.Item
          icon={
            <ThemeIcon color="red" size={24} radius="xl">
              <IconBrandAngular size="1rem" />
            </ThemeIcon>
          }
        >Frontend technologies for Java developers - Angular</List.Item>

        <List.Item
          icon={
            <ThemeIcon color="green" size={24} radius="xl">
              <IconCoffee size="1rem" />
            </ThemeIcon>
          }
        >Backend technologies - Spring</List.Item>

        <List.Item
          icon={
            <ThemeIcon color="yellow" size={24} radius="xl">
              <IconBrandJavascript size="1rem" />
            </ThemeIcon>
          }
        >Frontend basics - HTML, CSS, Javascript</List.Item>

        <List.Item
          icon={
            <ThemeIcon color="blue" size={24} radius="xl">
              <IconBrandPython size="1rem" />
            </ThemeIcon>
          }
        >Backend technologies - Django, FastAPI</List.Item>

        <List.Item
          icon={
            <ThemeIcon color="blue" size={24} radius="xl">
              <IconBrandPython size="1rem" />
            </ThemeIcon>
          }
        >SQL Databases - Postgres</List.Item>

        <List.Item
          icon={
            <ThemeIcon color="blue" size={24} radius="xl">
              <IconBrandPython size="1rem" />
            </ThemeIcon>
          }
        >Python Database Programming - Sql alchemy</List.Item>

        <List.Item
          icon={
            <ThemeIcon color="blue" size={24} radius="xl">
              <IconBrandPython size="1rem" />
            </ThemeIcon>
          }
        >Python intermediate</List.Item>

        <List.Item
          icon={
            <ThemeIcon color="blue" size={24} radius="xl">
              <IconBrandPython size="1rem" />
            </ThemeIcon>
          }
        >Python Algorithms</List.Item>
      </List>

    </div>
  );
}