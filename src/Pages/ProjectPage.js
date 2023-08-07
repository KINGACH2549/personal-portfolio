import Project from "../Components/Projects/Project";
import emotionImage from "../imgs/emotion.jpg";
import facerecImage from "../imgs/face_rec.jpeg";
import weatherImage from "../imgs/weather-image3.png";
function ProjectPage({ backgroundColor }) {
  const projects = [
    {
      name: "Emotion Detector",
      desc: "A neural network trained to determine emotions in real time using python , tensorflow and openCV",
      link: "https://github.com/KINGACH2549/Emotion_detector_using_CNN",
      img: emotionImage,
    },
    {
      name: "Face Recognition",
      desc: "Face Recongition System with MongoDB to store face encodings and identify the person in real time",
      link: "https://github.com/KINGACH2549/Emotion_detector_using_CNN",
      img: facerecImage,
    },
    {
      name: "Weather App",
      desc: "Real time weather report globally made with express , the data is fetched using Geocode API.",
      link: "https://github.com/KINGACH2549/weather-project",
      img: weatherImage,
    },
  ];
  return (
    <>
      {backgroundColor ? (
        <Project projects={projects} color="#999" />
      ) : (
        <Project projects={projects} color="#444" />
      )}
    </>
  );
}

export default ProjectPage;
