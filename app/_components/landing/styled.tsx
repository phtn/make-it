import Image from "next/image";
import tw from "tailwind-styled-components";
import styled from "styled-components";

const LandingContainer = tw.div`
  flex-col
  w-full
  bg-[url('/bg/sydney-wall.webp')] bg-cover
  overflow-hidden
  absolute 
  top-0
  z-30
`;

const LandingContent = tw.div`
  bg-gradient-to-br
  from-transparent
  to-background/50
  overflow-y-scroll
  overflow-x-hidden
  h-screen
`;

const StyledImage = styled(Image)``;

const WendelImage = tw(StyledImage)`
  h-auto mb-3 md:mb-0 md:w-[450px] border-[8px] border-background/80 
  dark:border-accent/50 rounded-3xl shadow-[10px_15px_20px_4px_#00000024]
`;

export { LandingContent, LandingContainer, WendelImage };
