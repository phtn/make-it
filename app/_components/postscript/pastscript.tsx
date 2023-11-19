import DownloadLinks from '../download-links'
import { Header, HeaderGap } from '../header'
import {
	Col,
	GridContainer,
	Headline,
	LinksContainer,
	PastColumn,
	PastHeadline,
	PastPrimaryContent,
	PhoneBig,
	PhoneSmall,
	Photo,
	PrimaryContent,
	Row,
	Subtext,
} from './styled'
import { ContentProps, ScriptProps } from './types'

const PastScript = ({ content, src }: ScriptProps) => (
	<div>
		<GridContainer>
			<Secondary src={src} />
			<Primary {...content} />
		</GridContainer>
	</div>
)

const Primary = ({ title, description }: ContentProps) => (
	<PastPrimaryContent>
		<PastHeadline>{title}</PastHeadline>
		<Subtext description={description} />
		<div className='w-full flex mt-10'>
			<LinksContainer></LinksContainer>
		</div>
	</PastPrimaryContent>
)

const Secondary = ({ src }: { src: string }) => (
	<PastColumn>
		<Row>
			<Photo
				alt={src}
				src={src}
				height={400}
				width={400}
			/>
		</Row>
	</PastColumn>
)

export default PastScript
