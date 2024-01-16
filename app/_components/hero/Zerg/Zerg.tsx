import { PrimaryProps } from "../types";
import { Card } from "@/components/ui/card";
import { Container } from "../common";
import { Content, PrimaryContent, PrimaryWrap } from "./styled";

type ZergProps = {
  asset: any;
  primaryProps: any;
};

const Primary = ({ title, subheader }: PrimaryProps) => {
  return (
    <PrimaryWrap>
      <PrimaryContent>
        <Card>Mesh</Card>
      </PrimaryContent>
    </PrimaryWrap>
  );
};

export const Zerg = ({ asset, primaryProps }: ZergProps) => (
  <Container>
    <Content>
      <Primary {...primaryProps} />
      {asset}
    </Content>
  </Container>
);
