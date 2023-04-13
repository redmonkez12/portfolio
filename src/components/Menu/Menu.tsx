import NextLink from "next/link";
import Image from "next/image";
import { Button, Group } from "@mantine/core";

export function Menu() {
  return (
    <Group className={"gap-4 mb-0 md:mb-6 justify-between"}>
      <Image src={"/images/logo.svg"} width={45} height={45} alt={"logo"} />

      <Group className={"flex-col w-full md:w-auto md:flex-row"}>
        <Button className={"md:w-auto w-full"} component={NextLink} href={"/frontend-mentor"} variant={"filled"}>
          Frontend mentor
        </Button>

        <Button className={"md:w-auto w-full"} component={NextLink} href={"/side-projects"} variant={"outline"}>
          Side projects
        </Button>

        <Button className={"md:w-auto w-full"} component={NextLink} href={"/sda"} variant={"outline"}>
          SDA
        </Button>
      </Group>
    </Group>
  );
}