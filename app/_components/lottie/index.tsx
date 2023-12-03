import { LottieOptions, useLottie } from 'lottie-react'
import About from '../../../public/lottie/about.json'
import Mentee from '../../../public/lottie/network.json'
import PeopleV2 from '../../../public/lottie/people-v2.json'
import ListLoader from '../../../public/lottie/list-loader.json'
import Search from '../../../public/lottie/blue-search.json'
import Sydney from '../../../public/lottie/sydney.json'
import { useMemo } from 'react'

// const AboutAsset = () => <Lottie animationData={AboutLottie} />
// const MenteeAsset = () => <Lottie animationData={MenteeLottie} />
// const MeetAsset = () => <Lottie animationData={PeopleV2Lottie} />
// const ListAsset = () => <Lottie animationData={ListLoader} />
// const SearchAsset = () => <Lottie animationData={Search} />
// const SydneyAsset = () => (
// 	<Lottie
// 		loop={false}
// 		animationData={Sydney}
// 	/>
// )

const LottFile = (props: Partial<LottieOptions>) => {
	const { animationData, loop, autoplay, style } = props
	const options = useMemo(
		() => ({
			animationData,
			loop: loop ?? true,
			autoplay: autoplay ?? true,
		}),
		[animationData, loop, autoplay]
	)

	const { View } = useLottie(options, style ? style : {})

	return View
}

export { LottFile, Sydney, About, Mentee, PeopleV2, ListLoader, Search }
