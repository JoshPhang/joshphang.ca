import "../Styles/navbar.css"

export default function Navbar() {
    return (
      <div className="navbar">
        <a href="/" className="logo navbar-logo">
          <img src="../favicon.ico" className="clickable"/>
        </a>
        <div className="navbar-item">
          <a className="navbar-text clickable" href="/#home">Home</a>
        </div>
        <div className="navbar-item">
          <a className="navbar-text clickable" href="/#about">About</a>
        </div>
        <div className="navbar-item">
          <a className="navbar-text clickable" href="/#projects">Projects</a>
        </div>
      </div>
    );
  }