import { ReactElement } from "react";

interface HeadlineData {
  id: number;
  name: string;
  headline: string;
}

type HeadlineProps = {
  index: number;
  headlines: HeadlineData[];
};

type HeaderProps = {
  title: string;
  subheader: string;
};

type HeroProps = {
  asset: ReactElement;
  primaryProps: PrimaryProps;
};

type ProtosProps = {
  asset: ReactElement;
  primaryProps: PrimaryProtos;
};

type PrimaryProps = {
  title: string;
  subheader: string;
  description: string;
};

type PrimaryProtos = {
  title: string;
  subheader: string;
  description: string;
  headlines: HeadlineData[];
};

export type {
  HeadlineData,
  HeadlineProps,
  HeaderProps,
  HeroProps,
  PrimaryProps,
  PrimaryProtos,
  ProtosProps,
};
