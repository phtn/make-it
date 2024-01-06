import { Title } from "../title/title";
import {
  GridContainer,
  LinkItem,
  LinkText,
  PrimaryContent,
  PrimaryDetails,
  SecondaryContent,
  TertiaryContent,
} from "./styled";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";

const Footer = () => {
  return (
    <GridContainer>
      <Primary />
      <Secondary />
      <Tertiary />
    </GridContainer>
  );
};

const Primary = () => (
  <PrimaryContent>
    <PrimaryDetails>
      <Title title="Make It In Australia" />
    </PrimaryDetails>
  </PrimaryContent>
);

const Secondary = () => (
  <SecondaryContent>
    <div className="h-[72] flex flex-col">
      <LinkItem href={"/benefits-of-a-mentee"}>
        <LinkText>Benefits of a Mentee</LinkText>
      </LinkItem>
      <LinkItem href={"/meet-a-mentor"}>
        <LinkText>Meet a Mentor</LinkText>
      </LinkItem>
      <LinkItem href={"/join-a-class"}>
        <LinkText>Join a Class</LinkText>
      </LinkItem>
      <LinkItem href={"/contact-us"}>
        <LinkText>Contact Us</LinkText>
      </LinkItem>
      <LinkItem href={"/benefits-of-a-mentee"}>
        <LinkText>Be a Mentee for Free</LinkText>
      </LinkItem>
      <LinkItem href={"/"}>
        <LinkText>Privacy Policy</LinkText>
      </LinkItem>
    </div>
  </SecondaryContent>
);

const Tertiary = () => (
  <div className="flex flex-col">
    <TertiaryContent>
      <FacebookIcon className="h-8 w-8 text-white" />
      <InstagramIcon className="h-8 w-8 text-white" />
      <TwitterIcon className="h-8 w-8 text-white" />
    </TertiaryContent>
    <div className="h-[96px] md:w-[375px] w-screen flex flex-col justify-center items-center">
      <div className="text-cyan-50 font-bold text-[.95rem]">
        Thanks for visiting.
      </div>
      <div className="text-background/[30%] text-[.90rem] leading-[.85rem] font-sans font-light">
        Stay awesome.
      </div>
    </div>
    <div className="h-[200px] w-screen md:w-[375px] flex items-center justify-evenly">
      <div
        className={`h-[80px] w-[80px] bg-[url('/images/kangaroo-sign-v1.svg')] bg-contain bg-no-repeat`}
      />
      <div
        className={`h-[80px] w-[80px] bg-[url('/images/australian-owned-v2.png')] bg-contain bg-no-repeat`}
      />
    </div>
    <div className="h-fit w-screen md:w-[375px] py-2 flex flex-col justify-center items-center font-sans font-light">
      <div className="text-background/30 text-[12px]">
        &copy; {new Date().getFullYear()} Make It In Australia PH &middot; All
        Rights Reserved.
      </div>
    </div>
  </div>
);
export default Footer;
