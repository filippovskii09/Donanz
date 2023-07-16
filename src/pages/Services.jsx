import React from 'react'
import Footer from '../components/Footer'
import Title from './../components/elements/Title'
import serviceMainImage from './../images/pages/services/main.svg'
import firstAch from './../images//pages/services/first.svg'
import secondAch from './../images/pages/services/second.svg'
import thirdAch from './../images/pages/services/third.svg'
import arrow from './../images/service/arrow.svg'
import './../css//pages/services.css'

function Services() {
  return (
	 <>
		<main className="page">
			<section className="about-page__main about-main">
					<div className="about-main__container container">
						<Title>Services</Title>
						<p className="about-main__text about-text">
						It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
						</p>
						<div className="about-main__image">
							<img src={serviceMainImage} alt="" />
						</div>
					</div>
			</section>
			<section className="services-page__achievement services-achievement">
				<div className="achievement__container container" >
					<div className="services-achievement__name name">
						<span>ACHIEVEMENT</span>
						<span></span>
					</div>
					<div className="services-achievement__rows">
						<div className="services-achievement__row">
							<div className="services-achievement__image">
								<img src={firstAch} alt="" />
							</div>
							<div className="services-achievement__textblock">
								<h4 className="services-achievement__title">Interior design</h4>
								<p className="services-achievement__text">Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.</p>
							</div>
						</div>
						<div className="services-achievement__row">
							<div className="services-achievement__image">
								<img src={secondAch} alt="" />
							</div>
							<div className="services-achievement__textblock">
								<h4 className="services-achievement__title">Consultant</h4>
								<p className="services-achievement__text">Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.</p>
							</div>
						</div>
						<div className="services-achievement__row">
							<div className="services-achievement__image">
								<img src={thirdAch} alt="" />
							</div>
							<div className="services-achievement__textblock">
								<h4 className="services-achievement__title">Construction consultant</h4>
								<p className="services-achievement__text">Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="page__product product service-product">
				<div className="product__container container">
					<div className="product__name name">
						<span>PRODUCT</span>
						<span></span>
					</div>
					<div className="product__textblock">
						<p className="product__text text">
						Choose your product themes.
						</p>
						<p className="product__subtext">
						Find the theme you want. If our choice of theme is not what you want, you can customize it as you want.
						</p>
					</div>
					<ul className="product__list">
						<li className="product__item item-product">
							<div className='item-product__wrapper'>
								<p className="item-product__number">01</p>
								<div className="item-product__textblock">
									<p className="item-product__name">Vintage</p>
									<p className="item-product__text">the use of simple and limited elements to get the best effect or impression.</p>
								</div>
							</div>
							<img src={arrow} alt="" className="item-product__arrow" />
						</li>
						<li className="product__item item-product">
							<div className='item-product__wrapper'>
								<p className="item-product__number">02</p>
								<div className="item-product__textblock">
									<p className="item-product__name">Minimalist</p>
									<p className="item-product__text">the use of simple and limited elements to get the best effect or impression.</p>
								</div>
							</div>
							<img src={arrow} alt="" className="item-product__arrow" />
						</li>
						<li className="product__item item-product">
							<div className='item-product__wrapper'>
								<p className="item-product__number">03</p>
								<div className="item-product__textblock">
									<p className="item-product__name">Modern</p>
									<p className="item-product__text">the use of simple and limited elements to get the best effect or impression.</p>
								</div>
							</div>
							<img src={arrow} alt="" className="item-product__arrow" />
						</li>
						<li className="product__item item-product">
							<div className='item-product__wrapper'>
								<p className="item-product__number">04</p>
								<div className="item-product__textblock">
									<p className="item-product__name">Transitional</p>
									<p className="item-product__text">the use of simple and limited elements to get the best effect or impression.</p>
								</div>
							</div>
							<img src={arrow} alt="" className="item-product__arrow" />
						</li>
					</ul>
				</div>
			</section>
		</main>
		<Footer/>
	 </>
  )
}

export default Services
