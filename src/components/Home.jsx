import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import styles from './Home.module.css';

const Home = () => {
    const navigate = useNavigate();

    const Navigatemodule = () => {
        navigate('/model');
    }

    return (
        <div className={styles.wrapper_outside}>
            <div className={styles.wrapper}>
                <h1>Brainihacks</h1>
                <button onClick={Navigatemodule}>Login</button>
            </div>
        </div>
    )
}

export default Home