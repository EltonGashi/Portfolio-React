import "./about.css";
import Skills from "../../img/skills.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://smsh-862737-juc1ugur1qwqqqo4.stackpathdns.com/2569356/wp-content/uploads/2020/11/AdobeStock_241083104-1400x934.jpg?size=1400x934&lossy=1&strip=1&webp=1"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        I am a student at UBT University. I study computer science and engineering in the second year Bachelor.

        </p>
        <p className="a-desc">
        A student in computer engineering with great interest in web development and IT. Also passionate
        about programming and creating different projects. Coming with a strong will to design, develop and
        create software applications.
        </p>
        <div className="a-award">
          <img src={Skills} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Some of my skills :</h4>
            <p className="a-award-desc">
             HTML , CSS , JS , Java , MySql
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
