import tw from "tailwind-styled-components"

const Wrap = tw.div`
  font-sans py-6 font-extrabold w-fit
  text-[3.5rem] leading-[3rem] md:w-[350px]
  md:text-[4rem] md:leading-[3.1rem] text-center tracking-tight
`

const Text = tw.div<{$dark?: boolean}>`
  ${(p) => (p.$dark ? `bg-[url('/bg/meteor-v2.svg')]` : `bg-[url('/bg/meteor-v1.svg')]`)}
  text-transparent bg-clip-text bg-cover
`
// bg-[url('/bg/meteor-v2.svg')]

type TitleProps = {
  dark?: boolean 
  title: string
}

export const Title = ({dark, title}: TitleProps) => (
  <Wrap>
  <Text $dark={dark}>{title}</Text>
  </Wrap>
) 

