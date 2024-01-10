import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import gsap from 'gsap'
import './styles/App.scss'

// Component
import Header from './components/header'
import Navigation from './components/navigation'

// pages
import Home from './pages/home'
import CaseStudies from './pages/case-studies'
import Approach from './pages/approach'
import Services from './pages/services'
import About from './pages/about'
import Project from './pages/project'

// routes
const routes = [
	{ path: '/', name: 'Home', Component: Home },
	{
		path: '/case-studies',
		name: 'Case Studies',
		Component: CaseStudies,
	},
	{ path: '/approach', name: 'Approach', Component: Approach },
	{ path: '/services', name: 'Services', Component: Services },
	{ path: '/about-me', name: 'About Us', Component: About },
	{ path: '/project/:name', name: 'Project', Component: Project },
]

function debounce(fn, ms) {
	let timer
	return () => {
		clearTimeout(timer)
		timer = setTimeout(() => {
			timer = null
			fn.apply(this, arguments)
		}, ms)
	}
}

function App() {
	// prevents flashing
	gsap.to('body', 0, { css: { visibility: 'visible' } })

	const [dimensions, setDimensions] = useState({
		height: window.innerHeight,
		width: window.innerWidth,
	})
	useEffect(() => {
		let vh = dimensions.height * 0.01
		document.documentElement.style.setProperty('--vh', `${vh}px`)

		const debounceHandleResize = debounce(function handleResize() {
			setDimensions({
				height: window.innerHeight,
				width: window.innerWidth,
			})
		}, 1000)

		window.addEventListener('resize', debounceHandleResize)

		return () => {
			window.removeEventListener('resize', debounceHandleResize)
		}
	}, [dimensions.height])
	return (
		<>
			<Header dimensions={dimensions} />
			<div className='App'>
				{routes.map(({ path, Component }) => (
					<Route
						key={path}
						exact
						path={path}>
						<Component />
					</Route>
				))}
			</div>
			<Navigation />
		</>
	)
}

export default App
