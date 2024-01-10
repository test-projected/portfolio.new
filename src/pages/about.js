import { ReactComponent as RightArrow } from '../assets/arrow-right.svg'

const About = () => {
	return (
		<div className='page'>
			<div className='container'>
				<div
					className='row'
					style={{ overflowY: 'auto' }}>
					<div className='about'>
						<div className='about-left'>
							<img src='/me.jpg' />
						</div>
						<div className='about-right'>
							<div className='about-info'>
								<span>NATHAN.L — EST 2021</span>
								<h1>
									ABOUT ME .<br />
									NATHAN.L
								</h1>
								<div className='mobile-image'>
									<img src='/me.jpg' />
								</div>
								<h3>
									A High School Student who broad minded. Have a
									different and creative design ideas.
								</h3>
								<p>
									As a dedicated web developer, I specialize in
									crafting innovative solutions with a keep emphasis
									on functionality and design.
								</p>
								<p>
									Consistently striving to create visually stunning
									and aesthetically pleasing websites that captivate
									and engage users.
								</p>
								<div className='btn-row'>
									<a href='mailto:nathanlimahardja@gmail.com'>
										Email me
										<RightArrow />
									</a>
								</div>
								<p>
									If you have any exciting projects to talk about, or
									just want to be friends, feel free to hit me up.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
