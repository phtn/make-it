import DownloadLinks from '../download-links'
import { Header, HeaderGap } from '../header'
import { HeaderProps } from '../header/header'
import {
	Col,
	GridContainer,
	Headline,
	LinksContainer,
	PhoneBig,
	PhoneSmall,
	Photo,
	PrimaryContent,
	Row,
	Subtext,
} from './styled'
import { ContentProps, ScriptProps } from './types'

const PostScript = ({ content, src }: ScriptProps) => (
	<div>
		<GridContainer>
			<Primary {...content} />
			<Secondary src={src} />
		</GridContainer>
	</div>
)

const Primary = ({ title, description }: ContentProps) => (
	<PrimaryContent>
		<Headline>{title}</Headline>
		<Subtext description={description} />
		<div className='w-full flex mt-10'>
			<LinksContainer></LinksContainer>
		</div>
	</PrimaryContent>
)

const Secondary = ({ src }: { src: string }) => (
	<Col>
		<Row>
			<Photo
				alt={src}
				src={src}
				height={400}
				width={400}
			/>
		</Row>
	</Col>
)

export default PostScript
