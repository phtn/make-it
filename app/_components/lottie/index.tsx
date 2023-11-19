import AboutLottie from '../../../public/lottie/about.json'
import LandingLottie from '../../../public/lottie/network.json'
import PeopleV2Lottie from '../../../public/lottie/people-v2.json'
import Lottie from 'lottie-react'

const AboutAsset = () => <Lottie animationData={AboutLottie} />
const LandingAsset = () => <Lottie animationData={LandingLottie} />
const MeetAsset = () => <Lottie animationData={PeopleV2Lottie} />

export { AboutAsset, LandingAsset, MeetAsset }
