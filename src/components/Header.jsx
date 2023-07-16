import React from 'react'
import Logo from './Logo'
import './../css/header.css'
import Home from '../pages/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from '../pages/About'
import Portfolio from '../pages/Portfolio'
import '../css/elements/title.css'
import Services from "../pages/Services";
import Team from "../pages/Team";
import Contact from "../pages/Contact";

function Header() {
  return (
	 <>
		<header className="header">
			<div className="header__container container">
				<Logo className="header__logo" ></Logo>
				<div className="header__menu menu">
					<nav className="menu__body">
						<ul className="menu__list">
							<li className="menu__item"><a href="/" className="menu__link active">Home</a></li>
							<li className="menu__item"><a href="/about" className="menu__link">About Us</a></li>
							<li className="menu__item"><a href="/services" className="menu__link">Services</a></li>
							<li className="menu__item"><a href="/team" className="menu__link">Our Teams</a></li>
						</ul>
					</nav>
					<a href="/contact" className="header__btn">Contact Us</a>
				</div>
			</div>
		</header>
		<Router>
			<Routes>
				<Route path="/" Component={Home}/>
				<Route path="/about" Component={About}/>
				<Route path="/services" Component={Services}/>
				<Route path="/team" Component={Team}/>
				<Route path="/contact" Component={Contact}/>
				<Route path="/portfolio" Component={Portfolio}/>
			</Routes>
		</Router>
	 </>
  )
}

export default Header
