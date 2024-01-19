"use client";
import { Container, Content } from "./styled";
import { Terran } from "@@components/hero/Terran";
import { onInfo } from "@@utils/helpers";
import dynamic from "next/dynamic";
import { Kerrigan } from "../_components/hero/Kerrigan";
import { classData } from "./data";

const GodRays = dynamic(() => import("@@components/godrays"));
const Banner = dynamic(() => import("@@components/banner"));
const Footer = dynamic(() => import("@@components/footer"));

const heroProps = {
  title: "Join a class today!",
  subheader: "Over +100 classes.",
  description: `Where Lifelong Connections Are Forged. With a Team of Passionate Mentors, and Thought Leaders.`,
};

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
        <Terran asset={<ImageAsset />} primaryProps={heroProps} />
        <Banner
          title="Join a class today!"
          description={`Your journey begins here.`}
          primaryAction={primaryAction}
          secondaryAction={secondaryAction}
        />
        <Kerrigan
          title="Join classes online today!"
          description="Sign up form membership to unlock all courses."
          data={classData}
          listTitle="Our Active Classes"
        />
        <Footer />
      </Content>
    </Container>
  );
};

const ImageAsset = () => (
  <div
    className={`border bg-[url('/company/student-v1.webp')] h-[400px] md:h-[500px] w-[calc(100vw-42px)] md:w-[500px] flex items-center justify-center rounded-full  bg-cover bg-center bg-no-repeat `}
  ></div>
);

export default JoinAClass;
