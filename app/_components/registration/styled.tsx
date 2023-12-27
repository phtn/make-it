import tw from 'tailwind-styled-components'

const HeaderTitle = tw.span`
  text-slate-100 font-sans font-extrabold text-[1rem] leading-[1rem]
`
const HeaderContainer = tw.div`
  rounded bg-[url('/bg/meteor-v3.svg')] bg-cover h-16 p-3 mb-3 flex items-center justify-center
`

const Header = () => (
	<>
		<HeaderContainer>
			<HeaderTitle>Get Started.</HeaderTitle>
		</HeaderContainer>
	</>
)

export { Header }
