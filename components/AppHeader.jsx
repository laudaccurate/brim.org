import React from "react";
import {
  createStyles,
  Header,
  Group,
  Collapse,
  Burger,
  // Container,
} from "@mantine/core";
import {
  Books,
  BuildingChurch,
  Home,
  MailForward,
  Users,
} from "tabler-icons-react";
import { useDisclosure } from "@mantine/hooks";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import logo from "../public/images/brim_logo.png";

const useStyles = createStyles((theme) => ({
  inner: {
    height: 56,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  links: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("md")]: {
      display: "none",
    },
  },
}));

const links = [
  {
    link: "/",
    label: "Home",
    icon: <Home size={18} className="mt-[2px]" />,
  },

  {
    link: "/about",
    label: "About",
    icon: <BuildingChurch size={18} className="mt-[2px]" />,
  },
  {
    link: "/ministries",
    label: "Ministries",
    icon: <Users size={16} className="mt-[2px]" />,
  },
  {
    link: "/library",
    label: "Library",
    icon: <Books size={16} className="mt-[2px]" />,
  },
  {
    link: "/contact",
    label: "Contact",
    icon: <MailForward size={16} className="mt-[2px]" />,
  },
];

export default function AppHeader() {
  const router = useRouter();
  const [opened, handlers] = useDisclosure(false);
  const { classes } = useStyles();

  const items = links.map((link) => (
    <div
      className={`${
        link.link === router.pathname && "bg-primary"
      } px-4 py-2 hover:bg-gray-200 rounded-md leading-3 uppercase space-x-1 items-center flex ${
        link.link === router.pathname ? "text-white" : "text-gray-500"
      }  no-underline font-semibold`}
    >
      {link.icon}

      <Link href={link.link} key={link.label} passHref>
        <a
          key={link.label}
          href={link.link}
          className={`leading-3 uppercase no-underline font-medium ${
            link.link === router.pathname ? "text-white" : "text-gray-500"
          } `}
          // onClick={(event) => event.preventDefault()}
        >
          {link.label}
        </a>
      </Link>
    </div>
  ));

  return (
    <Header>
      <div className="px-2">
        <div style={{ paddingBottom: 5 }}>
          <div className={classes.inner}>
            <Link href="/" passHref>
              <a href="/a">
                <Image src={logo} width={70} height={50} alt="BRIM logo" />
              </a>
            </Link>
            <Group spacing={5} className={classes.links}>
              {items}
            </Group>
            <Burger
              opened={opened}
              onClick={() => handlers.toggle()}
              className={classes.burger}
              size="sm"
            />
          </div>
          <Collapse
            in={opened}
            className={classes.burger}
            // transitionDuration={300}
            // transitionTimingFunction="linear"
          >
            {items}
          </Collapse>
        </div>
      </div>
    </Header>
  );
}
