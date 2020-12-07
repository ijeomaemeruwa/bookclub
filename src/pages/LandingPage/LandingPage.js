import React from 'react'
import './LandingPage.css'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'

export const LandingPage = () => {
    return (
    <div className="home_page">
    <div className="content_container row my-5">
    <div className="col-md-7">
    <Image src={require('../../assets/images/hero.jpg')} alt="hero" fluid/>
    </div>

    <div className="col-md-5 col-sm-12 hero_text m-auto text-center">
    <h1 className="strike">BookClub</h1>
    <p>Discover different genre of books or novels, <br />
        explore with friends and share to the world!
    </p>
    <br />
    <Link to="/books" className="hero_btn my-3">Explore BestSellers</Link>
    </div>
    </div>       
    </div>
    )
}
