import { PointerEvent, ReactNode } from "react";
import { Children } from "@/app/types";
import {
  BrandSub,
  BrandTitle,
  ContentInner,
  MenuContent,
  MenuTrigger,
  TopWrap,
  PrimarySet,
  SecondarySet,
  PanelButton,
  HomepageIcon,
  SubPanelWrap,
  FAQsIcon,
  TestimonialsIcon,
  NewsletIcon,
} from "./styled";
import { usePathname } from "next/navigation";
import { Hover } from "./hover";

export const Trigger = () => {
  const pathName = usePathname();
  const onPointerEvent = (e: PointerEvent<HTMLButtonElement>) =>
    e.preventDefault();
  return (
    <MenuTrigger onPointerMove={onPointerEvent} onPointerLeave={onPointerEvent}>
      <BrandTitle $pathName={pathName}>Make it in Australia</BrandTitle>
      <BrandSub $pathName={pathName}>PH</BrandSub>
    </MenuTrigger>
  );
};

export const BrandMenuContent = ({ children }: Children) => {
  return (
    <MenuContent>
      <ContentInner>{children}</ContentInner>
    </MenuContent>
  );
};

export const TopSection = () => (
  <TopWrap>
    <PrimarySet />
    <SecondarySet />
  </TopWrap>
);

export const HomeButton = () => {
  return (
    <PanelButton href={"/"}>
      <HomepageIcon />
    </PanelButton>
  );
};

export const FAQsButton = () => {
  return (
    <PanelButton href={"/faqs"}>
      <FAQsIcon />
    </PanelButton>
  );
};

export const TestiButton = () => {
  return (
    <PanelButton href={"/testimonials"}>
      <TestimonialsIcon />
    </PanelButton>
  );
};

export const NewsletButton = () => {
  return (
    <PanelButton href={"/newsletter"}>
      <NewsletIcon />
    </PanelButton>
  );
};

export type PanelItem = {
  desc: string;
  name: string;
  trig: ReactNode;
};

const panel: PanelItem[] = [
  { name: "Home", desc: "Back to home.", trig: HomeButton() },
  { name: "FAQs", desc: "Your questions answered.", trig: FAQsButton() },
  { name: "Testimonials", desc: "Read our testimonials.", trig: TestiButton() },
  { name: "Newsletter", desc: "Stay updated!", trig: NewsletButton() },
];

export const SubPanel = () => {
  return (
    <SubPanelWrap>
      {panel.map(({ name, desc, trig }) => (
        <Hover key={name} name={name} desc={desc} trig={trig} />
      ))}
    </SubPanelWrap>
  );
};
