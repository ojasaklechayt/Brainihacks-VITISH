import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import styles from './Home.module.css';
import { motion } from 'framer-motion';

const Home = () => {

    const MotionHeading = motion.div;

    const navigate = useNavigate();

    const Navigatemodule = () => {
        navigate('/model');
    }

    return (
        <div className={styles.wrapper_outside}>
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
                    <button onClick={Navigatemodule}>Login</button>
                </MotionHeading>
            </div>
        </div>
    )
}

export default Home