import React from "react";
import Events from "../components/Events";
import Hero from "../components/Hero";
import Layout from "../components/Layout";

export default function HomePage() {
  return (
    <Layout pageTitle="Home">
      <Hero />
      <Events />
    </Layout>
  );
}
