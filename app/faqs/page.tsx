"use client";
import { HeadlineData } from "../_components/hero/types";
import { Container, Content } from "./styled";
import { toast } from "sonner";
import Footer from "../_components/footer";
import { Protos } from "../_components/hero/Protos";
import NewBanner from "../_components/banner/new-banner";
import Blocks from "../_components/blocks";
import { blocks } from "./blocks-data";

const headlines: HeadlineData[] = [
  { id: 1, name: "", headline: "Discover" },
  { id: 2, name: "", headline: "Get Answers" },
  { id: 3, name: "", headline: `We're here to help` },
];

const protosProps = {
  title: "FAQs",
  subheader: "Your questions answered.",
  description: `Feel free to browse this page for answers. If you can't find what you're looking for, you can always reach out to us.`,
  headlines,
};

const FAQs = () => {
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
    label: "Get Help",
    onClick: onClickPrimary,
  };
  const secondaryAction = {
    label: "Login",
    onClick: onClickSecondary,
  };

  return (
    <Container>
      <Content>
        <Protos asset={<></>} primaryProps={protosProps} />
        <NewBanner
          title="Frequently Asked Questions."
          description={`Each month, we get 4000+ messages from readers and people who would like help. if you're new to MiiA - or even 
          if you've been here for a while -- you may be curious about what we're all about. Here are some of the most commonly asked
          questions we get. Don't see your question?`}
          primaryAction={primaryAction}
          secondaryAction={secondaryAction}
        />
        <Blocks blocks={blocks} />
        <Footer />
      </Content>
    </Container>
  );
};

export default FAQs;
