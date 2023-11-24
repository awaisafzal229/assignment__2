"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { log } from 'console';

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false);

const showMenu = () => {
    console.log("Showing menu");
    
    setIsMenuOpen(true);
};

const hideMenu = () => {
    console.log("Hiding menu");
    setIsMenuOpen(false);
};

useEffect(()=>{
    showMenu(); // Call the function to show the menu on component mount
}, []);
  return (
    <>
<section className="Sub-header">
        <nav>
            <Link href="/" className="logo">Xplore
                <i className="fab fa-staylinked"></i>kill
            </Link>
            <div className={`nav-links ${isMenuOpen ? 'show' : ''}`} id="navLinks">
                {/* <!-- reposnive bar open and close --> */}
                <i className="fa fa-times" onClick={()=>hideMenu()}></i>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/course">Course</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </div>
            <i className="fa fa-bars" onClick={()=>showMenu()}></i>
            {/* <!-- reposnive bar open and close --> */}
        </nav>
        <h1>ABOUT US</h1>
    </section>   
    
    {/* <!-- About Us Section Start --> */}

    <section className="about-us">
        <div className="row">
            <div className="about-col">
                <h1>We are the world's largest University</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore cumque in accusantium molestias maiores fuga vitae eos, ducimus officiis repudiandae voluptatem error. Laboriosam, numquam blanditiis aspernatur, nobis tempora consequatur id aliquam asperiores voluptatum iste animi voluptatem fugiat totam excepturi dolor.</p>
                <a href="#" className="hero_btn btn">EXPLORE NOW</a>
            </div>
            <div className="about-col">
                <img src="/about.png" alt=""/>
            </div>
        </div>
    </section>

    {/* <!-- About Us Section end --> */}

    {/* <!-- Footer Section start --> */}
    <section className="footer">
        <hr/>
        <h4>About Us</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse minima incidunt odio nam facilis, eligendi
            <br/> Itaque fugiat cupiditate consectetur. Aliquid ab deserunt exercitationem, illum molestiae
            dolorem.
        </p>

        <div className="icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin"></i>
        </div>
        <p>Re-Designed <i className="fas fa-heart"></i> by <a href="index.html">Awais Afzal</a></p>
        <p>Copyright © 2021 <a href="index.html">Xplore Skill</a>. All Rights Reserved</p>
    </section>
    {/* <!-- Footer Section end --> */}

    
     </>
  )
}

export default About
