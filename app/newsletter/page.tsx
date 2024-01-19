"use client";

import Banner from "@@components/banner";
import { HeadlineData } from "@@components/hero/types";
import Footer from "@@components/footer";
import Godrays from "@@components/godrays";
import { Terran } from "@@components/hero/Terran";
import { FourFeatures } from "@@components/four-features";
import { Container, Content } from "./styled";
import { featureData } from "./data";
import { toast } from "sonner";
import { Kerrigan } from "../_components/hero/Kerrigan";

const headlines: HeadlineData[] = [
  { id: 1, name: "", headline: "Collaborate" },
  { id: 2, name: "", headline: "Explore" },
  { id: 3, name: "", headline: "Learn" },
];

const heroProps = {
  title: "Newsletters",
  subheader: "Get weekly updates!",
  description: `Where Lifelong Connections Are Forged. With a Team of Passionate Mentors, and Thought Leaders.`,
  headlines,
};

const featureHeader = { tag: "discover", title: "What can you expect?" };

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
        <div className="pt-[100px]">
          <Kerrigan
            title="News from the world of opportunities!"
            description="Get latest trends, tips, and lifehacks every week!"
          />
        </div>
        <Banner
          title="Subscribe to our Newsletter!"
          description={`Get the latest updates.`}
          primaryAction={primaryAction}
          secondaryAction={secondaryAction}
        />
        <FourFeatures header={featureHeader} data={featureData} />
        <Footer />
      </Content>
    </Container>
  );
}
