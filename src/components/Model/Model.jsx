import React from 'react'
import './Model.css'
const Model = () => {
    return (
        <div className="wrapper-outside">
            <div className="wrapper">
                <div className="card1">
                    <h2>Automatic Numberplate Recognisation System</h2>
                    <p>Automatic Number Plate Recognition (ANPR) or Automatic License Plate Recognition (ALPR) is a
                        technology that uses optical character recognition (OCR) and pattern recognition software to read
                        vehicle registration plates. ANPR systems typically use cameras to capture images of vehicle
                        registration plates, which are then processed by specialized software to extract the alphanumeric
                        characters on the plate. The extracted data can be used for a variety of applications, such as
                        identifying stolen vehicles, tracking traffic violations, or managing access to restricted areas.
                        ANPR technology has become increasingly widespread and is now commonly used by law enforcement
                        agencies, parking enforcement companies, toll operators, and other organizations that need to
                        monitor vehicle movements.</p>
                    <div className="button">
                        <button>View</button>
                    </div>
                </div>
                <div className="card2">
                    <h2>Facial Recognisation System</h2>
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
                        to data protection, surveillance, and potential biases in the algorithms used.</p>
                    <div className="button">
                        <button>View</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Model