# Brainihacks

With the advent of modern technology, the requirement of more and more secure surveillance systems has surged. Thus, this project has significance in its own terms. In the preliminary level of the project, two groups have been formed, one of which has worked on ANPR and the other on FRS. The next level has been to interface these two systems together to be successfully used in surveillance. 

## ANPR System

The ANPR system development has been progressed by training a custom YoLov5 model on an Indian number-plate database. This has allowed a robust detection model, i.e., the number plates are detected despite the pictures being having deformities. The showstoppers include the inability to detect any number plate beyond 60 metres of distance and limited OCR capabilities under certain conditions. 

## FRS System

The FRS, parallelly has been advanced by considering a previously saved database of facial inputs. The model is based on analysing and comparing the input facial data, retrieved from the webcam, with the one extracted by OpenCV and then, generating output as a border around the face, along with the name (as retrieved from the database), to indicate successful identification. Certain drawbacks are in the form of grayscale input and issues with dim lighting.

## Website

![Screenshot 2023-03-25 120605](https://user-images.githubusercontent.com/90605717/227701243-3d5ea66e-80d6-43e1-936b-8634655d9e06.png)

Automatic Numberplate Detection System and Facial Detection System

### Link

https://brainihacks.vercel.app/

### Tech Stack Used 

ReactJS,Python,OpenCV,YoLo model

### Note

It is not responsive as it is an Hackathon Project for VITISH Hackathon for Kavach Hackathon Selection.
