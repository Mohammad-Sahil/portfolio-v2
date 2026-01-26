import { Box, Card, CardContent, Typography } from '@mui/material';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';


function Cards4() {
    const cardData = [
        {
            icon: <RocketLaunchOutlinedIcon />,
            label: 'Shipped',
            value: '10+',
            unit: 'Projects',
            borderColor: '#d946ef',
        },
        {
            icon: <TimerOutlinedIcon />,
            label: 'Experience',
            value: '3+',
            unit: 'Years',
            borderColor: '#3b82f6',
        },
        {
            icon: <PublicOutlinedIcon />,
            label: 'Deployed',
            value: '30+',
            unit: 'Projects',
            borderColor: '#22c55e',
        },
        {
            icon: <LayersOutlinedIcon />,
            label: 'Full Stack Coverage',
            value: '4',
            unit: 'Product Layers',
            borderColor: '#eab308',
        },
    ];

    return (
        <>
            <Box className="stats-grid">
                {cardData.map((card, index) => (
                    <Card key={index} className="stats-card" style={{ borderBottomColor: card.borderColor }}>
                        <CardContent className="stats-card-content">
                            <Box className="stats-card-icon-container">
                                <span className="material-symbols-outlined stats-card-icon" style={{ color: card.borderColor }}>
                                    {card.icon}
                                </span>
                                <Typography className="stats-card-label">
                                    {card.label}
                                </Typography>
                            </Box>
                            <Box className="stats-card-value-container">
                                <Typography className="stats-card-value">
                                    {card.value}
                                </Typography>
                                <Typography className="stats-card-unit">
                                    {card.unit}
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                ))}
            </Box>
            <style
                dangerouslySetInnerHTML={{
                    __html: `
                .stats-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 1.5rem;
                    margin: 2rem 0;
                    margin-top: -1rem;
                }

                @media (min-width: 900px) {
                    .stats-grid {
                        grid-template-columns: repeat(4, 1fr);
                    }
                }

                .stats-card {
                    background: rgba(255, 255, 255, 0.03);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    border-radius: 0.75rem;
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-bottom: 2px solid;
                    box-shadow: none;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    cursor: pointer;
                }

                .stats-card:hover {
                    background: rgba(255, 255, 255, 0.06);
                    transform: translateY(-4px);
                    box-shadow: 0 20px 40px -20px rgba(0, 0, 0, 0.5);
                }

                .stats-card-content {
                    padding: 1.5rem;
                    display: flex;
                    flex-direction: column;
                }

                .stats-card-icon-container {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    margin-bottom: 1rem;
                }

                .stats-card-icon {
                    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .stats-card:hover .stats-card-icon {
                    transform: scale(1.1);
                }

                .stats-card-label {
                    font-size: 0.75rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    color: #94a3b8;
                }

                .stats-card-value-container {
                    display: flex;
                    flex-direction: column;
                }

                .stats-card-value {
                    font-size: 1.875rem;
                    font-weight: 700;
                    font-family: Fira Code, monospace;
                    color: #f1f5f9;
                    line-height: 1;
                }

                @media (min-width: 1024px) {
                    .stats-card-value {
                        font-size: 2.25rem;
                    }
                }

                .stats-card-unit {
                    font-size: 0.875rem;
                    font-family: sans-serif;
                    font-weight: 400;
                    color: #64748b;
                    margin-top: 0.25rem;
                }
    `,
                }}
            />
        </>
    );
}

export default Cards4;