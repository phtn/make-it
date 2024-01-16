import Image from "next/image";
import tw from "tailwind-styled-components";
import { FourItem, LinkProps } from "./types";
import Link from "next/link";

const Container = tw.div`
  h-fit w-screen flex flex-col overflow-hidden
	sm:py-44 py-24
  bg-gradient-to-bl
  from-[#FEF7E4]
  dark:from-[#c5a47b]
  to-[#AEB4EA]
	dark:to-[#4c517d]
`;

const GridContainer = tw.div`
  flex flex-col sm:grid sm:grid-cols-2 md:h-fit 
	md:grid md:grid-cols-2 lg:grid-cols-4 px-6 md:px-10 lg:px-18
`;

// Feature Item
const FeatureItemContainer = tw.div`
  flex flex-col items-center w-full h-fit
`;
const WrapCenter = tw.div`
  flex items-center justify-center
  md:py-6 py-2
`;

const IconContainer = tw.div`
  flex items-center justify-center 
  bg-[#54c8e8] rounded-full
  shadow-xl shadow-[#54c8e8]/20
  h-fit w-fit p-6
`;

const FeatureDetail = tw.div`
  px-[1.25rem] py-[2rem] items-center
`;

const FeatureTitle = tw.div`
  font-extrabold font-sans tracking-tight leading-[1.5rem]
  text-transparent bg-clip-text bg-gradient-to-t 
  from-slate-800 via-slate-700 to-accent
  dark:from-accent dark:to-foreground
	text-[1.5rem] md:text-[2rem] my-3
`;

const Description = tw.div`
  md:px-8 px-[1px]
`;
const DescriptionText = tw.h3`
  text-[1rem] text-slate-600 text-justify md:text-center 
  dark:text-cyan-50 font-normal tracking-wide
`;

const Icon = tw(Image)`
  h-8 w-8 sm:h-9 sm:w-9 md:h-16 md:w-16 
`;

const ImageContainer = tw.div<{ $id: string }>`
  rounded-full bg-cover 
  h-32 w-32

  ${(p) =>
    p.$id === 20
      ? `bg-[url('/team/rea-v1.jpg')]`
      : p.$id === 40
        ? `bg-[url('/team/rea-v1.jpg')]`
        : p.$id === 60
          ? `bg-[url('/team/rea-v1.jpg')]`
          : `bg-[url('/team/rea-v1.jpg')]`}
`;

const ListItem = (props: FourItem) => (
  <FeatureItemContainer>
    <FeatureDetail>
      <WrapCenter>
        <IconContainer>
          <Icon alt={props.title} src={props.src} height={100} width={100} />
        </IconContainer>
      </WrapCenter>
      <WrapCenter>
        <FeatureTitle>{props.title}</FeatureTitle>
      </WrapCenter>
      <WrapCenter>
        <Description>
          <DescriptionText>{props.description}</DescriptionText>
        </Description>
      </WrapCenter>
    </FeatureDetail>
  </FeatureItemContainer>
);

const ListItemImage = (props: FourItem) => (
  <FeatureItemContainer>
    <FeatureDetail>
      <WrapCenter>
        <ImageContainer $src={props.src} />
      </WrapCenter>
      <WrapCenter>
        <FeatureTitle>{props.title}</FeatureTitle>
      </WrapCenter>
      <WrapCenter>
        <Description>
          <DescriptionText>{props.description}</DescriptionText>
        </Description>
      </WrapCenter>
    </FeatureDetail>
  </FeatureItemContainer>
);

const List = ({ href, id, props }: LinkProps) => (
  <Link href={href} key={id}>
    <ListItem {...props} />
  </Link>
);

export { Container, GridContainer, ListItem, ListItemImage, List };
