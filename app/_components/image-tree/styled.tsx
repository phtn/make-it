import tw from "tailwind-styled-components";

const Container = tw.div`
  grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 
  mt-[100px] md:mt-0
`;

const Collage = tw.div`
  flex items-center justify-center 
  col-span-3 py-24 xl:pb-0
`;

const MakeIt = tw.div`
  flex items-center justify-center h-[100px] w-screen 
  md:h-[100px] md:w-[calc(100vw/4)] md:relative md:top-[-120px] 
  mb-[10px] z-50 bg-[url('/svg/makeit-v3.svg')] bg-cover
`;

export { Container, Collage, MakeIt };
