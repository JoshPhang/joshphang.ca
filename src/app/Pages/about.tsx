import "../Styles/about.css"

export default function About() {
  return (
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
          <div className="desc-text">joshua.phang999@gmail.com</div>
          <div className="spacer"></div>
          <div className="desc-label">Location:</div>
          <div className="desc-text">Vancouver, BC</div>
        </div>
      </div>
      <div className="about-box">
        hello i am here
      </div>
    </div>
  );
}
