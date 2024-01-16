import tw from "tailwind-styled-components";

const Content = tw.div`
  justify-center z-20 h-fit xl:h-screen
  grid grid-cols-1 xl:grid-cols-2
`;

const PrimaryWrap = tw.div`
  flex items-center justify-center sm:pb-16 pt-24 sm:pt-14 
  h-[500px] sm:h-[600px] md:h-[700px] lg:h-screen 
  bg-transparent/20
`;

const PrimaryContent = tw.div`
  flex flex-col items-center px-8 z-40  
  h-fit md:h-[350px] md:w-[350px]
`;

export { Content, PrimaryContent, PrimaryWrap };
