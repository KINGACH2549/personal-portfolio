import Project from "../Components/Projects/Project";

function ProjectPage({ backgroundColor }) {
  const projects = [
    {
      name: "Emotion Detector",
      desc: "A neural network trained to determine emotions in real time using python , tensorflow and openCV",
      link: "https://github.com/KINGACH2549/Emotion_detector_using_CNN",
      img: "https://lottie.host/7af86154-f5f1-4d76-bdbc-6720cb74424a/sr0d3Qokg2.json",
    },
    {
      name: "Face Recognition",
      desc: "Face Recongition System with MongoDB to store face encodings and identify the person in real time",
      link: "https://github.com/KINGACH2549/Emotion_detector_using_CNN",
      img: "https://lottie.host/2a598882-7d95-4f88-ad05-044364b19d86/Eq9pS4p0BX.json",
    },
  ];
  return (
    <>
      {backgroundColor ? (
        <Project projects={projects} color="white" />
      ) : (
        <Project projects={projects} color="#222" />
      )}
    </>
  );
}

export default ProjectPage;
