import { LandingContainer, LandingContent } from "./styled";
import { MetricItemProps } from "../metrics-banner/types";
import { ImageTree } from "../image-tree";
import { Terran } from "../hero/Terran";
import { Protos } from "../hero/Protos";
import { Wendel } from "./components";
import { motion } from "framer-motion";
import { onInfo } from "@/app/_utils/helpers";
import { whyChooseUsData, howItWorks } from "./data";
import dynamic from "next/dynamic";

const metrics: MetricItemProps[] = [
  { value: "500+", label: "mentors" },
  { value: "10K", label: "active members" },
  { value: "50+", label: "classes" },
  { value: "30+", label: "tutorials" },
];

const MetricsBanner = dynamic(() => import("../metrics-banner"));
const Banner = dynamic(() => import("../banner"));
const Pricing = dynamic(() => import("../pricing"));
const Highlight = dynamic(() => import("../highlight"));
const Reviews = dynamic(() => import("../reviews"));
const NewFeatures = dynamic(() => import("../new-features"));
const Footer = dynamic(() => import("../footer"));

const Landing = () => {
  const whyChooseUsHeader = { tag: "discover", title: "Why Choose Us?" };
  const howItWorksHeader = { tag: "discover", title: "How It Works" };
  const movingProps = {
    title: "Benefits of Moving to Australia",
    subheader: "Meet Engineer Wendel & Family",
    description: "",
  };
  const heroProps = {
    title: "Make It In Australia",
    subheader: "Hire a Mentor Today!",
    // description: `United by a Common Goal to Build a Better World. With a Team of Passionate Hope Builders, Visionaries, and Talents Willing To Architect Their Future. Your Journey Begins here.`,
    // description: `This is the opportunity you've been waiting for! Be one of the successful students who found their place in Australia. Together, you can make it too!`,
    description: "",
  };

  const onClickPrimary = () => {
    onInfo(`Everything Awesome...`);
  };
  const onClickSecondary = () => {
    onInfo(`Everything Awesome...`);
  };

  const primaryAction = {
    label: "Join Us",
    onClick: onClickPrimary,
  };
  const secondaryAction = {
    label: "Login",
    onClick: onClickSecondary,
  };

  return (
    <LandingContainer>
      <LandingContent>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.6, ease: "easeInOut" }}
        >
          <Terran asset={<ImageTree />} primaryProps={heroProps} />
        </motion.div>

        <Banner
          title="Gain access to a better future."
          description={`Together, we'll make it happen.`}
          primaryAction={primaryAction}
          secondaryAction={secondaryAction}
        />
        <NewFeatures header={whyChooseUsHeader} data={whyChooseUsData} />

        <MetricsBanner metrics={metrics} />
        <Protos asset={<Wendel />} primaryProps={movingProps} />

        <NewFeatures header={howItWorksHeader} data={howItWorks} />

        {/* <Pricing /> */}
        <Reviews />
        <Footer />
      </LandingContent>
    </LandingContainer>
  );
};

export default Landing;
