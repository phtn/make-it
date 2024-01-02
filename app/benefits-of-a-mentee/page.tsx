'use client'
import { HeadlineData } from '@/app/_components/hero/types'
import { Container, Content } from '@/app/benefits-of-a-mentee/styled'
import dynamic from 'next/dynamic'
import Terran from '../_components/hero/Terran'
import {onSuccess, onInfo} from '../_utils/helpers'

const GodRays = dynamic(() => import('../_components/godrays'))
const Banner = dynamic(() => import('../_components/banner'))
const Highlight = dynamic(() => import('../_components/highlight'))
const Footer = dynamic(() => import('../_components/footer'))

const headlines: HeadlineData[] = [
	{ id: 1, name: '', headline: 'Collaborate' },
	{ id: 2, name: '', headline: 'Explore' },
	{ id: 3, name: '', headline: 'Learn' },
]

const heroProps = {
	title: 'Benefits of a Mentee',
	subheader: 'Get ahead on your goals!',
	description: `Where Lifelong Connections Are Forged. With a Team of Passionate Mentors, and Thought Leaders.`,
	headlines,
}
const hightlightHeader = { tag: 'Hire', title: 'Meet the Mentors' }

const BenefitsOfAMentee = function () {
  const onClickPrimary = () => {
    onSuccess(`You're hiring a mentor!`);
  };
  const onClickSecondary = () => {
    onInfo(`You're hiring a mentor!`);
  };
  const primaryAction = {
    label: "Hire a mentor",
    onClick: onClickPrimary,
  };
  const secondaryAction = {
    label: "Login",
    onClick: onClickSecondary,
  };

  return (
    <Container>
      <GodRays />
      <Content>
        <Terran asset={<></>} primaryProps={heroProps} />
        <Banner
          title="Hire a mentor today!"
          description={`Your journey begins here.`}
          primaryAction={primaryAction}
          secondaryAction={secondaryAction}
        />
        <Highlight header={hightlightHeader} />
        <Footer />
      </Content>
    </Container>
  );
};

export default BenefitsOfAMentee;
