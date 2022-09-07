/* eslint-disable react/react-in-jsx-scope */
import PropTypes from "prop-types";
import {
  createStyles,
  Card,
  Image,
  Text,
  Group,
  Title,
  Button,
} from "@mantine/core";
import { CalendarEvent, MapPin, ExternalLink } from "tabler-icons-react";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  title: {
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1.2,
  },

  body: {
    padding: theme.spacing.md,
  },
}));

const events = [
  {
    image: "./images/banner_6.webp",
    category: "BRIM, LA",
    title: "20TH ANNIVERSARY Revival & Celebration",
    date: "Sep 9th",
    venue: "La, Accra",
  },
  {
    image: "./images/banner-1.webp",
    category: "PRAYER PALACE, UK",
    title: "Annual Love Feast, 2022 Edition (Boxing Day)",
    date: "Dec 26th",
    venue: "SW9 8SA",
  },
  {
    image: "./images/banner-4.webp",
    category: "BRIM, DOMEABRA",
    title: "Children's Day celebration and Child Dedication",
    date: "Nov 17th",
    venue: "Favor Land",
  },
];

function EventCard({ image, category, title, date, venue }) {
  const { classes } = useStyles();
  return (
    <Card withBorder radius="md" p={0} className={classes.card}>
      <Group noWrap spacing={0}>
        <Image src={image} height={140} width={140} />
        <div className={classes.body}>
          <Text transform="uppercase" color="dimmed" weight={700} size="xs">
            {category}
          </Text>
          <Text className={classes.title} mt="xs" mb="md">
            {title}
          </Text>
          <Group noWrap spacing="xs">
            <Group spacing="xs" noWrap>
              <MapPin size={15} className="text-gray-500" />
              <Text size="xs" color="dimmed" className="maxli">
                {venue}
              </Text>
            </Group>
            <Text size="xs" color="dimmed">
              {/* • */}|
            </Text>
            <Group spacing="xs" noWrap>
              <CalendarEvent size={15} className="text-gray-500" />
              <Text size="xs" color="dimmed">
                {date}
              </Text>
            </Group>
          </Group>
        </div>
      </Group>
    </Card>
  );
}

export default function Events() {
  const items = events.map((item) => (
    <EventCard
      image={item.image}
      venue={item.venue}
      category={item.category}
      date={item.date}
      title={item.title}
      key={item.title}
    />
  ));

  return (
    <div>
      <div className="flex justify-center">
        <div className="h-[1px] w-[30%] lg:w-[60%] bg-gray-300 mb-6 lg:mb-12" />
      </div>
      <Title className="text-center mb-4">Upcoming Events</Title>
      <div className="flex flex-col lg:flex-row justify-evenly py-6 px-3 lg:px-14 lg:space-x-14 space-y-6 lg:space-y-0">
        {items}
      </div>
      <div className="flex justify-center my-16">
        <Button
          component="a"
          href="#"
          variant="outline"
          leftIcon={<ExternalLink size={14} />}
        >
          View all Events
        </Button>
      </div>
    </div>
  );
}

EventCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  venue: PropTypes.string.isRequired,
};
