import React from 'react'
import { ReactComponent as CasesNext } from '../assets/arrow-right.svg'
import { ReactComponent as CasesPrev } from '../assets/arrow-left.svg'
import { data } from '../assets/data/project'

const Cases = () => {
	return (
		<section className='cases'>
			<div className='container-fluid'>
				<div className='cases-navigation'>
					<div className='cases-arrow prev disabled'>
						<CasesPrev />
					</div>
					<div className='cases-arrow next'>
						<CasesNext />
					</div>
				</div>
				<div className='row'>
					{data.map((caseItem) => (
						<a
							href={`/project/${caseItem.slug}`}
							className='case'
							key={caseItem.id}>
							<div className='case-details'>
								<span>{caseItem.category}</span>
								<h2>{caseItem.title}</h2>
							</div>
							<div className='case-image'>
								<img
									src={require(`../assets/data/img/${caseItem.image}`)}
									alt={caseItem.title}
								/>
							</div>
						</a>
					))}
				</div>
			</div>
		</section>
	)
}

export default Cases
