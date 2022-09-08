import React from "react";
import Layout from "../components/Layout";
import HeroText from "../components/utils/HeroTextSection";
import { ValuesGrid } from "../components/utils/Values";

export default function AboutPage() {
  return (
    <div>
      <Layout>
        <div>
          <HeroText />
          <ValuesGrid />
        </div>
      </Layout>
    </div>
  );
}
