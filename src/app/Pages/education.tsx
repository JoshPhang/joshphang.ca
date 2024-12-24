import "../Styles/education.css"

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

                {/* Second education: RCS */}
                <div className="education-date e2-anim">09/2014 - 06/2018</div>
                <div className="education-center-thin e2-anim">
                    <div className="education-dot"></div>
                </div>
                <div className="education-title e2-anim">
                    Richmond Christian Secondary School
                </div>

                <div className="education-role"></div>
                <div className="education-center-thick educ2 e2-anim">
                    <div className="education-line educ2"></div>
                </div>
                <div className="education-desc educ2 e2-anim">
                    <ul>
                        <li>High School Diploma</li>
                    </ul>
                </div>
            </div>

            <div className="resume">
                Need more? Check out my resume here!
                <a className="resume-download-btn" href="/assets/Josh Phang's Resume.pdf" download="Josh Phang's Resume.pdf">
                    <img src="/assets/download.png" className="download-icon" />
                    <div className="download-txt">
                        Josh Phang's Resume
                    </div>
                </a>
            </div>

            <div className="scroll-to-top">
                <a href="/#home" className="scroll-btn">
                    <img src="/assets/arrow.png" className="scroll-icon" />
                    <div className="scroll-txt">Scroll to Top</div>
                </a>
            </div>
        </div>
    )
}