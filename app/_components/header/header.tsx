import tw from "tailwind-styled-components";

const HeaderContainer = tw.div`
  w-full h-fit flex items-center justify-center
`;

const HeaderContent = tw.div`
  w-fit flex flex-col items-center justify-center h-full
`;

const HeaderTagContainer = tw.div`
  bg-primary-foreground h-8 w-[150px] px-3
  flex items-center justify-center rounded-[2px]
  shadow-xl shadow-primary-foreground/30
`;

const HeaderTag = tw.h2`
  text-slate-800 font-extrabold text-[0.64rem] 
  uppercase tracking-[2.5px]
`;

const HeaderTitleContainer = tw.div`
  h-[120px] flex items-center justify-center
`;

const HeaderTitle = tw.h2`
  text-[2rem] sm:text-[2.5rem] font-light text-foreground dark:text-background
`;

const HeaderSeparator = tw.div`
  w-[140px] border-b-4 rounded-full border-[#54c8e8]/70
`;

export type HeaderProps = {
  tag: string;
  title: string;
};

export const Header = ({ tag, title }: HeaderProps) => (
  <HeaderContainer>
    <HeaderContent>
      <HeaderTagContainer>
        <HeaderTag>{tag}</HeaderTag>
      </HeaderTagContainer>
      <HeaderTitleContainer>
        <HeaderTitle>{title}</HeaderTitle>
      </HeaderTitleContainer>
      <HeaderSeparator />
    </HeaderContent>
  </HeaderContainer>
);

export const HeaderGap = tw.div`
  h-[75px]
`;
