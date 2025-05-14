import "../Styles/education.css";
import Link from "next/link";

export default function Education() {
  return (
    <div className="education-page" id="education">
      <div className="educations-title">Education</div>
      <div className="quarter-border-educ"></div>

      <div className="education-timeline">
        {/* First education: UNBC */}
        <div className="education-date e1-anim">09/2021 - 05/2025</div>
        <div className="education-center-thin e1-anim">
          <div className="education-dot"></div>
        </div>
        <div className="education-title e1-anim">
          University of Northern British Columbia
        </div>

        <div className="education-role"></div>
        <div className="education-center-thick educ1 e1-anim">
          <div className="education-line educ1"></div>
        </div>
        <div className="education-desc educ1 e1-anim">
          <ul>
            <li>BSc Computer Science</li>
            <li>Mathematics Minor</li>
          </ul>
        </div>
      </div>

      <div className="resume">
        Need more? Check out my resume here!
        <Link
          className="resume-download-btn"
          href="/assets/Joshua_Phang_Resume.pdf"
          download="Joshua_Phang_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/assets/download.png" className="download-icon" />
          <div className="download-txt">Josh Phang&apos;s Resume</div>
        </Link>
      </div>

      <div className="scroll-to-top">
        <Link href="/#home" className="scroll-btn">
          <div className="scroll-box">
            <img src="/assets/arrow.png" className="scroll-icon" />
            <div className="scroll-txt">Scroll to Top</div>
          </div>
        </Link>
      </div>
    </div>
  );
}
