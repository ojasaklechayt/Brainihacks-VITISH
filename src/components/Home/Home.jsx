import React from 'react'
import './Home.css'
const Home = () => {
    return (
        <div className="wrapper-outside">
            <div className="wrapper">
                <h1>Brainihacks</h1>
                <button onclick="location.href = './models/index.html';">Login</button>
            </div>
        </div>
    )
}

export default Home