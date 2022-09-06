/* eslint-disable react/react-in-jsx-scope */
import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import PropTypes from "prop-types";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  createStyles,
  Paper,
  Text,
  Title,
  Button,
  useMantineTheme,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: 32,
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: "uppercase",
  },
}));

function Card({ image, title, category, quote }) {
  const { classes } = useStyles();

  return (
    <Paper
      // shadow="md"
      p="xl"
      // radius="md"
      sx={{
        backgroundImage: `url(${image})`,
      }}
      className="flex justify-between bg-cover bg-center h-[400px] lg:h-[620px] flex-col items-start"
    >
      <div>
        <Text className={classes.category} size="xs">
          {quote}
        </Text>
        <div className="lg:max-w-xl">
          <Title
            order={3}
            className="mix-blend-difference font-bold text-white text-[32px] lg:text-[45px] mt-7 lg:mt-12 leading-10 lg:leading-[50px]"
          >
            {title}
          </Title>
        </div>
      </div>
      <Button variant="white" color="dark" className="mb-3">
        {category}
      </Button>
    </Paper>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
};

const data = [
  {
    image: "./images/banner_2.webp",
    title:
      "So I will bless you as long as I live; in your name I will lift up my hands.",
    quote: "Psalm 6:4",
    category: "Prayer Palace, UK",
  },
  {
    image: "./images/banner_4.webp",
    title:
      "Praise Him with timbrel and dancing;Praise Him with stringed instruments and pipe.",
    quote: "Psalm 150:4",
    category: "Prayer Palace, UK",
  },
  {
    image: "./images/banner_5.webp",
    title: "How good and pleasant it is when brothers live together in unity!",
    quote: "Psalm 133 1",
    category: "Prayer Palace, UK",
  },
  {
    image: "./images/banner_6.webp",
    title:
      "Praise Him with timbrel and dancing;Praise Him with stringed instruments and pipe.",
    quote: "Psalm 150:4",
    category: "Prayer Palace, UK",
  },
  {
    image: "./images/banner-4.webp",
    title:
      "Let the little children come to me, and do not hinder them, for the kingdom of heaven belongs to such as these.",
    quote: "Matthew 19:14",
    category: "Prayer Palace, UK",
  },
];

export default function HeroCarousel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
  const autoplay = useRef(Autoplay({ delay: 4000 }));

  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize="100%"
      breakpoints={[{ maxWidth: "xs", slideSize: "100%", slideGap: 3 }]}
      slideGap="xl"
      align="start"
      slidesToScroll={mobile ? 1 : 1}
      withIndicators
      loop
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      styles={{
        control: {
          "&[data-inactive]": {
            opacity: 0,
            cursor: "default",
          },
        },
        indicator: {
          width: 12,
          height: 4,
          transition: "width 250ms ease",

          "&[data-active]": {
            width: 40,
          },
        },
      }}
    >
      {slides}
    </Carousel>
  );
}
