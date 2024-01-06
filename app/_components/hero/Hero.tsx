import Link from "next/link";
import {
  HeadlineContent,
  Container,
  Content,
  HeroPrimary,
  PrimaryContent,
  Subheader,
  Subtext,
  Title,
} from "./styled";
import { motion } from "framer-motion";
import { easeInOut } from "popmotion";
import { HeaderProps, HeadlineProps, HeroProps, PrimaryProps } from "./types";

const Hero = ({ asset, primaryProps }: HeroProps) => (
  <Container>
    <Content>
      <Primary {...primaryProps} />
      {asset}
    </Content>
  </Container>
);

const Primary = ({ title, subheader, description }: PrimaryProps) => {
  return (
    <HeroPrimary>
      <PrimaryContent>
        <Header title={title} subheader={subheader} />
        <Description description={description} />
      </PrimaryContent>
    </HeroPrimary>
  );
};

const Header = ({ title, subheader }: HeaderProps) => (
  <div>
    <Link href={"/"} className="no-underline">
      <Title>{title}</Title>
    </Link>
    <Subheader>{subheader}</Subheader>
  </div>
);

const Description = ({ description }: { description: string }) => (
  <motion.div
    className="z-20 flex"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 1.8, ease: "easeInOut" }}
  >
    <Subtext subtext={description} />
  </motion.div>
);

export default Hero;
