import { Group } from "@mantine/core";
import Image from "next/image";

export function Footer() {
  return (
    <Group className={"justify-between"}>
      <div className={"flex gap-4 items-center"}>
        <a href="https://www.linkedin.com/in/tom%C3%A1%C5%A1-svojanovsk%C3%BD-372b9879/" target={"_blank"}>
          <Image className={"cursor-pointer"} src={"/images/social/linkedin.svg"} width={25} height={25} alt={"linkedin"}/>
        </a>

        <a href="https://medium.com/@tomas.svojanovsky11">
          <Image className={"cursor-pointer"} src={"/images/social/medium.svg"} width={28} height={28} alt={"medium"}/>
        </a>
      </div>

      <div>Tomáš Svojanovský - {new Date().getFullYear()}</div>
    </Group>
  );
}
