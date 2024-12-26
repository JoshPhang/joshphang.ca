import "../Styles/navbar.css"
import Link from 'next/link'

export default function Navbar() {
    return (
      <div className="navbar">
        <meta name="viewport" content="width=device-width, initial-scale=0.5, maximum-scale=0.5, user-scalable=no" />
        
        <Link href="/#home" className="logo navbar-logo"><img src="../favicon.ico" className="clickable"/></Link>
        <Link className="navbar-text clickable" href="/#home">Home</Link>
        <Link className="navbar-text clickable" href="/#about">About</Link>
        <Link className="navbar-text clickable" href="/#projects">Projects</Link>
        <Link className="navbar-text clickable" href="/#education">Education</Link>

        <div className="navbar-item right">
          <Link className="navbar-resume-download-btn" href="/assets/Josh Phang's Resume.pdf" download="Josh Phang's Resume.pdf" target="_blank" rel="noopener noreferrer">
              <img src="/assets/download-drk.png" className="download-icon" />
              <div className="download-txt">
                  Josh Phang&apos;s Resume
              </div>
            </Link>
        </div>
      </div>
    );
  }