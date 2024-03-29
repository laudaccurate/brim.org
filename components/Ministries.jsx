/* eslint-disable react/react-in-jsx-scope */
import PropTypes from "prop-types";
// import { Carousel } from "@mantine/carousel";
import {
  Card,
  Image,
  Text,
  Badge,
  SimpleGrid,
  Group,
  Title,
} from "@mantine/core";

const ministries = [
  {
    image: "./images/men_1.webp",
    title: "Men's Ministry",
    tag: "BRIM, Favor Land",
    description:
      "MEN!!!, STRENGTH FOR THE LORD.... That's what we say and represent, lifting up Holy hands to Fod in prayer always, and availing ourselves for ministry.",
  },
  {
    image: "./images/choir_2.webp",
    title: "Women's Ministry",
    tag: "Prayer Palace, UK",
    description:
      "WOMEN !!!, Let you light shine... Yes, we shine the Light of Christ always through humility ,reasonable service and Godly examples. This is our ministry.",
  },
  {
    image: "./images/choir_3.webp",
    title: "Youth Ministry",
    tag: "BRIM, LA",
    description:
      "YOUTH ALIVE, WORK IS DONE!!! We are youth for Jesus Christ and His Ambassadors. Everywhere we go, we prove duly that we are truly Youth for Jesus Christ",
  },
  {
    image: "./images/banner-4.webp",
    title: "Children's Ministry",
    tag: "Prayer Palace, UK",
    description:
      "We are Children of The Lord and we sing HALLELUJAH always, for ours is the Kingdom of God. Due to this, we live in Godly love, obedience and humility.",
  },
  {
    image: "./images/choir_1.webp",
    title: "BRIM Choir",
    tag: "Prayer Palace, LA",
    description:
      "We are Children of The Lord and we sing HALLELUJAH always, for ours is the Kingdom of God. Due to this, we live in Godly love, obedience and humility.",
  },
];

function MinistryCard({ image, title, description, tag }) {
  const images = [
    "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    "https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    "https://images.unsplash.com/photo-1444084316824-dc26d6657664?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
  ];

  return (
    <Card
      shadow="sm"
      p="lg"
      radius="md"
      withBorder
      className="lg:min-w-[23%] min-w-[92%]"
    >
      <Card.Section>
        <Image src={image} height={160} alt="Norway" withPlaceholder />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{title}</Text>
        <Badge color="pink" variant="light">
          {tag}
        </Badge>
      </Group>

      <Text size="sm" color="dimmed">
        {description}
      </Text>

      <Card.Section inheritPadding mt="sm" pb="md">
        <SimpleGrid cols={3}>
          {images.map((img) => (
            <Image src={img} key={img} radius="sm" withPlaceholder />
          ))}
        </SimpleGrid>
      </Card.Section>
    </Card>
  );
}

MinistryCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default function Ministries() {
  const items = ministries.map((item) => (
    <MinistryCard
      image={item.image}
      title={item.title}
      tag={item.tag}
      description={item.description}
    />
  ));
  return (
    <div>
      <div className="flex justify-center">
        <div className="h-[1px] w-[30%] lg:w-[60%] bg-gray-300 mb-6 lg:mb-12" />
      </div>
      <Title className="text-center mb-10">Ministries & Groups</Title>
      <div className="scrollbar-hide flex flex-row px-4 lg:px-8 lg:py-4 justify-start space-x-6  overflow-x-auto">
        {items}
      </div>
      {/* <Carousel
        className="pl-4 lg:px-16 py-2"
        withIndicators
        // height={200}
        slideSize="25%"
        slideGap="lg"
        breakpoints={[
          { maxWidth: "md", slideSize: "50%" },
          { maxWidth: "sm", slideSize: "100%", slideGap: 1 },
        ]}
        loop
        align="start"
      >
        {items}
      </Carousel> */}
    </div>
  );
}
