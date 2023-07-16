import React from 'react'
import teamMainImage from './../images/pages/team/main.svg'
import Title from '../components/elements/Title'
import oneColumn from './../images//pages/team/1.svg'
import twoColumn from './../images//pages/team/2.svg'
import threeColumn from './../images//pages/team/3.svg'
import fourColumn from './../images//pages/team/4.svg'
import fiveColumn from './../images//pages/team/5.svg'
import sixColumn from './../images//pages/team/6.svg'
import sevenColumn from './../images//pages/team/7.svg'
import eightColumn from './../images//pages/team/8.svg'
import './../css/pages/team.css'
import Footer from '../components/Footer'

function Team() {
  return (
	 <>
		<main className="page">
			<section className="about-page__main about-main">
						<div className="about-main__container container">
							<Title>Our Team</Title>
							<p className="about-main__text about-text">
							It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
							</p>
							<div className="about-main__image">
								<img src={teamMainImage} alt="" />
							</div>
						</div>
			</section>
			<section className="page__designers">
				<div className='designer__container container'>
					<div className="designers__name name">
						<span>DESIGNER</span>
						<span></span>
					</div>
					<h4 className="designers__title">Creative Person</h4>
					<p className="designers__text">
					Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.
					</p>
					<div className="designers__rows">
						<div className="designers__row">
							<div className="designer__column">
								<div className='designer__image'><img src={oneColumn} alt="" /></div>
								<div className="designer__textblock">
									<p className="designer__name">Shoo Phar Dhie</p>
									<p className="designer__stack">CEO</p>
								</div>
							</div>
							<div className="designer__column">
								<div className='designer__image'><img src={twoColumn} alt="" /></div>
								<div className="designer__textblock">
									<p className="designer__name">Shoo Phar Dhie</p>
									<p className="designer__stack">CEO</p>
								</div>
							</div>
							<div className="designer__column">
								<div className='designer__image'><img src={threeColumn} alt="" /></div>
								<div className="designer__textblock">
									<p className="designer__name">Shoo Phar Dhie</p>
									<p className="designer__stack">CEO</p>
								</div>
							</div>
							<div className="designer__column">
								<div className='designer__image'><img src={fourColumn} alt="" /></div>
								<div className="designer__textblock">
									<p className="designer__name">Shoo Phar Dhie</p>
									<p className="designer__stack">CEO</p>
								</div>
							</div>
						</div>
						<div className="designers__row">
							<div className="designer__column">
								<div className='designer__image'><img src={fiveColumn} alt="" /></div>
								<div className="designer__textblock">
									<p className="designer__name">Shoo Phar Dhie</p>
									<p className="designer__stack">CEO</p>
								</div>
							</div>
							<div className="designer__column">
								<div className='designer__image'><img src={sixColumn} alt="" /></div>
								<div className="designer__textblock">
									<p className="designer__name">Shoo Phar Dhie</p>
									<p className="designer__stack">CEO</p>
								</div>
							</div>
							<div className="designer__column">
								<div className='designer__image'><img src={sevenColumn} alt="" /></div>
								<div className="designer__textblock">
									<p className="designer__name">Shoo Phar Dhie</p>
									<p className="designer__stack">CEO</p>
								</div>
							</div>
							<div className="designer__column">
								<div className='designer__image'><img src={eightColumn} alt="" /></div>
								<div className="designer__textblock">
									<p className="designer__name">Shoo Phar Dhie</p>
									<p className="designer__stack">CEO</p>
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

export default Team
