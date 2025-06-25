import React from 'react';
import './Skills.css';

const skills = [
  'C',
  'Java',
  'Python',
  'Data Structures & Algorithms',
  'HTML & CSS',
  'Git & GitHub',
  'Object-Oriented Programming (OOP)',
  'Basic Web Development',
  'REST APIs',
  'AWS',
  'Computer Networks',
  'Team Collaboration',
  'Time Management',
  'Creativity & Design Thinking',
];

const Skills = () => {
  return (
    <section id="skills" className="skills container section">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-tag">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
