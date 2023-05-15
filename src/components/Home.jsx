// Import necessary modules from React and React Router
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import styles from './Home.module.css'; // Import the CSS module for styling
import { motion } from 'framer-motion';

const Home = () => {

    const MotionHeading = motion.div; // Create a variable to store the Framer Motion component

    const navigate = useNavigate(); // Create a navigate function to navigate to other pages

    const Navigatemodule = () => {
        navigate('/model'); // Call the navigate function to navigate to the /model page when the user clicks the Login button
    }

    return (
        <div className={styles.wrapper_outside}> {/* Use the CSS classnames from the imported module for styling */}
            <div className={styles.wrapper}>
                <MotionHeading
                    initial={{ opacity: 0, x: 100 }} // Set the initial state of the Framer Motion component to invisible and off-screen to the right
                    animate={{ opacity: 1, x: 0 }} // Animate the Framer Motion component to become visible and centered horizontally
                    transition={{ duration: 1, delay: 0.5 }}> {/* Set the duration and delay of the animation */}
                    <h2>Kavach Hackathon</h2> {/* Render a level two heading with the text "Kavach Hackathon" */}
                </MotionHeading>
                <MotionHeading
                    initial={{ opacity: 0, x: -100 }} // Set the initial state of the Framer Motion component to invisible and off-screen to the left
                    animate={{ opacity: 1, x: 0 }} // Animate the Framer Motion component to become visible and centered horizontally
                    transition={{ duration: 1, delay: 0.5 }}> {/* Set the duration and delay of the animation */}
                    <h1>Brainihacks</h1> {/* Render a level one heading with the text "Brainihacks" */}
                </MotionHeading>

                <MotionHeading
                    initial={{ opacity: 0, y: -100 }} // Set the initial state of the Framer Motion component to invisible and off-screen above
                    animate={{ opacity: 1, y: 0 }} // Animate the Framer Motion component to become visible and centered vertically
                    transition={{ duration: 1, delay: 1 }}> {/* Set the duration and delay of the animation */}
                    <button onClick={Navigatemodule}>Login</button> {/* Render a button with the text "Login". Call the Navigatemodule function on button click */}
                </MotionHeading>
            </div>
        </div>
    )
}

export default Home
