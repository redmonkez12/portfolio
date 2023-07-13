import NextLink from "next/link";
import Image from "next/image";
import { Group, NavLink } from "@mantine/core";
import { useState } from "react";
import { useRouter } from "next/router";

type Link = {
  url: string;
  label: string;
}

const links: Link[] = [
  {
    url: "side-projects",
    label: "Side projects"
  },
  {
    url: "frontendmentor",
    label: "Frontend mentor"
  },
];

export function Menu() {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);

  function menuOpen() {
    setShowMenu(!showMenu);
  }

  return (
    <div className={"rounded-lg"}>
      <Image
        className={"absolute right-12 inline md:hidden"}
        src={"/images/hamburger.svg"}
        width={50}
        height={50}
        alt={"hamburger"}
        onClick={menuOpen} />

      <Group className={"gap-4 justify-between"}>
        <div className={"flex gap-4 items-center"}>
          <Image src={"/images/logo.svg"} width={50} height={50} alt={"logo"} />
        </div>

        <Group className={`flex-col w-full md:w-auto
        md:flex-row ${showMenu ? "" : "hidden"} absolute md:relative z-10 md:flex top-0 bottom-0 left-0 right-0 p-8 md:p-0`}>
          <Image className={"inline md:hidden self-start"} src={"/images/cancel.svg"} width={45} height={45}
                 alt={"logo"} onClick={menuOpen} />

          {links.map(link => (
            <NavLink key={link.url}
                     color={"teal"}
                     className={"md:w-auto w-full"}
                     component={NextLink}
                     href={`/${link.url}`}
                     label={link.label}
                     active={router.pathname.includes(link.url)}
            />
          ))}
        </Group>
      </Group>
    </div>
  );
}