import "../Styles/about.css"
import Link from 'next/link'

export default function About() {

  return (
    <>
    <div className="background" id="about">
      <div className="blank-space"></div>
      <div className="profile-popout">
        <img src="/assets/portrait.jpg" className="picture-popout"/>
        <div className="popout-desc">
          <div className="desc-name">Josh Phang</div>
          <div className="half-border"></div>
          <div className="spacer"></div>
          <div className="desc-label">Phone:</div>
          <div className="desc-text">(236)-818-5141</div>
          <div className="spacer"></div>
          <div className="desc-label">Email:</div>
          <div className="desc-text">
            joshua.phang999@gmail.com
          </div>
          <div className="spacer"></div>
          <div className="desc-label">Location:</div>
          <div className="desc-text">Vancouver, BC</div>
          <div className="spacer"></div>
          <div className="desc-links">
            <Link href="https://linkedin.com/in/joshphang/" target="_blank" rel="noopener noreferrer" className="img-click">
              <img src="/assets/linkedin.jpg" alt="linkedin.com/in/joshphang/" className="logo-link"/>
            </Link>
            <Link href="https://github.com/joshphang" target="_blank" rel="noopener noreferrer" className="img-click">
              <img src="/assets/github.jpg" alt="github.com/joshphang" className="logo-link" />
            </Link>
          </div>
        </div>
      </div>
      <div className="about-box">
        <div className="about-text">
          <div className="about-title">Hello! I&apos;m Josh</div>
          <div className="spacer"></div>
          <div className="about-content">
            I am an undergraduate student currently studying at the University of Northern British Columbia, graduating with a bachelor&apos;s degree in Computer Science in May 2025.
            <br />
            <br />
            I am currently searching for new and exciting career opportunities in software development!
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
