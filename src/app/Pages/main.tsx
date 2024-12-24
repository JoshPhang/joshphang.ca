import "../Styles/main.css"
import pfp from "../Assets/pfp.png"

export default function Main() {
    return (
      <div className="main-page" id="home">
        <div className="label">
          <div className="my-name">
            Josh Phang
          </div>
          <div className="uni">
            University of Northern British Columbia
          </div>
          <div className="role">
            BSc Computer Science
            <br></br>
            Minor in Mathematics
          </div>
        </div>
        <div className="picture">
          <img src="/assets/pfp.jpg" className="pfp" />
        </div>
      </div>
    );
  }