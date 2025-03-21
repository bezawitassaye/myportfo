import React, { useEffect, useState } from 'react';
import './Skills.css';

const CircularProgress = ({ target, title }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let start = 0;
        const interval = setInterval(() => {
            start += 1;
            if (start > target) {
                clearInterval(interval);
            } else {
                setProgress(start);
            }
        }, 12); // Adjust speed by changing interval time

        return () => clearInterval(interval);
    }, [target]);

    const strokeValue = 465 - (465 * progress) / 100;

    return (
        <div className="skilll">
            <div className="outer-circle">
                <div className="inner-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="180px" height="180px">
                        <defs>
                            <linearGradient id="GradientColor">
                                <stop offset="0%" stopColor="#B923E1" />
                                <stop offset="100%" stopColor="#B923E1" />
                            </linearGradient>
                        </defs>
                        <circle
                            cx="85"
                            cy="85"
                            r="75"
                            strokeLinecap="round"
                            strokeDasharray="465"
                            strokeDashoffset={strokeValue}
                            style={{ stroke: 'url(#GradientColor)', strokeWidth: 10, fill: 'none' }}
                        />
                    </svg>
                    <h2 className="counter">
                        <span>{progress}</span>%
                    </h2>
                </div>
            </div>
            <div className="sk-title">{title}</div>
        </div>
    );
};

const ProgressBar = ({ target, title }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let start = 0;
        const interval = setInterval(() => {
            start += 1;
            if (start > target) {
                clearInterval(interval);
            } else {
                setProgress(start);
            }
        }, 12); // Adjust speed by changing interval time

        return () => clearInterval(interval);
    }, [target]);

    return (
      <div className="skill">
      
      <div className="progress-bar">
          <div className="progress-background"></div>  {/* Background for the linear progress bar */}
          <div className="progress" style={{ width: `${progress}%` }}>
              <span className="progress-percentage">{progress}%</span>  {/* Percentage inside the progress bar */}
          </div>
      </div>
      <div className="sk-title">{title}</div>
  </div>
  
    );
};

const Skills = () => {
    const technicalSkills = [
        { title: 'HTML', target: 89 },
        { title: 'CSS', target: 89 },
        { title: 'JavaScript', target: 70 },
        { title: 'Node.js', target: 68 },
        { title: 'MongoDB', target: 59 },
        { title: 'Bootstrap', target: 69 },
        { title: 'Flutter', target: 55 },
        { title: 'MySQL', target: 66 },
        { title: 'React', target: 60 },
    ];

    const professionalSkills = [
       { title: 'Team Work', target: 85 },
        { title: 'Communication', target: 75 },
        { title: 'Problem Solving', target: 80 },
       
        { title: 'Project  Management', target: 67 },
        { title: 'Creativity ', target: 74 },
    ];

    return (
        <div className="skills">
            <div className="container">
                <div className="skillBox">
                    <div className="main-text">
                        <h2 className="heading">My Skills</h2>
                    </div>
                    <div className="skill-wrap">
                        {/* Professional Skills Column */}
                        

                        {/* Technical Skills Column (Circular Progress Bars) */}
                        <div className="circular-skills-wrap">
                            <h3>Technical Skills</h3>
                            <div className="circular-bar-container">
                                {technicalSkills.map((skill, index) => (
                                    <CircularProgress key={index} target={skill.target} title={skill.title} />
                                ))}
                            </div>
                        </div>

                        <div className="professional-skills">
                            <h3>Professional Skills</h3>
                            {professionalSkills.map((skill, index) => (
                                <ProgressBar key={index} target={skill.target} title={skill.title} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
