import React from "react";
import Events from "../components/Events";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Ministries from "../components/Ministries";

export default function HomePage() {
  return (
    <Layout pageTitle="Home">
      <Hero />
      <Events />
      <Ministries />
    </Layout>
  );
}
