import React, {
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  useRef,
} from 'react'

interface SplashScreenProps {
  setShowSplash: Dispatch<SetStateAction<boolean>>
}

const SplashScreen = ({ setShowSplash }: SplashScreenProps) => {
  const skills = [
    'React/NextJS',
    'React Native',
    'NodeJS/SpringBoot',
    'AWS/Firebase',
  ]

  const [currentSkillIndex, setCurrentSkillIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)
  const [cycleCount, setCycleCount] = useState(0)

  const hasExitedSplash = useRef(false)

  useEffect(() => {
    const id = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(id)
  }, [])

  // Separate effect to handle exit logic
  useEffect(() => {
    if (cycleCount >= 1 && !hasExitedSplash.current) {
      hasExitedSplash.current = true
      const exitTimeout = setTimeout(() => setShowSplash(false), 800)
      return () => clearTimeout(exitTimeout)
    }
    return () => { }
  }, [cycleCount, setShowSplash])

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined
    const currentSkill = skills[currentSkillIndex]

    if (isTyping) {
      if (currentText.length < currentSkill.length) {
        timeoutId = setTimeout(() => {
          setCurrentText(currentSkill.slice(0, currentText.length + 1))
        }, 30)
      } else {
        timeoutId = setTimeout(() => {
          setIsTyping(false)
        }, 800)
      }
    } else {
      if (currentText.length > 0) {
        timeoutId = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1))
        }, 20)
      } else {
        const isLastSkill = currentSkillIndex === skills.length - 1
        const nextIndex = isLastSkill ? 0 : currentSkillIndex + 1

        if (isLastSkill) {
          setCycleCount((prev) => prev + 1)
        }

        setCurrentSkillIndex(nextIndex)
        setIsTyping(true)
      }
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [currentText, isTyping, currentSkillIndex, skills])

  return (

    <>
      <div style={{
        backgroundColor: '#0B0E14',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        fontFamily: 'Inter, sans-serif',
        overflow: 'hidden',
        position: 'relative',
        color: 'white'
      }}>
        {/* Pattern Background */}
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(217, 70, 239, 0.1) 1px, transparent 0)',
          backgroundSize: '40px 40px',
          pointerEvents: 'none',
          zIndex: 1
        }}></div>

        {/* Blur Orbs */}
        <div style={{
          position: 'fixed',
          top: '-6rem',
          left: '-6rem',
          width: '24rem',
          height: '24rem',
          backgroundColor: 'rgba(217, 70, 239, 0.1)',
          borderRadius: '50%',
          filter: 'blur(100px)',
          pointerEvents: 'none',
          zIndex: 2
        }}></div>

        <div style={{
          position: 'fixed',
          bottom: '-6rem',
          right: '-6rem',
          width: '24rem',
          height: '24rem',
          backgroundColor: 'rgba(217, 70, 239, 0.1)',
          borderRadius: '50%',
          filter: 'blur(100px)',
          pointerEvents: 'none',
          zIndex: 2
        }}></div>

        {/* SVG Decorative Elements */}
        <svg style={{
          position: 'fixed',
          inset: 0,
          width: '100%',
          height: '100%',
          opacity: 0.07,
          pointerEvents: 'none',
          zIndex: 3
        }} xmlns="http://www.w3.org/2000/svg">
          <path d="M0 100h200v200h200v-100h100M1000 800h-200v-200h-200v100h-100" fill="none" stroke="#D946EF" strokeWidth="2"></path>
          <circle cx="200" cy="100" fill="#D946EF" r="3"></circle>
          <circle cx="400" cy="300" fill="#D946EF" r="3"></circle>
          <circle cx="800" cy="800" fill="#D946EF" r="3"></circle>
        </svg>

        {/* Main Content */}
        <div style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2rem',
          animation: 'float 6s ease-in-out infinite'
        }}>
          {/* MS Text */}
          <div style={{
            fontSize: 'clamp(2.25rem, 10vw, 4.5rem)',
            fontWeight: 900,
            letterSpacing: '-0.05em',
            color: 'white'
          }}>
            MS
          </div>

          {/* Divider */}
          <div style={{
            height: 'clamp(2.5rem, 8vw, 4rem)',
            width: '2px',
            backgroundColor: 'rgba(100, 116, 139, 0.5)',
            borderRadius: '9999px'
          }}></div>

          {/* React Native Text with Glow */}
          <div style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center'
          }}>
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(217, 70, 239, 0.2)',
              filter: 'blur(2rem)',
              borderRadius: '50%',
              animation: 'pulse-glow 3s ease-in-out infinite',
              opacity: 1
            }}></div>

            <div style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center'
            }}>
              <div className="scroll-text-container">
                <span
                  style={{
                    fontSize: 'clamp(2.25rem, 10vw, 4.5rem)',
                    fontWeight: 700,
                    color: '#D946EF',
                    textShadow: '0 0 15px rgba(217, 70, 239, 0.5)',
                    display: 'inline-block',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    verticalAlign: 'bottom',
                    animation: 'typing 3.5s steps(30, end) forwards'
                  }}
                  className="scroll-text"
                >
                  {currentText}
                  {/* <span className="cursor">|</span> */}
                </span>
              </div>
              <span style={{
                width: '3px',
                height: 'clamp(2.5rem, 8vw, 4rem)',
                backgroundColor: '#D946EF',
                marginLeft: '0.5rem',
                animation: 'blink 1s step-end infinite',
                boxShadow: '0 0 10px rgba(217, 70, 239, 0.8)'
              }}></span>
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <div style={{
          marginTop: '1rem',
          position: 'relative',
          zIndex: 10,
          animation: 'fadeIn 1s ease-out 2s forwards',
          opacity: 0
        }}>
          <code style={{
            fontSize: '1rem',
            fontFamily: 'JetBrains Mono, monospace',
            color: '#94a3b8',
            letterSpacing: '0.1em',
            textTransform: 'uppercase'
          }}>
            Initializing developer environment...
          </code>
        </div>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
         @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        @keyframes pulse-glow {
          0%, 100% { 
            opacity: 0.4; 
            filter: blur(20px); 
          }
          50% { 
            opacity: 0.8; 
            filter: blur(25px); 
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes fadeIn {
          from { 
            opacity: 0; 
            transform: translateY(10px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @media (max-width: 768px) {
          @keyframes typing {
            from { width: 0; }
            to { width: 100%; }
          }
        }

        @media (max-width: 640px) {
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }
        }

        @media (max-width: 480px) {
          @keyframes typing {
            from { width: 0; }
            to { width: auto; }
          }

          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-5px); }
          }
        }
                    `
        }} />
    </>
  )
}

export default SplashScreen