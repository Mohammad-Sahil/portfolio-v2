import styles from '../styles/Home.module.css'

function InterestsCards() {
    const myInterests = [
        {
            name: 'Full Stack Development',
            description: 'Building end-to-end scalable web applications with modern stacks.',
            icon: 'fas fa-laptop-code',
        },
        {
            name: 'Cloud Computing & AI',
            description: 'Deploying intelligent systems on distributed cloud infrastructure.',
            icon: 'fas fa-cloud',
        },
        {
            name: 'Problem Solving',
            description: 'Architecting efficient algorithms and solving complex logic puzzles.',
            icon: 'fas fa-brain',
        },
        {
            name: 'UI/UX Designing',
            description: 'Creating intuitive, user-centric interfaces with premium aesthetics.',
            icon: 'fas fa-pencil-ruler',
        },
    ]

    return (
        <div className={styles.home_interest}>
            <div className="interests-container">
                <div className="interests-header">
                    <h2 className="interests-title">My Interests lie in</h2>
                    <div className="gradient-underline"></div>
                </div>

                <div className="interests-grid">
                    {myInterests.map((interest, index) => (
                        <div key={index} className="glass-card-container">
                            <div className="glass-card">
                                <div className="icon-wrapper">
                                    <div className="icon-gradient-bg">
                                        <i className={`${interest.icon} icon-text`}></i>
                                    </div>
                                </div>
                                <div className="card-content">
                                    <h3 className="card-title">{interest.name}</h3>
                                    <p className="card-description">{interest.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style
                dangerouslySetInnerHTML={{
                    __html: `
      .interests-container {
                    max-width: 80rem;
                    width: 100%;
                    margin: 0 auto;
                    position: relative;
                    z-index: 10;
                }

                .interests-header {
                    margin-bottom: 2rem;
                    space: 0.5rem;
                }

                .interests-title {
                    font-size: 2.5rem;
                    font-weight: 800;
                    color: #0f172a;
                    letter-spacing: -0.02em;
                    margin: 0 0 0.5rem 0;
                    line-height: 1.2;
                }

                @media (max-width: 768px) {
                    .interests-title {
                        font-size: 2rem;
                    }
                }

                .gradient-underline {
                    height: 0.25rem;
                    width: 5rem;
                    background: linear-gradient(to right, #a855f7, #ec4899);
                    border-radius: 9999px;
                    margin-top: 0.5rem;
                }

                .interests-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 1.5rem;
                }

                @media (max-width: 768px) {
                    .interests-grid {
                        grid-template-columns: 1fr;
                        gap: 1.5rem;
                    }
                }

                .glass-card-container {
                    display: flex;
                    flex-direction: column;
                }

                .glass-card {
                    background: rgba(255, 255, 255, 0.03);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 0.75rem;
                    padding: 2rem;
                    display: flex;
                    align-items: center;
                    gap: 1.5rem;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    cursor: default;
                }

                .glass-card:hover {
                    background: rgba(255, 255, 255, 0.06);
                    border-color: rgba(168, 85, 247, 0.4);
                    transform: translateY(-4px);
                    box-shadow: 0 20px 40px -20px rgba(0, 0, 0, 0.5);
                }

                .icon-wrapper {
                    flex-shrink: 0;
                    width: 4rem;
                    height: 4rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .icon-gradient-bg {
                    background: linear-gradient(135deg, #d946ef 0%, #8b5cf6 100%);
                    width: 100%;
                    height: 100%;
                    border-radius: 0.5rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
                    transition: all 0.4s ease;
                }

                .glass-card:hover .icon-gradient-bg {
                    filter: saturate(1.2) brightness(1.1);
                    box-shadow: 0 0 20px rgba(168, 85, 247, 0.4);
                }

                .icon-text {
                    font-size: 1.875rem;
                    color: #ffffff;
                }

                .card-content {
                    display: flex;
                    flex-direction: column;
                    gap: 0.25rem;
                }

                .card-title {
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: #1e293b;
                    transition: color 0.3s ease;
                    margin: 0;
                }

                .glass-card:hover .card-title {
                    color: #a855f7;
                }

                .card-description {
                    font-size: 0.875rem;
                    color: #64748b;
                    line-height: 1.5;
                    margin: 0;
                }

                @media (prefers-color-scheme: dark) {
                    .interests-title {
                        color: #ffffff;
                    }

                    .card-title {
                        color: #f1f5f9;
                    }

                    .card-description {
                        color: #94a3b8;
                    }
                }
    `,
                }}
            />
        </div>
    )
}

export default InterestsCards