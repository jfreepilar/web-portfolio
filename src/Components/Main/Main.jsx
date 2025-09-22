import AboutMe from "./AboutMe";
import Certificate from "./Certificate";
import NavBar from "./NavBar";
import Skills from "./skills/Skills";
import Project from "./project/Project";

export default function Main() {
  return (
    <div className="w-4/5 bg-white text-gray-500 rounded-t-m">
      <NavBar />
      <AboutMe />
      <Certificate />
      <Skills />
      <Project />
    </div>
  );
}
