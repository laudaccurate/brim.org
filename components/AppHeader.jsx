import React from "react";
import {
  createStyles,
  Header,
  Group,
  Collapse,
  Burger,
  // Container,
} from "@mantine/core";
import { Home } from "tabler-icons-react";
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
    icon: <Home size={16} />,
  },

  {
    link: "/about",
    label: "About",
    icon: <Home size={16} />,
  },
  {
    link: "/ministries",
    label: "Ministries",
    icon: <Home size={16} />,
  },
  {
    link: "/library",
    label: "Library",
    icon: <Home size={16} />,
  },
  {
    link: "/contact",
    label: "Contact",
    icon: <Home size={16} />,
  },
];

export default function AppHeader() {
  const router = useRouter();
  const [opened, toggleOpened] = useDisclosure(false);
  const { classes } = useStyles();

  const items = links.map((link) => (
    <Link href={link.link} key={link.label} passHref>
      <a
        key={link.label}
        href={link.link}
        className={`${
          link.link === router.pathname && "bg-primary"
        } px-4 py-3 hover:bg-gray-200 rounded-md leading-3 uppercase block ${
          link.link === router.pathname ? "text-white" : "text-gray-500"
        }  no-underline font-semibold`}
        // onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    </Link>
  ));

  return (
    <Header>
      <div className="px-14">
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
              onClick={() => toggleOpened()}
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
