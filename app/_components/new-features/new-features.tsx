import Link from "next/link";
import { Header, HeaderGap } from "../header";
import { Container, ListItem, GridContainer } from "./styled";
import { FeatureProps, Props } from "./types";

const NewFeatures = ({ header, data }: FeatureProps) => (
  <Container>
    <Header {...header} />
    <HeaderGap />
    <GenericList
      data={data}
      renderItem={(item) => (
        <Link className="no-underline" href={item.href} key={item.id}>
          <ListItem {...item} />
        </Link>
      )}
    />
  </Container>
);

const GenericList = ({ data, renderItem }: Props) => (
  <GridContainer>
    {data.map((item) => (
      <div key={item.id} className="h-fit">
        {renderItem(item)}
      </div>
    ))}
  </GridContainer>
);

export default NewFeatures;
