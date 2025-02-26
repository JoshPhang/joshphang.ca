import Main from "./Pages/main";
import About from "./Pages/about";
import Navbar from "./Pages/navbar";
import Projects from "./Pages/projects";
import Education from "./Pages/education";
import { Metadata } from 'next';
import Script from "next/script";

export const metadata: Metadata = {
  title: 'Josh Phang\'s Website',
};



export default function Home() {
  return (
    <div>
      <Script src="/scripts/spotlight.js"/>
      <div className="spotlight" id="spotlight"></div>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <Navbar />
      <Main />
      <About />
      <Projects />
      <Education />
    </div>
  );
}