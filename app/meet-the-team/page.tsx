"use client";
import { Header, HeaderGap } from "../_components/header";
import Hero from "../_components/hero";
import { HeadlineData } from "../_components/hero/types";
import PostScript from "../_components/postscript";
import PastScript from "../_components/postscript/pastscript";
import { Container, Content } from "./styled";
import { theTeam } from "./team-data";

import dynamic from "next/dynamic";

const GodRays = dynamic(() => import("../_components/godrays"));

const header = { tag: "dive", title: "The Company" };
const featureHeader = { tag: "Team", title: "The Company" };

const headlines: HeadlineData[] = [
  { id: 1, name: "", headline: "Behind the scenes" },
  { id: 2, name: "", headline: "The Network" },
  { id: 3, name: "", headline: "Leadership" },
];

const heroProps = {
  title: "Meet the Team",
  subheader: "The Planning Dream Team.",
  description: `Meet the Team with Global Presence that Fuels Collaboration, and Guides you towards Success at Every Turn. Together, We'll unleash the Full Spectrum of your potential.`,
  headlines,
};

const MeetTheTeam = () => (
  <Container>
    <GodRays />
    <Content>
      <Hero asset={<></>} primaryProps={heroProps} />
      <DesktopView />
    </Content>
  </Container>
);

const DesktopView = () => (
  <div>
    <Header tag="team" title={`Your Planning Dream Team`} />
    <HeaderGap />
    <PostScript
      header={header}
      content={{
        title: theTeam[0].firstName,
        description: theTeam[0].description,
      }}
      src="/team/rea-v1.jpg"
    />
    <PastScript
      content={{
        title: theTeam[1].firstName,
        description: theTeam[1].description,
      }}
      src="/lifestyle/life-v1.jpg"
    />
    <PostScript
      content={{
        title: theTeam[2].firstName,
        description: theTeam[2].description,
      }}
      src="/lifestyle/life-v2.jpg"
    />
    <PastScript
      content={{
        title: theTeam[3].firstName,
        description: theTeam[3].description,
      }}
      src="/lifestyle/life-v3.jpg"
    />
  </div>
);

export default MeetTheTeam;
