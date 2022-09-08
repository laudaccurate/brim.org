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
      "This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit",
  },
  {
    icon: IconBible,
    title: "The Word",
    description:
      "People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma",
  },
  {
    icon: IconPray,
    title: "Prayer",
    description:
      "They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves",
  },
  {
    icon: IconHeart,
    title: "Love",
    description:
      "Although it still can’t fly, its jumping power is outstanding, in Alola the mushrooms on Paras don’t grow up quite right",
  },
  {
    icon: IconUsers,
    title: "Soul Winning",
    description:
      "Rapidash usually can be seen casually cantering in the fields and plains, Skitty is known to chase around after its own tail",
  },
  {
    icon: IconBuildingCastle,
    title: "Heaven",
    description:
      "They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves",
  },
];

const desc = {
  title: "What we believe in",
  description:
    "Every once in a while, you’ll see a Golbat that’s missing some fangs. This happens when hunger drives it to try biting a Steel-type Pokémon.",
};

export function Values({ icon: Icon, title, description }) {
  const theme = useMantineTheme();
  return (
    <div>
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
      <Text size="sm" color="dimmed" style={{ lineHeight: 1.6 }}>
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
        <Text size="sm" className="text-center">
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
