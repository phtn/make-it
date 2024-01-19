import Link from "next/link";
import {
  Container,
  PrimaryContent,
  TerranContent,
  SubheaderXL,
} from "../common";
import { HeaderProps, HeroProps, PrimaryProps } from "../types";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { Title } from "@@components/title";
import { ReactElement } from "react";
import { TerraPrimary } from "./styled";

export const Terra = ({ asset, primaryProps }: HeroProps) => (
  <Container>
    <TerranContent>
      <Primary {...primaryProps} />
      <Secondary asset={asset} />
    </TerranContent>
  </Container>
);

const Primary = ({ title, subheader }: PrimaryProps) => {
  return (
    <TerraPrimary>
      <PrimaryContent>
        <Header title={title} subheader={subheader} />
      </PrimaryContent>
    </TerraPrimary>
  );
};

const Secondary = ({ asset }: { asset: ReactElement }) => {
  return (
    <div className="md:h-screen h-fit flex items-center justify-center md:justify-start">
      {asset}
    </div>
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
  <div className="mt-[-175px] md:mt-0">
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
