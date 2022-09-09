/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/react-in-jsx-scope */
import {
  ThemeIcon,
  Text,
  Title,
  Container,
  SimpleGrid,
  useMantineTheme,
  createStyles,
} from "@mantine/core";
import PropTypes from "prop-types";
import {
  IconBrandTwitter,
  IconBible,
  IconPray,
  IconHeart,
  IconBuildingCastle,
  IconUsers,
} from "@tabler/icons";

export const MOCKDATA = [
  {
    icon: IconBrandTwitter,
    title: "The Holy Spirit",
    description:
      "It is our core mission to follow the leading of the Holy Spirit to guide us into all Truth, and to reveal the mysteries of God unto us",
  },
  {
    icon: IconBible,
    title: "The Word",
    description:
      "We hold fast with obedience (without wresting) to God's Word of patient endurance, till we have attained all the promises therein.",
  },
  {
    icon: IconPray,
    title: "Prayer",
    description:
      "Prayer is the master key. We follow our Saviour's example in prayer, as our only potent weapon for battling the present evil.",
  },
  {
    icon: IconHeart,
    title: "Love",
    description:
      "We love because He first loved us. We are imitators of Christ in love; the love of Christ rules in our hearts as His dearly beloved.",
  },
  {
    icon: IconUsers,
    title: "Soul Winning",
    description:
      "As God's redeemed people, we are passionate about availing ourselves unto God as instruments to make disciples of all nations.",
  },
  {
    icon: IconBuildingCastle,
    title: "Heaven",
    description:
      "Our citizenship is in Heaven. We eagerly look forward to that eternal city with foundations, prepared for us to reign in forever.",
  },
];

const desc = {
  title: "What we believe in",
  description:
    "BRIM is God's own church. Everything we do as a church is guided and inspired by these. God established and upholds His church on these.",
};

export function Values({ icon: Icon, title, description }) {
  const theme = useMantineTheme();
  return (
    <div className="flex flex-col justify-center items-center">
      <ThemeIcon
        variant="light"
        size={40}
        radius={40}
        // className="bg-primary bg-opacity-10"
      >
        <Icon size={20} stroke={1.5} />
      </ThemeIcon>
      <Text style={{ marginTop: theme.spacing.sm, marginBottom: 7 }}>
        {title}
      </Text>
      <Text
        size="sm"
        color="dimmed"
        style={{ lineHeight: 1.6 }}
        className="text-center"
      >
        {description}
      </Text>
    </div>
  );
}

Values.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.any.isRequired,
};

const useStyles = createStyles((theme) => ({
  description: {
    textAlign: "center",

    [theme.fn.smallerThan("sm")]: {
      textAlign: "left",
    },
  },
}));

export function ValuesGrid({ data = MOCKDATA }) {
  const { theme } = useStyles();
  const features = data.map((feature) => (
    <Values {...feature} key={feature.title} />
  ));

  return (
    <Container className="py-6">
      <Title className="font-medium text-center mb-4">{desc.title}</Title>

      <Container size={560} p={0}>
        <Text size="sm" className="text-center text-gray-500">
          {desc.description}
        </Text>
      </Container>

      <SimpleGrid
        mt={60}
        cols={3}
        spacing={theme.spacing.xl * 2}
        breakpoints={[
          { maxWidth: 980, cols: 2, spacing: "xl" },
          { maxWidth: 755, cols: 1, spacing: "xl" },
        ]}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}

ValuesGrid.propTypes = {
  data: PropTypes.shape.isRequired,
};
