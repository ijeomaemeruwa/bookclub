import React from 'react'
import '../LandingPage/LandingPage.css'
import { Link } from 'react-router-dom'

export const LandingPage = () => {
    return (
    <div className="home_page">
    <div className="content_container row">
    
    <div 
    className="col-md-6 col-sm-12 hero_img m-auto"
    data-aos="fade-right"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine"
    >
    <img src={require('../../assets/images/hero.jpg')} alt="hero" />
    </div>

    <div className="col-md-6 col-sm-12 hero_text m-auto text-center">
    <h1 className="strike">BookClub</h1>
    <p>Discover different genre of books or novels, <br />
        explore with friends and share to the world!
    </p>
    <br />
    <Link to="/Books" className="hero_btn my-3">Explore BestSellers</Link>
    </div>
    </div>       
    </div>
    )
}
