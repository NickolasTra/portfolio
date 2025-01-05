import React, { useRef, useState, useEffect } from 'react';
import './Projects.css';

const Projects = () => {
  const scrollContainer = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  const projects = [
    { id: 1, title: 'E-shop', description: 'I started my first official project in February 2020 as a freelancer. I created e-zitato.gr for a local super market.', image: 'https://via.placeholder.com/300x200' },
    { id: 2, title: 'Ludo', description: 'To acquire my MCs degree I had to create a Multiplayer Ludo game. It still is the biggest project I made which includes a variety of technologies, like React.js, nodeJS, Python, and Sockets.', image: 'https://via.placeholder.com/300x200' },
    { id: 3, title: 'My Portfolio', description: 'After I was done with these projects I wanted to create a place where people can see my work. So I managed to create this page.', image: 'https://via.placeholder.com/300x200' },
    { id: 4, title: 'Eshop (Mobile App)', description: 'Seeking for knowledge growth, I started developing a mobile application for e-zitato', image: 'https://via.placeholder.com/300x200' },
    { id: 5, title: 'MSC', description: 'As a member of big deloitte team I help on the recreation of the frontend of msccruises', image: 'https://via.placeholder.com/300x200' },
  ];

  const checkScrollPosition = () => {
    const container = scrollContainer.current;
    if (container) {
      setShowLeftButton(container.scrollLeft > 0);
      setShowRightButton(
        container.scrollLeft < container.scrollWidth - container.clientWidth
      );
    }
  };

  useEffect(() => {
    checkScrollPosition();
    const container = scrollContainer.current;
    if (container) {
      container.addEventListener('scroll', checkScrollPosition);
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', checkScrollPosition);
      }
    };
  }, []);

  const scroll = (scrollOffset) => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollLeft += scrollOffset;
    }
  };

  return (
    <section className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="carousel-container">
          {showLeftButton && (
            <button className="scroll-button left" onClick={() => scroll(-300)}>&#8249;</button>
          )}
          <div className="project-carousel" ref={scrollContainer}>
            {projects.map(project => (
              <div key={project.id} className="project-card">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <a href="#" className="btn">Learn More</a>
                </div>
              </div>
            ))}
          </div>
          {showRightButton && (
            <button className="scroll-button right" onClick={() => scroll(300)}>&#8250;</button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
