"use client";

import { Container, Content, ImageAsset } from "./styled";
import { Terran } from "@@components/hero/Terran";
import { onInfo, onSuccess } from "@@utils/helpers";
import dynamic from "next/dynamic";
import NewFeatures from "../_components/new-features";
import { featureData, featureHeader } from "./data";

const GodRays = dynamic(() => import("@@components/godrays"));
const Banner = dynamic(() => import("@@components/banner"));
const Footer = dynamic(() => import("@@components/footer"));

const heroProps = {
  title: "Meet Mentor Mesh",
  subheader: "Connect and learn.",
  description: `Where Lifelong Connections Are Forged. With a Team of Passionate Mentors, and Thought Leaders.`,
};

const MeetAMentor = () => {
  const onClickPrimary = () => {
    onSuccess(`You're hiring a mentor!`);
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
        <Terran asset={<ImageAsset />} primaryProps={heroProps} />
        <Banner
          title="Hire a mentor today!"
          description={`Your journey begins here.`}
          primaryAction={primaryAction}
          secondaryAction={secondaryAction}
        />
        <NewFeatures header={featureHeader} data={featureData} />

        <Footer />
      </Content>
    </Container>
  );
};

export default MeetAMentor;
