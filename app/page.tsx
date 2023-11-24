    "use client"
    import React, { useEffect, useState } from 'react';
    import Link from 'next/link';
import { log } from 'console';

    interface PageProps {}

    const Page: React.FC<PageProps> = () => {
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
        <section className="header">
            <nav>
                <Link href="index.html" className="logo">Xplore
                    <i className="fab fa-staylinked"></i>kill
                </Link>
                <div className={`nav-links ${isMenuOpen ? 'show' : ''}`} id="navLinks">
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
            </nav>

            <div className="text_box">
                <h2>GET READY</h2>
                <p id="headtext">TO DISCOVER CAMPUS</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit consequuntur corrupti sapiente aut porro
                    <br/> esse blanditiis in quae perspiciatis quo.
                </p>
                <a href="#" className="hero_btn">Visit Us To Know More</a>
            </div>
        </section>

        <section className="course">
            <div className="PageBlock">
                <div className="verticalLine"></div>
                <div className="Clear"></div>
            </div>
            <h1>EXPLORE OUR 60+ <br/> MAJOR PROGRAMS</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

            <div className="row">
                <div className="course-col">
                    <h3>Undergraduate Programs</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas
                        soluta labore quisquam impedi distinctio explicabo aut minima quos pariatur unde aliquam earum
                        laborum velit non.</p>
                </div>
                <div className="course-col">
                    <h3>Graduate Programs</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas
                        soluta labore quisquam impedit distinctio explicabo aut minima quos pariatur unde aliquam earum
                        laborum velit non.</p>
                </div>
                <div className="course-col">
                    <h3>Adult Learning & Degree Completion</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas
                        soluta labore quisquam impedit distinctio explicabo aut minima quos pariatur unde aliquam earum
                        laborum velit non.</p>
                </div>
            </div>
        </section>
        {/* <!-- Course Section End --> */}

        {/* <!-- Campus Section Start--> */}

        <section className="campus">
            <div className="PageBlock">
                <div className="verticalLine"></div>
                <div className="Clear"></div>
            </div>
            <h1>TAKE OUR VIRTUAL TOUR</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

            <div className="row">
                <div className="campus-col">
                    <img src="/Campus1.png" alt=""/>
                    <div className="layer">
                        <h3>DELHI</h3>
                    </div>
                </div>
                <div className="campus-col">
                    <img src="/Campus2.png" alt=""/>
                    <div className="layer">
                        <h3>HYDERABAD</h3>
                    </div>
                </div>
                <div className="campus-col">
                    <img src="/Campus3.png" alt=""/>
                    <div className="layer">
                        <h3>MUMBAI</h3>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Campus Section End --> */}

        {/* <!-- Facilities Section Start --> */}
        <section className="facilities">
            <div className="PageBlock">
                <div className="verticalLine"></div>
                <div className="Clear"></div>
            </div>
            <h1>Our Facilities</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

            <div className="row">
                <div className="facilities-col">
                    <img src="/libary.png" alt=""/>
                    <h3>Best Libary</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
                    </p>
                </div>
                <div className="facilities-col">
                    <img src="/playground.png" alt=""/>
                    <h3>Athletics</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
                    </p>
                </div>
                <div className="facilities-col">
                    <img src="/food.png" alt=""/>
                    <h3>Tasty and Healthy Food</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
                    </p>
                </div>
            </div>
        </section>
        {/* <!-- Facilities Section End --> */}

        {/* <!-- Testimonials Section Start --> */}
        <section className="testimonials">
            <div className="PageBlock">
                <div className="verticalLine"></div>
                <div className="Clear"></div>
            </div>
            <h1>What Our Student Says</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

            <div className="row">
                <div className="testimonials-col">
                    <img src="/user.png" alt="oo.."/>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi maiores in nostrum rerum voluptatem
                            praesentium veritatis alias omnis voluptate nisi aperiam, voluptatum quibusdam itaque a
                            deserunt. In quia repellat maxime.</p>
                        <h3>Student Name</h3>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </div>
                </div>
                <div className="testimonials-col">
                    <img src="/user.png" alt="oo.."/>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi maiores in nostrum rerum voluptatem
                            praesentium veritatis alias omnis voluptate nisi aperiam, voluptatum quibusdam itaque a
                            deserunt. In quia repellat maxime.</p>
                        <h3>Student Name</h3>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-half-alt"></i>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Testimonials Section End --> */}

        {/* <!-- Call To Action Section Start --> */}
        <section className="cta">
            <h1>GET READY FOR A BRIGHT FUTURE</h1>
            <a href="contact.html" className="hero_btn">CONTACT US</a>
        </section>
        {/* <!-- Call To Action Section End --> */}

        {/* <!-- Footer Section Start --> */}
        <section className="footer">
            <hr/>
            <h4>About Us</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse minima incidunt odio nam facilis, eligendi
                Itaque fugiat cupiditate consectetur. Aliquid ab deserunt exercitationem, illum molestiae dolorem.
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
        {/* <!-- Footer Section End --> */}
    </>
    )
    }
    export default Page;