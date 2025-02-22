import "../Styles/main.css"

export default function Main() {
    return (
      <div className="main-page" id="home">
        <div className="label">
          <div className="my-name">
            Josh Phang
          </div>
          <div className="role">
            Full-Stack Software Developer
          </div>
        </div>
        <div className="picture">
          <img src="/assets/pfp.jpg" className="pfp" />
        </div>
      </div>
    );
  }