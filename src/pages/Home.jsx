import React from 'react'
import { motion } from 'framer-motion'
import main from './../images/main.svg'
import about from './../images/about/about.svg'
import img from './../images/about/img.svg'
import arrow from './../images/service/arrow.svg'
import service from './../images/service/service.svg'
import materialFirstImage from './../images/material/first.svg'
import materialSecondImage from './../images/material/second.svg'
import materialThirdImage from './../images/material/third.svg'
import Footer from '../components/Footer'
import '../css/home.css'

function Home() {
const textAnimation = {
	hidden: {
		x:-100,
		opacity: 0,
	},
	visible: custom => ({
		x:0,
		opacity:1,
		transition: { delay: custom * 0.4 },
	})
}
const longTextAnimation = {
	hidden: {
		x:-100,
		opacity: 0,
	},
	visible: custom => ({
		x:0,
		opacity:1,
		transition: { delay: custom * 0.5 },
	})
}
const aboutTextAnimation = {
	hidden: {
		y:100,
		opacity: 0,
	},
	visible: custom => ({
		y:0,
		opacity:1,
		transition: { delay: custom * 0.5 },
	})
}
const columnAnimation = {
	hidden: {
		y:-100,
		opacity: 0,
	},
	visible: custom => ({
		y:0,
		opacity:1,
		transition: { delay: custom * 0.3 },
	})
}
const rightTextAnimation = {
	hidden: {
		x:-200,
		opacity: 0,
	},
	visible: custom => ({
		x:0,
		opacity:1,
		transition: { delay: custom * 0.5  },
	})
}
  return (
	 <>
		<main className="page">
			<motion.section 
			initial="hidden"
			whileInView="visible"
			className="page__main main">
				<div className="main__container container">
				<span className='main__line'></span>
					<div className='main__row'>
						<motion.h1 custom={1} variants={textAnimation} className="main__title">
						Design your interor with high quality.
						</motion.h1>
						<motion.div custom={1} variants={columnAnimation} className="main__column column-main home-column">
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
						</motion.div>
						<div className='main__text'>
							<p>2022</p>
							<p>ALL RIGHT RESERVED</p>
						</div>
					</div>
					<motion.div custom={1} variants={columnAnimation} className="main__column adaptive-main">
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
						</motion.div>
					<div className="main__img">
						<img src={main} alt="" />
					</div>
				</div>
			</motion.section>
			<motion.section 
				initial="hidden"
				whileInView="visible"
				viewport={{amount:0.1, once:true}} 
				className="page__about about">
				<div className="about__container container">
					<motion.div
					custom={1}
					variants={aboutTextAnimation}
					className="about__name name">
						<span >ABOUT</span>
						<span></span>
					</motion.div>
					<motion.p 
					custom={2}
					variants={aboutTextAnimation}
					className="about__text text">
					“We're one of the best furniture agency. Prioritizing customers and making purchases easy are the hallmarks of our agency.”
					</motion.p>
					<motion.div  
					initial="hidden"
					whileInView="visible"
					viewport={{amount:0.6, once:true}} 
					className="about__columns">
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
							<img src={about} alt="" />
						</div>
						<div className="about__right">
						<motion.p 
						custom={2}
						variants={rightTextAnimation}
						className="about__subtext">
						Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere.
						</motion.p>
						<motion.a
						custom={3}
						variants={rightTextAnimation}
						href="/portfolio" 
						className="about__btn btn"
						>Learn more</motion.a>
						</div>
					</motion.div>
				</div>
			</motion.section>
			<motion.section 
			initial="hidden"
			whileInView="visible"
			viewport={{amount:0.3, once:true}} 
			className="page__service service">
				<div className="service__container container">
					<div 
					className="service__card">
						<motion.div 
						custom={1}
						variants={aboutTextAnimation}
						className="service__name name">
							<span>SERVICE</span>
							<span></span>
						</motion.div>
						<motion.p 
						custom={2}
						variants={aboutTextAnimation}
						className="service__text text">attractive furniture with the best quality.</motion.p>
						<motion.p 
						custom={3}
						variants={aboutTextAnimation}
						className="service__subtext">
						Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.
						</motion.p>
						<ul className="service__list">
							<motion.li 
							custom={4}
							variants={rightTextAnimation}
							className="service__item service-item">
								<p className='service-item__wrapper'>
									<span className="service-item__number">01</span>
									<span className="service-item__text">Interior Design</span>
								</p>
								<img src={arrow} alt="" className="service-item__arrow" />
							</motion.li>
							<motion.li 
							custom={5}
							variants={rightTextAnimation}
							className="service__item service-item">
								<p className='service-item__wrapper'>
									<span className="service-item__number">02</span>
									<span className="service-item__text">Consultant Design</span>
								</p>
								<img src={arrow} alt="" className="service-item__arrow" />
							</motion.li>
							<motion.li 
							custom={6}
							variants={rightTextAnimation}
							className="service__item service-item">
								<p className='service-item__wrapper'>
									<span className="service-item__number">03</span>
									<span className="service-item__text">Construction Consultant Design</span>
								</p>
								<img src={arrow} alt="" className="service-item__arrow" />
							</motion.li>
						</ul>
					</div>
					<div className='service__image'><img  src={service} alt="" /></div>
				</div>
			</motion.section>
			<motion.section 
				initial="hidden"
				whileInView="visible"
				viewport={{amount:0.3, once:true}}
				className="page__product product"
			>
				<div className="product__container container">
					<motion.div 
					custom={1}
					variants={aboutTextAnimation}
					className="product__name name">
						<span>PRODUCT</span>
						<span></span>
					</motion.div>
					<div className="product__textblock">
						<motion.p 
						custom={2}
						variants={aboutTextAnimation}
						className="product__text text">
						Choose your product themes.
						</motion.p>
						<motion.p 
						custom={2}
						variants={columnAnimation}
						className="product__subtext">
						Find the theme you want. If our choice of theme is not what you want, you can customize it as you want.
						</motion.p>
					</div>
					<ul className="product__list">
						<motion.li custom={3} variants={longTextAnimation} className="product__item item-product">
							<div className='item-product__wrapper'>
								<p className="item-product__number">01</p>
								<div className="item-product__textblock">
									<p className="item-product__name">Vintage</p>
									<p className="item-product__text">the use of simple and limited elements to get the best effect or impression.</p>
								</div>
							</div>
							<img src={arrow} alt="" className="item-product__arrow" />
						</motion.li>
						<motion.li custom={4} variants={longTextAnimation}className="product__item item-product">
							<div className='item-product__wrapper'>
								<p className="item-product__number">02</p>
								<div className="item-product__textblock">
									<p className="item-product__name">Minimalist</p>
									<p className="item-product__text">the use of simple and limited elements to get the best effect or impression.</p>
								</div>
							</div>
							<img src={arrow} alt="" className="item-product__arrow" />
						</motion.li>
						<motion.li custom={5} variants={longTextAnimation} className="product__item item-product">
							<div className='item-product__wrapper'>
								<p className="item-product__number">03</p>
								<div className="item-product__textblock">
									<p className="item-product__name">Modern</p>
									<p className="item-product__text">the use of simple and limited elements to get the best effect or impression.</p>
								</div>
							</div>
							<img src={arrow} alt="" className="item-product__arrow" />
						</motion.li>
						<motion.li custom={6} variants={longTextAnimation} className="product__item item-product">
							<div className='item-product__wrapper'>
								<p className="item-product__number">04</p>
								<div className="item-product__textblock">
									<p className="item-product__name">Transitional</p>
									<p className="item-product__text">the use of simple and limited elements to get the best effect or impression.</p>
								</div>
							</div>
							<img src={arrow} alt="" className="item-product__arrow" />
						</motion.li>
					</ul>
				</div>
			</motion.section>
			<motion.section 
			initial="hidden"
			whileInView="visible"
			viewport={{amount:0.4, once:true}}
			className="page__material material">
				<div className="material__container container">
					<motion.div 
					custom={1}
					variants={textAnimation}
					className="material__name name">
						<span>MATERIAL</span>
						<span></span>
					</motion.div>
					<div className='material__adptive-block'>
						<motion.div 
						custom={1}
						variants={textAnimation}
						className="material__text text">
						choice of materials for quality furniture.
						</motion.div>
						<motion.p 
						custom={1}
						variants={textAnimation}
						className="material__subtext">
						You can custom the material as desired. And our furniture uses the best materials and selected quality materials.
						</motion.p>
						<motion.button 
						custom={1}
						variants={textAnimation}
						className="material__btn">
						See Materials
						</motion.button>
						<div className="material__images absolute-image">
							<motion.img 
							custom={2}
							variants={columnAnimation}
							src={materialFirstImage} 
							alt="" />
							<motion.img 
							custom={3}
							variants={columnAnimation}
							src={materialSecondImage} alt="" />
							<motion.img 
							custom={3}
							variants={aboutTextAnimation}
							src={materialThirdImage} alt="" />
						</div>
					</div>
					{/* <div className=" adaptive-image">
						<div className='material__image'>
							<img src={materialFirstImage} alt="" />
						</div>
						<div className='material__image'>
							<img src={materialSecondImage} alt="" />
						</div>
						<div className='material__image'>
							<img src={materialThirdImage} alt="" />
						</div>
					</div> */}
				</div>
			</motion.section>
		</main>
		<Footer/>
	 </>
  )
}

export default Home
