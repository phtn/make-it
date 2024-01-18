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
  title: "Join a Class",
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
        <Terran
          asset={
            <div
              className={`border h-[500px] w-[500px] rounded-full bg-[url('/company/student-v1.webp')] bg-cover bg-center bg-no-repeat `}
            />
          }
          primaryProps={heroProps}
        />
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

export default JoinAClass;
