import Main from "./Pages/main";
import About from "./Pages/about";
import Navbar from "./Pages/navbar";
import Projects from "./Pages/projects";
import Education from "./Pages/education";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Josh Phang\'s Website',
};

export default function Home() {
  return (
    <div>
      <Navbar />
      <Main />
      <About />
      <Projects />
      <Education />
    </div>
  );
}