import tw from "tailwind-styled-components";

const Wrap = tw.div`
  py-6 px-6 md:px-0 w-screen md:w-[350px] 
  font-sans font-extrabold
  text-[2.5rem] leading-[2.75rem]
  md:text-[3.8rem] md:leading-[4.2rem] 
  text-center tracking-tight
`;

const Text = tw.div<{ $dark?: boolean }>`
  ${(p) =>
    p.$dark ? `bg-[url('/bg/meteor-v2.svg')]` : `bg-[url('/bg/meteor-v1.svg')]`}
  text-transparent bg-clip-text bg-cover
`;

type TitleProps = {
  dark?: boolean;
  title: string;
};

export const Title = ({ dark, title }: TitleProps) => (
  <Wrap>
    <Text $dark={dark}>{title}</Text>
  </Wrap>
);
