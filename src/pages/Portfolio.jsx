	import React from 'react'
import Title from '../components/elements/Title';
import prtfolioMainImage from '../images/pages/portfolio/main.svg'
import firstPortfolioColumnImage from '../images/pages/portfolio/firstPortColImg.svg'
import secondPortfolioColumnImage from '../images/pages/portfolio/secondPortColImg.svg'
import thirdPortfolioColumnImage from '../images/pages/portfolio/thirdPortColImg.svg'
import img from './../images/about/img.svg'
import fourPortfolioColumnImage from '../images/pages/portfolio/fourPortColImg.svg'
import '../css/pages/portfolio.css'
import Footer from '../components/Footer';
	function Portfolio() {
	return (
		<>
			<main className="page">
				<section className="about-page__main about-main">
					<div className="about-main__container container">
						<Title>Portofolio</Title>
						<p className="about-main__text about-text">
						It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
						</p>
						<div className="about-main__image">
							<img src={prtfolioMainImage} alt="" />
						</div>
					</div>
				</section>
				<section className="portfolio">
					<div className="portfolio__container container">
						<div className="portfolio__name name">
							<span>PORTFOLIO</span>
							<span></span>
						</div>
						<div className='columns-wrapper'>
							<div className="about__columns">
							<div className="about__card card-about">
								<div className="card-about__content">
									<img src={img} alt="" className='card-about__image'/>
									<div className="card-about__text">
										<p>Arga Danaan</p>
										<p>CEO of Dananz</p>
									</div>
								</div>
							</div>
							<div className="about__image">
								<img src={firstPortfolioColumnImage} alt="" />
							</div>
							<div className="about__right">
							<p className="about__subtext">
							Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere.
							</p>
							<a href="/portfolio" style={{textDecoration:'none'}} className="about__btn btn">See more</a>
							</div>
						</div>
						<div className="about__columns revers-columns">
							<div className="about__card card-about revers-card">
								<div className="card-about__content">
									<img src={img} alt="" className='card-about__image'/>
									<div className="card-about__text">
										<p>Arga Danaan</p>
										<p>CEO of Dananz</p>
									</div>
								</div>
							</div>
							<div className="about__image">
								<img src={secondPortfolioColumnImage} alt="" />
							</div>
							<div className="about__right">
							<p className="about__subtext">
							Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere.
							</p>
							<a href="/portfolio" style={{textDecoration:'none'}} className="about__btn btn">See more</a>
							</div>
						</div>
						<div className="about__columns ">
							<div className="about__card card-about">
								<div className="card-about__content">
									<img src={img} alt="" className='card-about__image'/>
									<div className="card-about__text">
										<p>Arga Danaan</p>
										<p>CEO of Dananz</p>
									</div>
								</div>
							</div>
							<div className="about__image">
								<img src={thirdPortfolioColumnImage} alt="" />
							</div>
							<div className="about__right">
							<p className="about__subtext">
							Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere.
							</p>
							<a href="/portfolio" style={{textDecoration:'none'}} className="about__btn btn">See more</a>
							</div>
						</div>
						<div className="about__columns revers-columns">
							<div className="about__card card-about revers-card">
								<div className="card-about__content">
									<img src={img} alt="" className='card-about__image'/>
									<div className="card-about__text">
										<p>Arga Danaan</p>
										<p>CEO of Dananz</p>
									</div>
								</div>
							</div>
							<div className="about__image">
								<img src={fourPortfolioColumnImage} alt="" />
							</div>
							<div className="about__right">
							<p className="about__subtext">
							Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere.
							</p>
							<a href="/portfolio" style={{textDecoration:'none'}} className="about__btn btn">See more</a>
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

	export default Portfolio;
