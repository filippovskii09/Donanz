import React from 'react'
import './../css/pages/about.css'
import Title from '../components/elements/Title';
import aboutMainImage from './../images/pages/about/main.svg'
import achievementImage from './../images/pages/about/achieventImage.svg'
import Footer from '../components/Footer';

	function About() {
	return (
		<>
			<main className="page">
				<section className="about-page__main about-main">
					<div className="about-main__container container">
						<Title>About</Title>
						<p className="about-main__text about-text">
						It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
						</p>
						<div className="about-main__image">
							<img src={aboutMainImage} alt="" />
						</div>
					</div>
				</section>
				<section className="about-page__achievement achievement">
					<div className="achievement__container container">
						<div className="achievement__name name">
							<span>ACHIEVEMENT</span>
							<span></span>
						</div>
						<p className="achievement__text">
							interior customization with Danaanz, best quality with professional workers
						</p>
						<div className="achievement__content">
							<div className="achievement__image">
								<img src={achievementImage} alt="" />
							</div>
							<div className="main__column about-column">
								<div className="column-main__contant">
									<div className="column-main__row">
										<p className='column-main__number'>350+</p>
										<p className="column-main__text">Project Completed</p>
									</div>
									<div className="column-main__row">
										<p className='column-main__number'>23+</p>
										<p className="column-main__text">Professional Teams</p>
									</div>
									<div className="column-main__row">
										<p className='column-main__number'>15+</p>
										<p className="column-main__text">Years Experience</p>
									</div>
								</div>
						</div>
						</div>
					</div>
				</section>
				<section className="page__choose choose">
					<div className="choose__container container">
						<div className="choose__name name">
							<span>SERVICE</span>
							<span></span>
						</div>
						<h3 className="choose__title">
							Why Choose Us
						</h3>
						<p className="choose__text">
							Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.
						</p>
						<div className="choose__columns">
							<div className="choose__column column-choose">
								<div className='column-choose__content'>
									<div className="column-choose__elips"></div>
									<p className="column-choose__title">High Quality</p>
									<p className="column-choose__text">
										Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.
									</p>
								</div>
							</div>
							<div className="choose__column column-choose">
								<div className='column-choose__content'>
									<div className="column-choose__elips"></div>
									<p className="column-choose__title">Professional Designer</p>
									<p className="column-choose__text">
										Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.
									</p>
								</div>
							</div>
							<div className="choose__column column-choose">
								<div className='column-choose__content'>
									<div className="column-choose__elips"></div>
									<p className="column-choose__title">The Best Services</p>
									<p className="column-choose__text">
										Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer/>
		</>
	)
	}

	export default About;
