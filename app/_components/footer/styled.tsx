import Link from "next/link";
import tw from "tailwind-styled-components";

const GridContainer = tw.div`
  h-fit pb-1 md:h-[450px] bg-slate-800 dark:bg-background md:grid md:grid-cols-3 
`;

const PrimaryContent = tw.div`
  flex flex-col,
`;

const PrimaryDetails = tw.div`
  w-fit
`;

const SecondaryContent = tw.div`
  flex flex-col items-start justify-center md:items-center md:justify-start p-3 
`;

const LinkItem = tw(Link)`
  py-2 no-underline hover:underline hover:underline-offset-4
`;

const LinkText = tw.span`
  text-white font-bold
`;

const TertiaryContent = tw.div`
  md:grid grid-cols-3 flex items-center justify-around md:justify-center h-[100px] p-3 md:border-0 border-b-[0.33px] border-sky-300/20 
`;

export {
  GridContainer,
  LinkItem,
  LinkText,
  PrimaryContent,
  PrimaryDetails,
  SecondaryContent,
  TertiaryContent,
};
