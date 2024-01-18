import { PointerEvent } from "react";
import {
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  ArrowUpRight,
  BookOpenCheckIcon,
  HomeIcon,
  LibraryBig,
  Newspaper,
  QuoteIcon,
  Users2,
} from "lucide-react";
import tw from "tailwind-styled-components";
import { TertiaryDetail, TertiaryProps } from "./types";
import { cn } from "@/lib/utils";
import Link from "next/link";

const IconContainer = tw.div`
  rounded-full bg-slate-200/10 border-slate-100 
	flex items-center justify-center h-[32px] w-[32px] 
	group-hover:h-[24px] group-hover:w-[24px] 
	group-hover:bg-slate-400/30
	transition-all duration-500
`;

const PrimaryIcon = () => (
  <IconContainer>
    <LibraryBig className="h-[16px] w-[16px] text-slate-100/50 group-hover:text-white group-hover:h-[14px] group-hover:w-[14px] transition-all duration-500 delay-200" />
  </IconContainer>
);

const PrimaryIndex = tw.span`
  font-mono font-thin text-slate-200/50 text-[2rem] leading-[2rem]
	group-hover:scale-0 transition-all duration-500
`;

const PrimaryTopContainer = tw.div`
  flex justify-between items-center w-[140px]
	
`;

const PrimaryTop = () => (
  <PrimaryTopContainer>
    <PrimaryIndex>01</PrimaryIndex>
    <PrimaryIcon />
  </PrimaryTopContainer>
);

const PrimaryTitle = tw.span`
	text-slate-50 text-[1rem] 
	group-hover:text-background group-hover:text-[0.95rem]
	pl-2 border-l-4 border-slate-200/50
	group-hover:border-[#54c8e8]
	relative top-[48px] group-hover:top-[-32px]
	transition-all duration-500
	leading-[0.90rem] group-hover:leading-[0.85rem]
	font-extrabold font-sans w-[120px]
`;

const PrimarySubtext = tw.div`
	font-sans font-medium text-[11px] text-white
	scale-0 h-0 bg-[#54c8e8] mt-10 flex 
	flex-row items-center justify-center 
	rounded-md w-full py-1
	group-hover:text-slate-800 group-hover:scale-100 
	group-hover:h-6 transition-all duration-300
`;

const PrimaryDetails = tw.div`
	flex flex-col
`;

const PrimaryContent = () => (
  <PrimaryDetails>
    <PrimaryTitle>About Our Company</PrimaryTitle>
    <PrimarySubtext>
      <span>What we&apos;re all about.</span>

      <ArrowUpRight className="ml-1 h-[14px] w-[14px] text-[#54c8e8] group-hover:text-white group-hover:stroke-[2px] transition-all duration-300 delay-700" />
    </PrimarySubtext>
  </PrimaryDetails>
);

const PrimaryInner = tw.div`
	flex flex-col items-stretch justify-between rounded-lg
	relative top-[-140px] backdrop-blur-[10px] bg-sky-500 
	group-hover:backdrop-blur-[0px] group-hover:bg-transparent
	h-[140px] transition-all duration-700
`;

const PrimaryOuter = tw.div`
	w-[160px] h-[140px] rounded-lg overflow-hidden 
`;

const Content = tw.div`
	m-2
`;

const PrimaryBackdrop = tw.div`
	flex w-[160px] h-[140px]
	bg-[url('/bg/sydney-v1.webp')] bg-cover
	group-hover:bg-blend-soft-light bg-blend-lighten	
	scale-150 group-hover:scale-100 
	transition-transform duration-700
`;

const LinkWrap = tw(NavigationMenuLink)`
  no-underline group rounded-lg shadow-md
`;

const PrimarySet = () => (
  <LinkWrap href="/about-the-company">
    <PrimaryOuter>
      <PrimaryBackdrop />
      <PrimaryInner>
        <Content>
          <PrimaryTop />
          <PrimaryContent />
        </Content>
      </PrimaryInner>
    </PrimaryOuter>
  </LinkWrap>
);

const SecondaryIcon = () => (
  <IconContainer>
    <Users2 className="h-[16px] w-[16px] text-slate-100/50 group-hover:text-slate-100 group-hover:h-[14px] group-hover:w-[14px] delay-100 transition-all duration-500 " />
  </IconContainer>
);

const SecondaryIndex = tw.span`
  font-mono font-thin text-slate-400/50 text-[2rem] leading-[2rem]
	group-hover:scale-0 transition-all duration-500
`;

const SecondaryTopContainer = tw.div`
  flex justify-between items-center w-[140px]
`;

const SecondaryTop = () => (
  <SecondaryTopContainer>
    <SecondaryIndex>02</SecondaryIndex>
    <SecondaryIcon />
  </SecondaryTopContainer>
);

const SecondaryTitle = tw.span`
	pl-2 text-sky-100 dark:text-foreground text-[1rem] 
	group-hover:text-white group-hover:text-[0.75rem]
	group-hover:bg-slate-800/40
	border-l-4 border-slate-200/50
	group-hover:border-primary-foreground
	relative top-[48px] group-hover:top-[-32px]
	transition-all duration-500
	leading-[0.90rem] group-hover:leading-[0.65rem]
	group-hover:py-1
	font-extrabold font-sans w-[96px]
`;

const SecondarySubtext = tw.div`
	font-sans font-medium text-[11px] text-foreground
	scale-0 h-0 bg-primary-foreground mt-10 flex 
	flex-row items-center justify-center 
	rounded-md w-full py-1
	group-hover:text-slate-800 group-hover:scale-100 
	group-hover:h-6 transition-all duration-300
`;

const SecondaryDetails = tw.div`
	flex flex-col
`;

const SecondaryContent = () => (
  <SecondaryDetails>
    <SecondaryTitle>Meet Our Team</SecondaryTitle>
    <SecondarySubtext>
      With{" "}
      <span className="font-extrabold text-[1rem] text-sky-600 px-[3px]">
        60+
      </span>{" "}
      Global Teams!
    </SecondarySubtext>
  </SecondaryDetails>
);

const SecondaryOuter = tw.div`
  w-[160px] h-[140px] rounded-lg overflow-hidden 
`;

const SecondaryInner = tw.div`
	flex flex-col items-stretch justify-between rounded-lg
	relative top-[-140px] backdrop-blur-[16px] bg-indigo-600
	group-hover:backdrop-blur-[0px] group-hover:bg-transparent
	h-[140px] transition-all duration-700
`;

const SecondaryBackdrop = tw.div`
	flex w-[160px] h-[140px]
	bg-[url('/team/team-v2.webp')] bg-cover
	bg-blend-soft-light bg-opacity-5
	scale-150 group-hover:scale-100 
	transition-transform duration-700
`;

const SecondarySet = () => (
  <LinkWrap href="/meet-the-team">
    <SecondaryOuter>
      <SecondaryBackdrop />
      <SecondaryInner>
        <Content>
          <SecondaryTop />
          <SecondaryContent />
        </Content>
      </SecondaryInner>
    </SecondaryOuter>
  </LinkWrap>
);

const TopWrap = tw.div`
	h-[180px] flex items-center justify-evenly
`;

const TertiaryOuter = tw.div`
	h-[60px] flex overflow-hidden
	group-hover:rounded-lg
	bg-white transition-all duration-300
`;

const TertiaryIconContainer = tw.div`
	w-[60px] flex items-center justify-center
`;
const TertiaryContent = tw.div`
	flex flex-col w-[240px] justify-center items-stretch
`;
const TertiaryTitle = tw.div`
	flex font-sans items-end font-bold text-[1rem] leading-[1rem] text-foreground dark:text-slate-300 group-hover:dark:text-slate-800 background h-[35px]
`;
const TertiarySubtext = tw.div`
	flex font-sans items-start text-[12px] text-slate-700 dark:text-slate-400 h-[25px]
`;

const TertiaryDetails = ({ title, subtext }: TertiaryDetail) => (
  <TertiaryContent>
    <TertiaryTitle>{title}</TertiaryTitle>
    <TertiarySubtext>{subtext}</TertiarySubtext>
  </TertiaryContent>
);

const iconClass = `transition-all duration-500 h-4 w-4 group-hover:scale-[115%]`;

const HomepageIcon = () => (
  <TertiaryIconContainer>
    <HomeIcon className={cn(`group-hover:text-green-500`, iconClass)} />
  </TertiaryIconContainer>
);

const FAQsIcon = () => (
  <TertiaryIconContainer>
    <BookOpenCheckIcon className={cn(`group-hover:text-sky-500`, iconClass)} />
  </TertiaryIconContainer>
);

const TestimonialsIcon = () => (
  <TertiaryIconContainer>
    <QuoteIcon className={cn(`group-hover:text-indigo-500`, iconClass)} />
  </TertiaryIconContainer>
);

const NewsletIcon = () => (
  <TertiaryIconContainer>
    <Newspaper className={cn(`group-hover:text-orange-500`, iconClass)} />
  </TertiaryIconContainer>
);

const TertiaryLink = ({ href, icon, details }: TertiaryProps) => (
  <NavigationMenuLink href={href} className="no-underline group">
    <TertiaryOuter>
      {icon}
      <TertiaryDetails {...details} />
    </TertiaryOuter>
  </NavigationMenuLink>
);

const TertiaryWrapper = tw.div`
	h-[240px] grid grid-rows-4
	bg-slate-200 mx-[16px]
	rounded-lg
`;

const VStack = tw.div`
	flex flex-col
`;

const BrandTitle = tw.h1<{ $pathName: string }>`
  ${(p) =>
    p.$pathName === "/"
      ? "from-primary-foreground via-accent to-background dark:to-indigo-50"
      : "from-indigo-900 via-sky-950 to-indigo-950"}
	font-extrabold font-sans 
	tracking-tighter leading-[1rem] 
	text-transparent text-[1.5rem]
  bg-clip-text bg-gradient-to-br
`;

const BrandSub = tw.h2<{ $pathName: string }>`
  ${(p) =>
    p.$pathName === "/"
      ? "from-sky-300 to-cyan-200"
      : "from-indigo-900 to-indigo-950"}
	w-fit ml-2 text-transparent text-[20px]
	font-thin font-sans bg-clip-text bg-gradient-to-br 
`;

const MenuTrigger = tw(NavigationMenuTrigger)`
	bg-transparent w-[275px] md:w-[200px] lg:w-[240px]
`;

const MenuContent = tw(NavigationMenuContent)`
	bg-[url('/bg/space-noise-v4.svg')] bg-cover
`;
const ContentInner = tw.div`
	sm:w-[400px] w-screen
`;

const SubPanelWrap = tw.div`
  bg-gradient-to-b from-stone-500/50 from-2% via-stone-500/40 via-10% to-stone-300/30 to-100% h-[80px] flex items-center justify-evenly
`;
const PanelButton = tw(Link)`
  group border-1 border-cyan-50 bg-cyan-50 transition-all duration-300 h-[36px] w-[36px] rounded-full flex items-center justify-center
`;

export {
  BrandSub,
  BrandTitle,
  ContentInner,
  FAQsIcon,
  HomepageIcon,
  MenuContent,
  MenuTrigger,
  NewsletIcon,
  PanelButton,
  PrimarySet,
  SecondarySet,
  SubPanelWrap,
  TertiaryIconContainer,
  TertiaryLink,
  TertiaryOuter,
  TertiaryWrapper,
  TestimonialsIcon,
  TopWrap,
  VStack,
};
