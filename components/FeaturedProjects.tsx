import { useState } from 'react';
import vriddhi from '../public/project/project_vriddhi.png'
import foc from '../public/project/foc.png'

function FeaturedProjects() {
    const [hoveredProject, setHoveredProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: "Vriddhi eSports Fest Platform",
            tech: "Next.js • Node.js • MongoDB • MUI • Vercel",
            image: vriddhi.src,
            link: "https://vriddhi.vercel.app/",
        },
        {
            id: 2,
            title: "Focus on Concepts Web App",
            tech: "Next.js • Firebase • MUI • Bootstrap",
            image: foc.src,
            link: "https://www.focusonconcepts.com/",
        }
    ];

    return (
        <>
            <div className="featured-projects-container">
                <div className="projects-grid">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className={`project-card ${hoveredProject === project.id ? 'hovered' : ''}`}
                            onMouseEnter={() => setHoveredProject(project.id)}
                            onMouseLeave={() => setHoveredProject(null)}
                            onClick={() => window.open(project.link, '_blank')}
                        >
                            <div className="project-image-wrapper">
                                <div className="project-image-overlay"></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="project-image"
                                />
                            </div>

                            <div className="project-content">
                                <div className="project-text">
                                    <h4 className="project-title">{project.title}</h4>
                                    <p className="project-tech">{project.tech}</p>
                                </div>
                                <div className="project-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M7 17L17 7M17 7H7M17 7V17"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style
                dangerouslySetInnerHTML={{
                    __html: `
      .featured-projects-container {
                    padding: 0;
                    margin-bottom: 2rem;
                }

                .projects-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
                    gap: 1.5rem;
                }

                @media (max-width: 768px) {
                    .projects-grid {
                        grid-template-columns: 1fr;
                        gap: 1.5rem;
                    }
                }

                .project-card {
                    background: rgba(255, 255, 255, 0.03);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 0.75rem;
                    padding: 1.5rem;
                    cursor: pointer;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .project-card:hover {
                    background: rgba(255, 255, 255, 0.06);
                    box-shadow: 0 20px 40px -20px rgba(0, 0, 0, 0.5);
                }

                .project-image-wrapper {
                    height: 12rem;
                    background-color: #1f2937;
                    border-radius: 0.5rem;
                    margin-bottom: 1.5rem;
                    overflow: hidden;
                    position: relative;
                }

                .project-image-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: rgba(168, 85, 247, 0.1);
                    z-index: 10;
                    transition: background-color 0.3s ease;
                }

                .project-card:hover .project-image-overlay {
                    background-color: transparent;
                }

                .project-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    opacity: 0.8;
                    transition: opacity 0.7s ease, transform 0.7s ease;
                }

                .project-card:hover .project-image {
                    opacity: 1;
                    transform: scale(1.05);
                }

                .project-content {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                }

                .project-text {
                    flex: 1;
                }

                .project-title {
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: #f1f5f9;
                    margin: 0 0 0.5rem 0;
                    transition: color 0.3s ease;
                }

                .project-card:hover .project-title {
                    color: #a855f7;
                }

                .project-tech {
                    font-size: 0.75rem;
                    font-family: 'Courier New', monospace;
                    color: #94a3b8;
                    margin: 0;
                }

                .project-icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #64748b;
                    margin-left: 1rem;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .project-card:hover .project-icon {
                    color: #a855f7;
                    transform: translateX(0.25rem) translateY(-0.25rem);
                }
    `,
                }}
            />
        </>
    );
}

export default FeaturedProjects;