// Import the React library
import React from 'react';

// Import the Home.css stylesheet
import './Home.css';

// Define the Home component
const Home = () => {
    // Return a div with the wrapper-outside class
    return (
        <div className="wrapper-outside">
            // Return a div with the wrapper class
            <div className="wrapper">
                // Return a h1 with the text Brainihacks
                <h1>Brainihacks</h1>

                // Return a button with the onclick event listener set to the following function
                <button onclick="location.href = './models/index.html';">
                    // Return the text Login
                    Login
                </button>
            </div>
        </div>
    );
};

// Export the Home component
export default Home;
