import NextLink from "next/link";
import Image from "next/image";
import { Button, Group } from "@mantine/core";
import { useState } from "react";


export function Menu() {
  const [showMenu, setShowMenu] = useState(false);

  function menuOpen() {
    setShowMenu(!showMenu);
  }

  return (
    <div>
      <Image
        className={"absolute right-8 inline md:hidden"}
        src={"/images/hamburger.svg"}
        width={50}
        height={50}
        alt={"hamburger"}
        onClick={menuOpen} />

      <Group className={"gap-4 justify-between"}>
        <Image src={"/images/logo.svg"} width={45} height={45} alt={"logo"} />

        <Group className={`flex-col w-full md:w-auto
        md:flex-row ${showMenu ? "" : "hidden"} absolute md:relative z-10 md:flex bg-[#1A1B1E] top-0 bottom-0 left-0 right-0 p-8 md:p-0`}>
          <Image className={"inline md:hidden self-start"} src={"/images/cancel.svg"} width={45} height={45} alt={"logo"} onClick={menuOpen}/>

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
    </div>
  );
}