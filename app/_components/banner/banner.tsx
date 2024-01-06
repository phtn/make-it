import {
  Cell,
  Container,
  Primary,
  PrimaryAction,
  SecondaryAction,
} from "./styled";
import { BannerProps } from "./types";

const Banner = (props: BannerProps) => {
  const { title, description, primaryAction, secondaryAction } = props;
  return (
    <Container>
      <Primary title={title} description={description} />
      <Cell>
        <PrimaryAction {...primaryAction} />
        <SecondaryAction {...secondaryAction} />
      </Cell>
    </Container>
  );
};

export default Banner;
