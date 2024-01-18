"use client";

import { HeadlineData } from "@@components/hero/types";
import { Container, Content } from "./styled";
import { toast } from "sonner";
import Footer from "@@components/footer";
import NewBanner from "@@components/banner/new-banner";
import { faqData } from "./blocks-data";
import { Kerrigan } from "../_components/hero/Kerrigan";
import { Faqs } from "./faqs";

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
        <Kerrigan
          title="You're in the right place!"
          description="We're happy to answer all your questions."
        />
        <NewBanner
          title="Frequently Asked Questions."
          description={`Each month, we get 4000+ messages from readers and people who would like help. if you're new to MiiA - or even 
          if you've been here for a while -- you may be curious about what we're all about. Here are some of the most commonly asked
          questions we get. Don't see your question?`}
          primaryAction={primaryAction}
          secondaryAction={secondaryAction}
        />
        <div className="flex items-center justify-center my-24">
          <Faqs data={faqData} />
        </div>

        <Footer />
      </Content>
    </Container>
  );
};

export default FAQs;
