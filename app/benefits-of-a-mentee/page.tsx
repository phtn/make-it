"use client";

import { Container, Content } from "@/app/benefits-of-a-mentee/styled";
import { Terran } from "@@components/hero/Terran";
import { Pricing } from "@@components/pricing";
import { onInfo, onSuccess } from "@@utils/helpers";
import dynamic from "next/dynamic";
import { Kerrigan } from "../_components/hero/Kerrigan";

const GodRays = dynamic(() => import("@@components/godrays"));
const Banner = dynamic(() => import("@@components/banner"));
const Footer = dynamic(() => import("@@components/footer"));

const heroProps = {
  title: "Benefits of a Mentee",
  subheader: "Get closer to achieving your goals!",
  description: `Where Lifelong Connections Are Forged. With a Team of Passionate Mentors, and Thought Leaders.`,
};

const BenefitsOfAMentee = () => {
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
        <Terran
          asset={
            <div
              className={`border h-[500px] w-[500px] rounded-full bg-[url('/company/club-v1.webp')] bg-center`}
            />
          }
          primaryProps={heroProps}
        />
        <Banner
          title="Hire a mentor today!"
          description={`Your journey begins here.`}
          primaryAction={primaryAction}
          secondaryAction={secondaryAction}
        />

        <Pricing />

        <Kerrigan title="Join us today!" description="" />
        <Footer />
      </Content>
    </Container>
  );
};

export default BenefitsOfAMentee;
