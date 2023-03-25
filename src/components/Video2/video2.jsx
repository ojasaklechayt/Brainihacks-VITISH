import React from "react";
import video from "../../assets/FRS.mp4";
import styles from "./video2.module.css"
import { motion } from "framer-motion";

const Video2 = () => {
    const MotionHeading = motion.div;

    return (
        <div className={styles.wrapper_top}>
            <div className={styles.wrapper}>
                <div className={styles.text}>
                    <h1>Face Recognization System</h1>
                </div>
                <MotionHeading
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                >
                <div className={styles.video} >
                    <video width="670" height="500" loop="true" autoplay="autoplay" controls="false" muted playsInline>
                        <source src={video} type="video/mp4" />
                    </video>
                </div>
                </MotionHeading>
            </div>
        </div>
    );
};

export default Video2;
