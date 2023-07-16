import React from 'react'
import '../css/footer.css'
import Logo from './Logo'
import arrow from '../images/footer/arrow.svg'
import { ReactComponent as Facebook} from '../images/footer/facebook.svg'
import { ReactComponent as Instagram} from '../images/footer/instagram.svg'
import { ReactComponent as Tiktok } from '../images/footer/tiktok.svg'
import { ReactComponent as Utube} from '../images/footer/youtube.svg'

function Footer() {
	return (
		<>
			<footer className="footer">
				<div className="footer__top top-footer">
					<div className="footer__container container top-footer__adaptive">
						<h2 className="top-footer__title">
						let's discuss making your interior like a dream place!
						</h2>
						<div className="top-footer__content">
							<p className="top-footer__text">Contact us below to work together to build your amazing interior</p>
							<button className="top-footer__btn"><span>Contact Us</span></button>
						</div>
					</div>
				</div>
				<div className="footer__bottom footer-bottom">
					<div className="footer__container container footer-adaptive">
						<div className="footer-bottom__left">
							<Logo/>
							<h2 className="footer-bottom__title">One of the best furniture agency.</h2>
						</div>
						<div className="footer-bottom__right">
							<form action="" className="footer__form">
								<label className='footer__label' htmlFor="inputText">Enter  your email to get the laterst news</label>
								<input type="email" id='inputText' placeholder='Email Adress'/>
								<button type="submit"><img src={arrow} alt="" /></button>
							</form>
							<div className="footer__socials socials-footer">
								<p className="socials-footer__text">
								Follow us On
								</p>
								<div className="socials-footer__social">
									<Facebook className='hover-icon'/>
									<Instagram className='hover-icon' />
									<Tiktok className='hover-icon' />
									<Utube className='hover-icon' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}

export default Footer
