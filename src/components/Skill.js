import React from "react";
import "./Skill.css";
const Skill = () => {
  return (
    <div>
      <h1>My Skills</h1>
      <div className="skills-area">
        <div className="skill">
          <div className="skill-title">HTML</div>
          <div className="skill-bar"></div>
          <div className="html skill-fill">
            <div className="skill-percent">90%</div>
          </div>
        </div>
      </div>

      <div className="skills-area">
        <div className="skill">
          <div className="skill-title">CSS</div>
          <div className="skill-bar"></div>
          <div className="css skill-fill">
            <div className="skill-percent">80%</div>
          </div>
        </div>
      </div>

      <div className="skills-area">
        <div className="skill">
          <div className="skill-title">Bootstrap</div>
          <div className="skill-bar"></div>
          <div className="bootstrap skill-fill">
            <div className="skill-percent">70%</div>
          </div>
        </div>
      </div>

      <div className="skills-area">
        <div className="skill">
          <div className="skill-title">Tailwind CSS</div>
          <div className="skill-bar"></div>
          <div className="tailwindcss skill-fill">
            <div className="skill-percent">65%</div>
          </div>
        </div>
      </div>

      <div className="skills-area">
        <div className="skill">
          <div className="skill-title">JavaScript</div>
          <div className="skill-bar"></div>
          <div className="Javascript skill-fill">
            <div className="skill-percent">85%</div>
          </div>
        </div>
      </div>

      <div className="skills-area">
        <div className="skill">
          <div className="skill-title">React Js</div>
          <div className="skill-bar"></div>
          <div className="reactjs skill-fill">
            <div className="skill-percent">75%</div>
          </div>
        </div>
      </div>

      <div className="skills-area">
        <div className="skill">
          <div className="skill-title">Ethical Hacking</div>
          <div className="skill-bar"></div>
          <div className="ethicalhacking skill-fill">
            <div className="skill-percent">70%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
