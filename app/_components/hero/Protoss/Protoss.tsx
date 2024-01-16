import {
  Container,
  Content,
  PrimaryWrap,
  PrimaryContent,
  Subheader,
  ProtosSecondary,
} from "../common";
import { HeaderProps, HeroProps, PrimaryProps } from "../types";
import { Title } from "@@components/title";
import { ReactElement } from "react";

export const Protoss = ({ asset, primaryProps }: HeroProps) => (
  <Container>
    <Content>
      <Primary {...primaryProps} />
      <Secondary asset={asset} />
    </Content>
  </Container>
);

const Primary = ({ title, subheader }: PrimaryProps) => {
  return (
    <PrimaryWrap>
      <PrimaryContent>
        <Header title={title} subheader={subheader} />
      </PrimaryContent>
    </PrimaryWrap>
  );
};

const Header = ({ subheader, title }: HeaderProps) => (
  <div>
    <Title dark title={title} />
    <div className="flex items-center justify-center">
      <Subheader>{subheader}</Subheader>
    </div>
  </div>
);

const Secondary = ({ asset }: { asset: ReactElement }) => (
  <ProtosSecondary>{asset}</ProtosSecondary>
);
