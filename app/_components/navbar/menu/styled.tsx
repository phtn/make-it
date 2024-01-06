import Link from "next/link";
import tw from "tailwind-styled-components";
import { ContainerProps } from "./types";

const Container = tw.div`
  hidden lg:flex items-center justify-center
`;

const ItemContainer = tw.div<ContainerProps>`
  ${(p) =>
    p.$index === 4
      ? `bg-gradient-to-tr from-sky-600 via-sky-500 to-cyan-500 text-slate-800 hover:text-background font-bold`
      : `text-background hover:text-primary-foreground`}
  mx-2 px-3 py-1 text-[11px] tracking-widest font-sans font-bold 
	dark:text-foreground dark:hover:text-primary-foreground hover:bg-slate-800
  transition-all duration-500 uppercase rounded
`;

const LogoImage = tw.div`
	bg-[url('/logo/logo-v1.svg')] bg-center bg-no-repeat 
	h-[36px] w-[36px] z-20
`;
const LogoHomelink = tw(Link)`
	no-underline ml-10 
`;

export { Container, ItemContainer };
