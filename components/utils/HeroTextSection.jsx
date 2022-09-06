/* eslint-disable react/react-in-jsx-scope */
import { createStyles, Title, Text, Button, Container } from "@mantine/core";
import Dots from "./Dots";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    paddingTop: 50,
    paddingBottom: 0,

    // "@media (max-width: 755px)": {
    //   paddingTop: 80,
    //   paddingBottom: 60,
    // },
  },

  inner: {
    position: "relative",
    zIndex: 1,
  },

  dots: {
    position: "absolute",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[5]
        : theme.colors.gray[1],

    "@media (max-width: 755px)": {
      display: "none",
    },
  },

  dotsLeft: {
    left: 0,
    top: 0,
  },

  highlight: {
    color:
      theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 4 : 6],
  },

  description: {
    textAlign: "center",

    "@media (max-width: 520px)": {
      textAlign: "left",
      fontSize: theme.fontSizes.md,
    },
  },

  controls: {
    marginTop: theme.spacing.lg,
    display: "flex",
    justifyContent: "center",

    "@media (max-width: 520px)": {
      flexDirection: "column",
    },
  },

  control: {
    "&:not(:first-of-type)": {
      marginLeft: theme.spacing.md,
    },

    "@media (max-width: 520px)": {
      height: 42,
      fontSize: theme.fontSizes.md,

      "&:not(:first-of-type)": {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },
}));

export default function HeroText() {
  const { classes } = useStyles();

  return (
    <Container className="relative pt-12 pb-16 lg:pb-28" size={1400}>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      <div className={classes.inner}>
        <Title className="text-5xl text-center mb-4 font-bold">
          We are the{" "}
          <Text component="span" className={classes.highlight} inherit>
            redeemed
          </Text>{" "}
          of the Lord !!!
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" color="dimmed" className="text-center mb-6">
            Bushfire Revival Int. Ministry (BRIM) is a big family of God&apos;s
            redeemed. We look forward with eager expectation to the return of
            Christ, our Blessed Redeemer and for His Kingdom, wherein dwells
            Righteousness.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button
            className={classes.control}
            size="lg"
            variant="default"
            color="gray"
          >
            Become a Member
          </Button>
          <Button className={classes.control} size="lg">
            Want to Know more ?
          </Button>
        </div>
      </div>
    </Container>
  );
}
