"use client";
import Banner from "../_components/banner";
import Hero from "../_components/hero";
import { HeadlineData } from "../_components/hero/types";
import { Container, Content } from "./styled";
import { toast } from "sonner";
import Footer from "../_components/footer";
import Godrays from "../_components/godrays";

const headlines: HeadlineData[] = [
  { id: 1, name: "", headline: "Collaborate" },
  { id: 2, name: "", headline: "Explore" },
  { id: 3, name: "", headline: "Learn" },
];

const heroProps = {
  title: "Newsletter",
  subheader: "Get weekly updates!",
  description: `Where Lifelong Connections Are Forged. With a Team of Passionate Mentors, and Thought Leaders.`,
  headlines,
};

export default function NewsLetter() {
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
    label: "Subscribe",
    onClick: onClickPrimary,
  };
  const secondaryAction = {
    label: "Login",
    onClick: onClickSecondary,
  };

  return (
    <Container>
      <Godrays />
      <Content>
        <Hero asset={<></>} primaryProps={heroProps} />
        <Banner
          title="Subscribe to our Newsletter!"
          description={`Get the latest updates.`}
          primaryAction={primaryAction}
          secondaryAction={secondaryAction}
        />
        <Footer />
      </Content>
    </Container>
  );
}
