import React from "react";
import PropTypes from "prop-types";
import {
  Paper,
  Text,
  TextInput,
  Textarea,
  Button,
  Group,
  SimpleGrid,
  createStyles,
  Tabs,
} from "@mantine/core";
import { IconBuildingChurch } from "@tabler/icons";
import { ContactIconsList } from "./utils/ContactIcons";
import bg from "../public/images/bg.svg";

const useStyles = createStyles((theme) => {
  const BREAKPOINT = theme.fn.smallerThan("sm");

  return {
    wrapper: {
      display: "flex",
      backgroundColor:
        theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
      borderRadius: theme.radius.lg,
      padding: 15,
      border: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[8]
          : theme.colors.gray[2]
      }`,

      [BREAKPOINT]: {
        flexDirection: "column",
      },
    },

    form: {
      boxSizing: "border-box",
      flex: 1,
      padding: theme.spacing.xl,
      paddingLeft: theme.spacing.xl * 2,
      borderLeft: 0,

      [BREAKPOINT]: {
        padding: theme.spacing.md,
        paddingLeft: theme.spacing.md,
      },
    },

    fields: {
      marginTop: -12,
    },

    fieldInput: {
      flex: 1,

      "& + &": {
        marginLeft: theme.spacing.md,

        [BREAKPOINT]: {
          marginLeft: 0,
          marginTop: theme.spacing.md,
        },
      },
    },

    fieldsGroup: {
      display: "flex",

      [BREAKPOINT]: {
        flexDirection: "column",
      },
    },

    contacts: {
      boxSizing: "border-box",
      position: "relative",
      borderRadius: theme.radius.lg - 2,
      backgroundImage: `url(${bg.src})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      border: "1px solid transparent",
      padding: theme.spacing.xl,
      flex: "0 0 280px",

      [BREAKPOINT]: {
        marginBottom: theme.spacing.sm,
        paddingLeft: theme.spacing.md,
      },
    },

    title: {
      marginBottom: theme.spacing.xl * 1.5,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,

      [BREAKPOINT]: {
        marginBottom: theme.spacing.xl,
      },
    },

    control: {
      [BREAKPOINT]: {
        flex: 1,
      },
    },
  };
});

const contacts = {
  la: {
    email: "churchbrim@gmail.com",
    phone: "+233 244 822 474",
    address: "GL-567-1923, South-La, Accra",
    hours: "Mon-Sun, 8am - 6pm",
  },
  uk: {
    email: "churchbrim@gmail.com",
    phone: "+447 342 970 392",
    address:
      "Arch 461 Station Passage,Red Gate \nLoughborough Junction Station, SW9 8SA",
    hours: "Mon-Sun, 8am - 6pm",
  },
  dom: {
    email: "churchbrim@gmail.com",
    phone: "+233 244 822 474",
    address: "GL-567-1923, Domeabra",
    hours: "Mon-Sun, 8am - 6pm",
  },
  kof: {
    email: "churchbrim@gmail.com",
    phone: "+233 244 822 474",
    address: "GL-567-1923, Koforidua",
    hours: "Mon-Sun, 8am - 6pm",
  },
  bom: {
    email: "churchbrim@gmail.com",
    phone: "+233 244 822 474",
    address: "Bomponso, East Ghana",
    hours: "Mon-Sun, 8am - 6pm",
  },
  bud: {
    email: "churchbrim@gmail.com",
    phone: "+233 244 822 474",
    address: "Budumburam, Cape Coast",
    hours: "Mon-Sun, 8am - 6pm",
  },
};

function Content({ list }) {
  const { classes } = useStyles();

  return (
    <Paper shadow="md" radius="lg" className=" lg:max-w-[70%] mx-auto mt-10">
      <div className={classes.wrapper}>
        <div className={classes.contacts}>
          <Text
            size="lg"
            weight={700}
            className={classes.title}
            sx={{ color: "#fff" }}
          >
            Contact information
          </Text>

          <ContactIconsList variant="white" data={list} />
        </div>

        <form
          className={classes.form}
          onSubmit={(event) => event.preventDefault()}
        >
          <Text size="lg" weight={700} className={classes.title}>
            Welcome, we want to know you 😊
          </Text>

          <div className={classes.fields}>
            <SimpleGrid cols={2} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
              <TextInput label="Your name" placeholder="Your name" />
              <TextInput
                label="Your email"
                placeholder="hello@mantine.dev"
                required
              />
            </SimpleGrid>

            <TextInput mt="md" label="Subject" placeholder="Subject" required />

            <Textarea
              mt="md"
              label="Your message"
              placeholder="Please include all relevant information"
              minRows={3}
            />

            <Group position="right" className="mt-12">
              <Button type="submit" className="bg-primary w-full">
                Send message
              </Button>
            </Group>
          </div>
        </form>
      </div>
    </Paper>
  );
}

Content.propTypes = {
  list: PropTypes.shape.isRequired,
};

export default function ContactUs() {
  return (
    <Tabs defaultValue="la">
      <Tabs.List className="w-screen overflow-x-auto scrollbar-hide py-3 flex justify-start lg:justify-evenly">
        <Tabs.Tab value="la" icon={<IconBuildingChurch size={14} />}>
          BRIM, La (HQ)
        </Tabs.Tab>
        <Tabs.Tab value="uk" icon={<IconBuildingChurch size={14} />}>
          Prayer Palace, UK
        </Tabs.Tab>
        <Tabs.Tab value="dom" icon={<IconBuildingChurch size={14} />}>
          BRIM, Domeabra
        </Tabs.Tab>
        <Tabs.Tab value="kof" icon={<IconBuildingChurch size={14} />}>
          BRIM, Koforidua
        </Tabs.Tab>
        <Tabs.Tab value="bom" icon={<IconBuildingChurch size={14} />}>
          BRIM, Bomponso
        </Tabs.Tab>
        <Tabs.Tab value="bud" icon={<IconBuildingChurch size={14} />}>
          BRIM, Budumburam
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="la" pt="xs">
        <Content list={contacts.la} />
      </Tabs.Panel>
      <Tabs.Panel value="uk" pt="xs">
        <Content list={contacts.uk} />
      </Tabs.Panel>
      <Tabs.Panel value="dom" pt="xs">
        <Content list={contacts.dom} />
      </Tabs.Panel>
      <Tabs.Panel value="kof" pt="xs">
        <Content list={contacts.kof} />
      </Tabs.Panel>
      <Tabs.Panel value="bom" pt="xs">
        <Content list={contacts.bom} />
      </Tabs.Panel>
      <Tabs.Panel value="bud" pt="xs">
        <Content list={contacts.bud} />
      </Tabs.Panel>
    </Tabs>
  );
}
