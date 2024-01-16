import { ReactNode } from "react";
import { HeaderProps } from "../header/header";

interface FourItem {
  id: number;
  title: string;
  description: string;
  src: string;
}

type FeatureProps = {
  header: HeaderProps;
  data: FourItem[];
};

type Props = {
  data: FourItem[];
  renderItem: (item: FourItem) => ReactNode;
};

type LinkProps = {
  id: number;
  href: string;
  props: FourItem;
};

export type { Props, FourItem, FeatureProps, LinkProps };
