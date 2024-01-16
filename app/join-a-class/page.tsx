"use client";
import { Container, Content } from "./styled";
import { Terran } from "@@components/hero/Terran";
import { onInfo } from "@@utils/helpers";
import dynamic from "next/dynamic";

const GodRays = dynamic(() => import("@@components/godrays"));
const Banner = dynamic(() => import("@@components/banner"));
const Highlight = dynamic(() => import("@@components/highlight"));
const Footer = dynamic(() => import("@@components/footer"));

const heroProps = {
  title: "Join a Class",
  subheader: "Over +100 classes.",
  description: `Where Lifelong Connections Are Forged. With a Team of Passionate Mentors, and Thought Leaders.`,
};
const highlightHeader = { tag: "Hire", title: "Meet the Mentors" };

const JoinAClass = () => {
  const onClickPrimary = () => {
    onInfo(`You're hiring a mentor!`);
  };
  const onClickSecondary = () => {
    onInfo(`You're hiring a mentor!`);
  };
  const primaryAction = {
    label: "Sign up",
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
        <Terran asset={<></>} primaryProps={heroProps} />
        <Banner
          title="Join a class today!"
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

export default JoinAClass;
