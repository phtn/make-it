"use client";

import Banner from "@@components/banner";
import Hero from "@@components/hero";
import { HeadlineData } from "@@components/hero/types";
import Footer from "@@components/footer";
import GodRays from "@@components/godrays";
import { Container, Content } from "./styled";
import { toast } from "sonner";
import { Kerrigan } from "../_components/hero/Kerrigan";

const headlines: HeadlineData[] = [
  { id: 1, name: "", headline: "Collaborate" },
  { id: 2, name: "", headline: "Explore" },
  { id: 3, name: "", headline: "Learn" },
];

const heroProps = {
  title: "Testimonials",
  subheader: "Read client feedbacks.",
  description: `Where Lifelong Connections Are Forged. With a Team of Passionate Mentors, and Thought Leaders.`,
  headlines,
};

const Testimonials = () => {
  const onClickPrimary = () => {
    toast(`You're hiring a mentor!`, {
      description: `That's cool! Would you like to proceed?`,
      action: {
        label: "Yes",
        onClick: () => toast("Sure you do."),
      },
    });
  };
  const onClickSecondary = () => {
    toast(`You're hiring a mentor!`, {
      description: `That's cool! Would you like to proceed?`,
      action: {
        label: "Yes",
        onClick: () => toast("Sure you do."),
      },
    });
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
        <div className="pt-[100px]">
          <Kerrigan
            title="What people say about us."
            description="Mentors and Mentees real experiences with MiiA."
          />
        </div>

        <Footer />
      </Content>
    </Container>
  );
};

export default Testimonials;
