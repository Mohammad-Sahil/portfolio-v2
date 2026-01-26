import styles from '../styles/Home.module.css'
import { Box, Typography, Container } from '@mui/material'

function AboutSection() {
    return (
        <>
            <div className={styles.home_banner} style={{ border: '1px solid #38384a' }}>
                <div>
                    <h3>Hi, there...{' '}
                        <span
                            style={{
                                display: 'inline-block',
                                fontSize: '32px',
                                animation: 'bounce 1s infinite',
                            }}
                        >
                            👋
                        </span>
                    </h3>
                    <span className={styles.ask_how}>HOW ARE YOU ?</span>
                    <Typography
                        sx={{
                            fontSize: { xs: '16px', md: '18px' },
                            lineHeight: 1.8,
                            color: '#d1d5db',
                            fontWeight: 300,
                            '& strong': {
                                color: '#ffffff',
                                fontWeight: 600,
                            },
                        }}
                    >
                        I'm <strong>Mohammad Sahil</strong> – a <strong>Full-Stack Developer</strong> shipping scalable products from idea to production. I build cloud-powered web and mobile applications for fast-moving startups where speed and quality are non-negotiable.
                        <br />
                        <br />
                        Having led engineering for{' '}
                        <Box
                            component="span"
                            sx={{
                                backgroundColor: '#1c1c2149',
                                border: '1px solid #374151',
                                borderRadius: '6px',
                                padding: '0px 8px',
                                fontWeight: 500,
                                fontSize: '14px',
                                color: '#ffffff',
                                display: 'inline-block',
                                marginLeft: '4px',
                            }}
                        >
                            Talentz
                        </Box>
                        ,{' '}
                        <Box
                            component="span"
                            sx={{
                                backgroundColor: '#1c1c2149',
                                border: '1px solid #374151',
                                borderRadius: '6px',
                                padding: '0px 8px',
                                fontWeight: 500,
                                fontSize: '14px',
                                color: '#ffffff',
                                display: 'inline-block',
                                marginLeft: '4px',
                            }}
                        >
                            MasterJi
                        </Box>
                        ,{' '}
                        <Box
                            component="span"
                            sx={{
                                backgroundColor: '#1c1c2149',
                                border: '1px solid #374151',
                                borderRadius: '6px',
                                padding: '0px 8px',
                                fontWeight: 500,
                                fontSize: '14px',
                                color: '#ffffff',
                                display: 'inline-block',
                                marginLeft: '4px',
                            }}
                        >
                            FocusOnConcepts
                        </Box>
                        , and{' '}
                        <Box
                            component="span"
                            sx={{
                                backgroundColor: '#1c1c2149',
                                border: '1px solid #374151',
                                borderRadius: '6px',
                                padding: '0px 8px',
                                fontWeight: 500,
                                fontSize: '14px',
                                color: '#ffffff',
                                display: 'inline-block',
                                marginLeft: '4px',
                            }}
                        >
                            JustSpeak
                        </Box>
                        . I deliver production-ready systems that scale. My technical stack is built on{' '}
                        <Box
                            component="span"
                            sx={{
                                color: '#60a5fa',
                                fontFamily: '"Fira Code", monospace',
                                fontWeight: 500,
                            }}
                        >
                            React.js
                        </Box>
                        ,{' '}
                        <Box
                            component="span"
                            sx={{
                                color: '#ffffff',
                                fontFamily: '"Fira Code", monospace',
                                fontWeight: 500,
                            }}
                        >
                            Next.js
                        </Box>
                        ,{' '}
                        <Box
                            component="span"
                            sx={{
                                color: '#22c55e',
                                fontFamily: '"Fira Code", monospace',
                                fontWeight: 500,
                            }}
                        >
                            Node.js
                        </Box>
                        ,{' '}
                        <Box
                            component="span"
                            sx={{
                                color: '#a78bfa',
                                fontFamily: '"Fira Code", monospace',
                                fontWeight: 500,
                            }}
                        >
                            TypeScript
                        </Box>
                        ,{' '}
                        <Box
                            component="span"
                            sx={{
                                color: '#f97316',
                                fontFamily: '"Fira Code", monospace',
                                fontWeight: 500,
                            }}
                        >
                            React Native
                        </Box>
                        ,{' '}
                        <Box
                            component="span"
                            sx={{
                                color: '#06b6d4',
                                fontFamily: '"Fira Code", monospace',
                                fontWeight: 500,
                            }}
                        >
                            Flutter
                        </Box>
                        , and robust{' '}
                        <Box
                            component="span"
                            sx={{
                                color: '#ff9900',
                                fontFamily: '"Fira Code", monospace',
                                fontWeight: 500,
                            }}
                        >
                            AWS
                        </Box>
                        ,{' '}
                        <Box
                            component="span"
                            sx={{
                                color: '#4285f4',
                                fontFamily: '"Fira Code", monospace',
                                fontWeight: 500,
                            }}
                        >
                            GCP
                        </Box>
                        ,{' '}
                        <Box
                            component="span"
                            sx={{
                                color: '#fbbf24',
                                fontFamily: '"Fira Code", monospace',
                                fontWeight: 500,
                            }}
                        >
                            Firebase
                        </Box>
                        {' '}
                        infrastructure.
                    </Typography>
                </div>
            </div>
            <style
                dangerouslySetInnerHTML={{
                    __html: `
                @keyframes bounce {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }
    `,
                }}
            />
        </>
    )
}

export default AboutSection