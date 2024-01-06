import tw from "tailwind-styled-components";
import { Action, PrimaryCellProps } from "./types";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, LogIn } from "lucide-react";

const Container = tw.div`
  grid grid-cols-1 lg:grid-cols-2 bg-gradient-to-br from-slate-700 to-slate-900 
`;

const NewContainer = tw.div`
  grid grid-cols-1 lg:grid-cols-4 bg-gradient-to-br from-slate-700 to-slate-900 
`;

const Cell = tw.div`
  h-[100px] sm:h-[200px] flex items-center justify-center
`;

const NewCell = tw.div`
  h-[250px] sm:h-[300px] flex items-center
	col-span-3 px-10
`;

const PrimaryCell = tw.div`
  justify-center flex flex-col
`;

const Title = tw.h1`
  text-primary-foreground text-[1.5rem] sm:text-[2.25rem] font-bold font-sans
`;

const Description = tw.h3`
  text-slate-300 text-[1rem] sm:text-[1.25rem] 
	font-sans mt-[-3px] sm:mt-[-8px]
`;

const Subtext = tw.p`
  text-slate-300 text-[16px]
	font-normal font-sans mt-3 
	sm:mt-[-16px] w-[400px] md:w-[600px] 
	lg:w-[750px]
`;

const PrimaryButton = tw(Button)`
  py-1
`;

const SecondaryButton = tw(Button)`
  py-2
`;

const PrimaryAction = (props: Action) => (
  <PrimaryButton className="mr-4" variant={"tertiary"} onClick={props.onClick}>
    {props.label}
    <ArrowUpRight className="h-5 w-5 ml-3" />
  </PrimaryButton>
);
const SecondaryAction = (props: Action) => (
  <SecondaryButton variant={"outline"} onClick={props.onClick}>
    {props.label}
    <LogIn className="h-5 w-5 ml-4" />
  </SecondaryButton>
);

const Primary = ({ title, description }: PrimaryCellProps) => (
  <Cell>
    <PrimaryCell>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </PrimaryCell>
  </Cell>
);

const NewPrimary = ({ title, description }: PrimaryCellProps) => (
  <NewCell>
    <PrimaryCell>
      <Title>{title}</Title>
      <Subtext>{description}</Subtext>
    </PrimaryCell>
  </NewCell>
);

export {
  Container,
  Cell,
  NewCell,
  NewContainer,
  NewPrimary,
  Primary,
  PrimaryAction,
  SecondaryAction,
};
