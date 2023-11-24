import Lottie from 'lottie-react'
import AboutLottie from '../../../public/lottie/about.json'
import LandingLottie from '../../../public/lottie/network.json'
import PeopleV2Lottie from '../../../public/lottie/people-v2.json'
import ListLoader from '../../../public/lottie/list-loader.json'
import Search from '../../../public/lottie/blue-search.json'
import Sydney from '../../../public/lottie/sydney.json'

const AboutAsset = () => <Lottie animationData={AboutLottie} />
const LandingAsset = () => <Lottie animationData={LandingLottie} />
const MeetAsset = () => <Lottie animationData={PeopleV2Lottie} />
const ListAsset = () => <Lottie animationData={ListLoader} />
const SearchAsset = () => <Lottie animationData={Search} />
const SydneyAsset = () => (
	<Lottie
		loop={false}
		animationData={Sydney}
	/>
)

export {
	AboutAsset,
	LandingAsset,
	MeetAsset,
	ListAsset,
	SearchAsset,
	SydneyAsset,
}
