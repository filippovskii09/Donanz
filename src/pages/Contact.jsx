import React from 'react'
import './../css/pages/contact.css'
import Title from '../components/elements/Title'
import './../css/pages/contact.css'
import Footer from '../components/Footer'
// import { useState } from 'react'
function Contact() {
	// const [email, setEmail] = useState('');
	// const [emailDirty, setEmailDirty] = useState(false);
	// const [emailError, setEmailError] = useState('Please enter your email');
  return (
	 <>
		<main className="page">
			<section className="about-page__main contact-main">
					<div className="about-main__container container">
						<Title>Contact Us</Title>
						<p className="about-main__text about-text">
						It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
						</p>
					</div>
			</section>
			<div className='contact__container container'>
				<div className='formblock'>
					<div className="contact__nameblock nameblock-contact">
						<form action="" className="nameblock-contact__firstname">
							<label htmlFor="firstName">First Name</label>
							<input type="text" name="" id="firstName" placeholder='First Name'/>
						</form>
						<form action="" className="nameblock-contact__lastname">
							<label htmlFor="lastName">Last Name</label>
							<input type="text" name="" id="lastName" placeholder='Last Name'/>
						</form>
					</div>
					<form action="" className="contact__email">
						<label htmlFor="email">Email</label>
						{/* {(emailDirty && emailError) && <p style={{color:'red'}} >{emailError}</p>} */}
						<input type="email" name="" id="email" placeholder='Email'/>
					</form>
					<form action="" className="contact__number">
						<label htmlFor="number">Phone Number</label>
						<input type='tel' name="" id="number" placeholder='Phone Number'/>
					</form>
					<form action="" className="contact__text">
						<label htmlFor="text">Message</label>
						<textarea name="" id="" cols="30" rows="10" placeholder='Your Message'></textarea>
					</form>
					<button type="submit" className='btn'>Send Message</button>
				</div>
			</div>
			<section className="loaction">
				<div className="loaction__container container">
					<div className="loaction__name name">
						<span>Loaction</span>
						<span></span>
					</div>
					<div className="loaction__row">
						<div className="loaction__main">
							<h3 className="loaction__title">
							Visit Our Stores
							</h3>
							<p className="loaction__text">Find us at these locations.</p>
							<h5 className="loaction__subtitle subtitle">
							Email
							</h5>
							<p className="loaction__text">dananz@gmail.com</p>
							<h5 className="loaction__subtitle subtitle">
							Phone
							</h5>
							<p className="loaction__text">+62 815 002 1000</p>
						</div>
						<div className="loaction__columns columns-loaction">
							<div className="columns-loaction__row">
								<div className="columns-loaction__column">
								<h5 className="loaction__subtitle">
								Jakarta
								</h5>
								<p className="loaction__text">Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.</p>
								</div>
								<div className="columns-loaction__column">
								<h5 className="loaction__subtitle">
								Surakarta
								</h5>
								<p className="loaction__text">Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.</p>
								</div>
							</div>
							<div className="columns-loaction__row">
								<div className="columns-loaction__column">
								<h5 className="loaction__subtitle">
								Yogyakarta
								</h5>
								<p className="loaction__text">Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.</p>
								</div>
								<div className="columns-loaction__column">
								<h5 className="loaction__subtitle">
								Bandung
								</h5>
								<p className="loaction__text">Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.</p>
								</div>
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

export default Contact
