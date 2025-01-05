import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>Here you can write about your background, skills, and experiences.</p>
            <p>Feel free to add more paragraphs or details about yourself.</p>
          </div>
          <div className="about-image">
            <img src="https://via.placeholder.com/300" alt="Your Name" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;