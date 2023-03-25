import React from "react";
import videoone from "../../assets/output.gif";
import videotwo from "../../assets/output_final.gif";
import styles from "./video1.module.css";
import { motion } from "framer-motion";

const Video1 = () => {
    const MotionHeading = motion.div;

    return (
        <div className={styles.wrapper_top}>
            <div className={styles.wrapper}>
                <div className={styles.text}>
                    <h1>A. N. P. R.</h1>
                </div>
                <MotionHeading
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                >
                    <div className={styles.video_out}>
                        <div className={styles.video}>
                            <h3>Numberplate Detection</h3>
                            <img src={videoone} alt="videoone" />
                        </div>
                        <div className={styles.video}>
                            <h3>Numberplate Recognition</h3>
                            <img src={videotwo} alt="videotwo" />
                        </div>
                    </div>
                </MotionHeading>
            </div>
        </div>
    );
};

export default Video1;
