import React from "react"; // Import the React library
import videoone from "../../assets/output.gif"; // Import the output.gif file as a variable named "videoone"
import videotwo from "../../assets/output_final.gif"; // Import the output_final.gif file as a variable named "videotwo"
import styles from "./video1.module.css"; // Import the CSS module for the Video1 component
import { motion } from "framer-motion"; // Import the motion library from Framer Motion

const Video1 = () => { // Define a functional component named Video1
    const MotionHeading = motion.div; // Create a new variable named MotionHeading that is a motion-enhanced div

    return (
        <div className={styles.wrapper_top}> // Define a div with a class name of "wrapper_top"
            <div className={styles.wrapper}> // Define a div with a class name of "wrapper"
                <div className={styles.text}> // Define a div with a class name of "text"
                    <h1>A. N. P. R.</h1> // Define a level one heading with the text "A. N. P. R."
                </div>
                <MotionHeading // Define a motion-enhanced div using the MotionHeading variable
                    initial={{ opacity: 0, y: -100 }} // Set the initial state of the div to have an opacity of 0 and a y-axis position of -100
                    animate={{ opacity: 1, y: 0 }} // Set the animated state of the div to have an opacity of 1 and a y-axis position of 0
                    transition={{ duration: 0.4, delay: 0.5 }} // Set the duration of the animation to 0.4 seconds and delay it by 0.5 seconds
                >
                    <div className={styles.video_out}> // Define a div with a class name of "video_out"
                        <div className={styles.video}> // Define a div with a class name of "video"
                            <h3>Numberplate Detection</h3> // Define a level three heading with the text "Numberplate Detection"
                            <img src={videoone} alt="videoone" /> // Render an image with the source of the "videoone" variable and an alt tag of "videoone"
                        </div>
                        <div className={styles.video}> // Define a div with a class name of "video"
                            <h3>Numberplate Recognition</h3> // Define a level three heading with the text "Numberplate Recognition"
                            <img src={videotwo} alt="videotwo" /> // Render an image with the source of the "videotwo" variable and an alt tag of "videotwo"
                        </div>
                    </div>
                </MotionHeading>
            </div>
        </div>
    );
};

export default Video1; // Export the Video1 component as the default export
