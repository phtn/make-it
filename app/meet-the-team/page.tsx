"use client";

import { FourFeatureImage } from "@@components/four-features";
import { Terran } from "@@components/hero/Terran";
import { HeadlineData } from "@@components/hero/types";
import Footer from "@@components/footer";
import { Container, Content } from "./styled";
import dynamic from "next/dynamic";
import { teamData } from "./team-data";

const GodRays = dynamic(() => import("@@components/godrays"));

const header = { tag: "dive", title: "The Company" };
const featureHeader = { tag: "meet", title: "Planning Dream Team" };

const headlines: HeadlineData[] = [
  { id: 1, name: "", headline: "Behind the scenes" },
  { id: 2, name: "", headline: "The Network" },
  { id: 3, name: "", headline: "Leadership" },
];

const heroProps = {
  title: "Meet the Team",
  subheader: "Your Planning Dream Team.",
  description: `Meet the Team with Global Presence that Fuels Collaboration, and Guides you towards Success at Every Turn. Together, We'll unleash the Full Spectrum of your potential.`,
  headlines,
};

const MeetTheTeam = () => (
  <Container>
    <GodRays />
    <Content>
      <Terran asset={<></>} primaryProps={heroProps} />
      <DesktopView />
    </Content>
  </Container>
);

const DesktopView = () => (
  <div>
    <FourFeatureImage header={featureHeader} data={teamData} />
    <Footer />
  </div>
);

export default MeetTheTeam;
