import { ReactNode } from "react";
import { HeaderProps } from "../header/header";

interface Item {
  id: number;
  href: string;
  title: string;
  description: string;
  src: string;
}

type FeatureProps = {
  header: HeaderProps;
  data: Item[];
};

type Props = {
  data: Item[];
  renderItem: (item: Item) => ReactNode;
};

type LinkProps = {
  id: number;
  href: string;
  props: Item;
};

export type { Props, Item, FeatureProps, LinkProps };
