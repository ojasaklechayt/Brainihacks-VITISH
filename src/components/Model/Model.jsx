import React from 'react'; /* Import the React library */
import { useNavigate } from 'react-router'; /* Import the useNavigate hook from the react-router library */
import styles from './Model.module.css'; /* Import the CSS styles for this component */
import { motion } from 'framer-motion'; /* Import the motion component from the framer-motion library */

const Model = () => {

    const MotionHeading = motion.div; /* Create a new variable called MotionHeading that is equal to the motion.div component */

    const navigate = useNavigate(); /* Create a new navigate variable using the useNavigate hook */

    const navigatevideo1 = () => {
        navigate('/videoone'); /* Define a function that navigates to the /videoone route when called */
    }

    const navigatevideo2 = () => {
        navigate('/videotwo'); /* Define a function that navigates to the /videotwo route when called */
    }

    return (
        <div className={styles.wrapper_outside}> /* Use the wrapper_outside class from the imported CSS styles */
            <div className={styles.wrapper}> /* Use the wrapper class from the imported CSS styles */
                <MotionHeading
                    initial={{ opacity: 0, y: -100 }} /* Define the initial state of the animation */
                    animate={{ opacity: 1, y: 0 }} /* Define the end state of the animation */
                    transition={{ duration: 1, delay: 0.5 }}> /* Define the duration and delay of the animation */
                    <div className={styles.card1}> /* Use the card1 class from the imported CSS styles */
                        <h2>Automatic Numberplate Recognisation System</h2> /* Display a heading for the first card */
                        <p>Automatic Number Plate Recognition (ANPR) or Automatic License Plate Recognition (ALPR) is a
                            technology that uses optical character recognition (OCR) and pattern recognition software to read
                            vehicle registration plates. ANPR systems typically use cameras to capture images of vehicle
                            registration plates, which are then processed by specialized software to extract the alphanumeric
                            characters on the plate. The extracted data can be used for a variety of applications, such as
                            identifying stolen vehicles, tracking traffic violations, or managing access to restricted areas.
                            ANPR technology has become increasingly widespread and is now commonly used by law enforcement
                            agencies, parking enforcement companies, toll operators, and other organizations that need to
                            monitor vehicle movements.</p> /* Display a paragraph of text for the first card */
                        <div className={styles.button}> /* Use the button class from the imported CSS styles */
                            <button onClick={navigatevideo1}>View</button> /* Display a button that triggers the navigatevideo1 function when clicked */
                        </div>
                    </div>
                </MotionHeading>
                <MotionHeading
                    initial={{ opacity: 0, y: 100 }} /* Define the initial state of the animation */
                    animate={{ opacity: 1, y: 0 }} /* Define the end state of the animation */
                    transition={{ duration: 1, delay: 0.5 }}> /* Define the duration and delay of the animation */
                    <div className={styles.card2}> /* Use the card2 class from the imported CSS styles */
                        <h2>Facial Recognisation System</h2> /* Display a heading for the second card */
                        <p>Facial recognition technology is a type of biometric system that uses algorithms to identify and
                            authenticate individuals based on their facial features. The technology works by analyzing and
                            comparing unique facial features, such as the distance between the eyes, nose, and mouth, to a
                            database of known faces. It can be used for a variety of applications, such as security, access
                            control, or identification.

                            Facial recognition systems typically use cameras to capture images or videos of individuals, and
                            then use complex algorithms to extract and compare facial features. The system then matches the
                            extracted features against a database of pre-registered faces to identify the person. The technology
                            has advanced significantly in recent years and can now recognize faces with a high degree of
                            accuracy, even in challenging conditions such as low light or crowded spaces.

                            While facial recognition technology has many potential benefits, such as improving security and
                            convenience, it also raises significant privacy and ethical concerns. These include issues related
                            to data protection, surveillance, and potential biases in the algorithms used.</p> /* Display a paragraph of text for the second card */
                        <div className={styles.button}> /* Use the button class from the imported CSS styles */
                            <button onClick={navigatevideo2}>View</button> /* Display a button that triggers the navigatevideo2 function when clicked */
                        </div>
                    </div>
                </MotionHeading>
            </div>
        </div>
    )
}

export default Model /* Export the Model component for use in other parts of the application */
