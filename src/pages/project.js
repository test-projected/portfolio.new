import { useParams } from 'react-router-dom'
import { data } from '../assets/data/project'
import { ReactComponent as RightArrow } from '../assets/arrow-right.svg'
import { ReactComponent as LeftArrow } from '../assets/arrow-left.svg'

const Project = () => {
	const { name } = useParams()

	if (data.every((item) => item.slug !== name)) {
		return (
			<div className='page'>
				<div className='container'>
					<div className='row not-found'>
						<h1>
							404
							<br />
						</h1>
						<a href='/'>GO HOME.</a>
					</div>
				</div>
			</div>
		)
	}

	const {
		title,
		image,
		overview,
		description,
		category,
		services,
		link,
		personality,
		typefaces,
		completed,
	} = data.filter((item) => item.slug === name)[0]

	return (
		<div className='page'>
			<div className='container'>
				<div
					className='row'
					style={{ overflowY: 'scroll' }}>
					<div className='project'>
						<span>{category}</span>
						<h1>{title}</h1>
						<p>{description}</p>

						<img src={require(`../assets/data/img/${image}`)} />

						<div className='project-info'>
							<div className='project-overview'>
								<h2>Overview</h2>
								{overview.split('|').map((paragraph) => (
									<p>{paragraph}</p>
								))}
								<div className='project-navigation'>
									<div className='btn-viewsite'>
										<a
											href={link}
											target='_blank'>
											View online <RightArrow />
										</a>
									</div>
									<div className='btn-backhome'>
										<a href='/'>Go home.</a>
									</div>
								</div>
							</div>
							<div className='project-detail'>
								<div>
									<h2>Services</h2>
									<ul>
										{services.map((item) => (
											<li>{item}</li>
										))}
									</ul>
								</div>
								<div>
									<h2>Personality</h2>
									<ul>
										{personality.map((item) => (
											<li>{item}</li>
										))}
									</ul>
								</div>
								<div>
									<h2>Typefaces</h2>
									<ul>
										{typefaces.map((item) => (
											<li>{item}</li>
										))}
									</ul>
								</div>
								<div>
									<h2>Completed</h2>
									<ul>
										{completed.map((item) => (
											<li>{item}</li>
										))}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Project
