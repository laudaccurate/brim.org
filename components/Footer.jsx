import React from "react";
import Image from "next/image";
import {
  createStyles,
  Text,
  Container,
  ActionIcon,
  Group,
} from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
  IconBrandFacebook,
} from "@tabler/icons";
import Logo from "../public/images/brim_logo.png";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 100,
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  logo: {
    maxWidth: 200,

    [theme.fn.smallerThan("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyItems: "center",
    },
  },

  description: {
    marginTop: 5,

    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
      textAlign: "center",
    },
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },

  groups: {
    display: "flex",
    flexWrap: "wrap",

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  wrapper: {
    width: 160,
  },

  link: {
    display: "block",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: 3,
    paddingBottom: 3,

    "&:hover": {
      textDecoration: "underline",
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: theme.spacing.xs / 2,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },

  afterFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    // paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },

  social: {
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
    },
  },
}));

const data = [
  {
    title: "About",
    links: [
      {
        label: "History",
        link: "/history",
      },
      {
        label: "Ministries",
        link: "/ministries",
      },
      {
        label: "Branches",
        link: "/branches",
      },
      {
        label: "Pastors",
        link: "/pastors",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        label: "Sermons",
        link: "/sermons",
      },
      {
        label: "Blog",
        link: "/blog",
      },
      {
        label: "News",
        link: "/news",
      },
      {
        label: "Gallery",
        link: "/gallery",
      },
    ],
  },
  {
    title: "Contact",
    links: [
      {
        label: "Contacts",
        link: "/contact",
      },
      {
        label: "Maps",
        link: "/maps",
      },
      {
        label: "Cells",
        link: "/cells",
      },
      {
        label: "Social Media",
        link: "/socials",
      },
    ],
  },
];

export default function FooterLinks() {
  const { classes } = useStyles();
  const groups = data.map((group) => {
    const links = group.links.map((link) => (
      <Text
        key={link.label}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });
  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Image src={Logo} width={70} height={50} alt="logo" />
          <Text size="xs" color="dimmed" className={classes.description}>
            BushFire Revival Int. Ministry
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text color="dimmed" size="sm">
          © {new Date().getFullYear()} brim.org. All rights reserved.
        </Text>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <ActionIcon size="lg">
            <IconBrandFacebook size={18} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandTwitter size={18} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandInstagram size={18} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandYoutube size={18} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}
