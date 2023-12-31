import Link from "next/link";
import {
  Container,
  PrimaryContent,
  TerranContent,
  SubheaderXL,
  TerranPrimary,
} from "./styled";
import { HeaderProps, HeroProps, PrimaryProps } from "./types";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { Title } from "../title/title";

export const Terran = ({ asset, primaryProps }: HeroProps) => (
  <Container>
    <TerranContent>
      <Primary {...primaryProps} />
      {asset}
    </TerranContent>
  </Container>
);

const Primary = ({ title, subheader }: PrimaryProps) => {
  return (
    <TerranPrimary>
      <PrimaryContent>
        <Header title={title} subheader={subheader} />
      </PrimaryContent>
    </TerranPrimary>
  );
};

const Action = () => (
  <div className="flex items-center">
    <Button variant="secondary" size="lg" className="w-[250px]">
      <div className="flex items-center">
        <span>Sign up</span>
        <ArrowUpRight className="h-[24px] w-[24px] ml-3 mt-[2px]" />
      </div>
    </Button>
  </div>
);

const Header = ({ subheader, title }: HeaderProps) => (
  <div>
    <Link href={"/"} className="no-underline">
      <Title dark title={title} />
    </Link>
    <div className="flex items-center justify-center">
      <SubheaderXL>
        {subheader} <Action />
      </SubheaderXL>
    </div>
  </div>
);
