import Link from "next/link";
import { Header, HeaderGap } from "../header";
import { Container, ListItem, ListItemImage, GridContainer } from "./styled";
import { FeatureProps, Props } from "./types";

const GenericList = ({ data, renderItem }: Props) => (
  <GridContainer>
    {data.map((item) => (
      <div key={item.id} className="h-fit">
        {renderItem(item)}
      </div>
    ))}
  </GridContainer>
);

export const FourFeatures = ({ header, data }: FeatureProps) => (
  <Container>
    <Header {...header} />
    <HeaderGap />
    <GenericList
      data={data}
      renderItem={(item) => <ListItem key={item.id} {...item} />}
    />
  </Container>
);

export const FourFeatureImage = ({ header, data }: FeatureProps) => (
  <Container>
    <Header {...header} />
    <HeaderGap />
    <GenericList
      data={data}
      renderItem={(item) => <ListItemImage key={item.id} {...item} />}
    />
  </Container>
);
