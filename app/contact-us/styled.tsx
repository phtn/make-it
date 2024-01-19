import tw from "tailwind-styled-components";

const Container = tw.div`
  md:h-screen
  h-fit
  overflow-scroll
  z-20
`;
const Content = tw.div`
  flex-col
  w-full
  h-screen
  bg-gradient-to-tl
  from-[#54c8e8]/95
  to-[##FEF7E4]/70
  transition-colors
  duration-1000
  overflow-hidden
  absolute 
  top-0
  z-30
`;

export { Container, Content };
