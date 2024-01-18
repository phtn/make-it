"use client";

import { Terran } from "@@components/hero/Terran";
import { onInfo } from "@@utils/helpers";
import { Container, Content } from "./styled";

import dynamic from "next/dynamic";
import { Kerrigan } from "../_components/hero/Kerrigan";
const GodRays = dynamic(() => import("@@components/godrays"));
const Banner = dynamic(() => import("@@components/banner"));
const Highlight = dynamic(() => import("@@components/highlight"));
const Footer = dynamic(() => import("@@components/footer"));

const heroProps = {
  title: "Be a mentee",
  subheader: `It's FREE!`,
  description: `Where Lifelong Connections Are Forged. With a Team of Passionate Mentors, and Thought Leaders.`,
};
const highlightHeader = { tag: "Hire", title: "Meet the Mentors" };

const BeAMentee = () => {
  const onClickPrimary = () => {
    onInfo(`You're hiring a mentor!`);
  };
  const onClickSecondary = () => {
    onInfo(`You're hiring a mentor!`);
  };
  const primaryAction = {
    label: "Hire a mentor",
    onClick: onClickPrimary,
  };
  const secondaryAction = {
    label: "Login",
    onClick: onClickSecondary,
  };

  return (
    <Container>
      <GodRays />

      <Content>
        <Kerrigan
          title="Join us today for free!"
          description="You can reach us from anywhere in closest to you."
        />

        <Banner
          title="Hire a mentor today!"
          description={`Your journey begins here.`}
          primaryAction={primaryAction}
          secondaryAction={secondaryAction}
        />
        <Highlight header={highlightHeader} />
        <Footer />
      </Content>
    </Container>
  );
};

export default BeAMentee;
