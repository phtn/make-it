export interface KerriganData {
  id: number;
  title: string;
  subtext: string;
  description: string;
}

export type KerriganProps = {
  title: string;
  description: string;
  data?: KerriganData[];
  listTitle?: string;
};

export type KerriganListProps = {
  data: KerriganData | undefined;
  title: string;
};
