import { Header, HeaderGap } from "../header";
import { Container, Item, GridContainer } from "./styled";
import { ItemProps } from "./types";
import { membership } from "./pricing-data";

const pricingHeader = { tag: "select", title: "Membership" };

export const Pricing = () => (
  <Container>
    <Header {...pricingHeader} />
    <HeaderGap />
    <GridContainer>
      {membership.map((item: ItemProps) => (
        <Item key={item.id} {...item} />
      ))}
    </GridContainer>
  </Container>
);
