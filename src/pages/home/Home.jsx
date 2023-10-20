import React from 'react'
import Portfolio from '../../assets/home.jpg'
import {Link} from 'react-router-dom'
import {FaArrowRight} from 'react-icons/fa'
import './home.css'
const Home = () => {
  return (
    <section className="home section grid">
      <img src={Portfolio} alt="" className="home__img" />
      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Jahid Hasan.</span> Web Devloper
          </h1>
          <p className="home__description">
            I'm Jahid hasan babu based web designer & front-end devloper focused on crafiting clean & user friendly experirence, I am passionate about building excellent software that improves the lives those around me.
          </p>
          <Link to='/about' className='button'>
            More About Me{' '}
            <span className="button__icon">
              <FaArrowRight/>
            </span>
          </Link>
        </div>
      </div>
      <div className="color__block">
        
      </div>
    </section>
  )
}

export default Home
