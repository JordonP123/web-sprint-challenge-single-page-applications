import React from 'react'
import myImg from './Pizza.jpg'
import { Link } from 'react-router-dom'

const Home = () => {


    return (
        <>
            <div className='imgContainer'>
                <p className='homePageLinkText'>Wanna taste our wonderful PIE? Click below</p>
                <Link className='homePagePizzaLink' to='/pizza'>
                    <button className='buttonHome'>Order NOW!</button>
                </Link>
                <img className='pizzaPhoto' src={myImg} />
            </div>
        </>
    )


}

export default Home