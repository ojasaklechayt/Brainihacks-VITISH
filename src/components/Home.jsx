// Import necessary modules from React and React Router
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import styles from './Home.module.css'; // Import the CSS module for styling
import { motion } from 'framer-motion';

const Home = () => {

    const MotionHeading = motion.div;

    const navigate = useNavigate(); // Create a navigate function to navigate to other pages

    const Navigatemodule = () => {
        navigate('/model'); // Call the navigate function to navigate to the /model page
    }

    return (
        <div className={styles.wrapper_outside}> {/* Use the CSS classnames from the imported module for styling */}
            <div className={styles.wrapper}>
                <MotionHeading
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}>
                    <h2>Kavach Hackathon</h2>
                </MotionHeading>
                <MotionHeading
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}>
                    <h1>Brainihacks</h1>
                </MotionHeading>

                <MotionHeading
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}>
                    <button onClick={Navigatemodule}>Login</button> {/* Call the Navigatemodule function on button click */}
                </MotionHeading>
            </div>
        </div>
    )
}

export default Home
