import Router from 'next/router'
import { useRef, useEffect, useState } from 'react'

interface ProjectProps {
  projectImg: string
  title: string
  para: string
  githubLink: string
  liveLink: string
  tags: (string[])
}

const primaryButtonStyle = {
  background: 'linear-gradient(45deg, #ec4899, #8b5cf6, #ec4899, #8b5cf6)',
  backgroundSize: '400% 400%',
  color: 'white',
  fontWeight: '600',
  padding: '0.75rem 1.5rem',
  borderRadius: '8px',
  border: 'none',
  fontSize: '0.775rem',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  boxShadow: '0 4px 12px rgba(139, 92, 246, 0.3)',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.5px',
}

const primaryButtonStyleBorder = {
  background: 'linear-gradient(45deg, #ec4899, #8b5cf6, #ec4899, #8b5cf6)',
  backgroundSize: '400% 400%',
  color: 'white',
  fontWeight: '600',
  padding: '4px',
  borderRadius: '8px',
  border: 'none',
  fontSize: '0.775rem',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.5px',
  position: 'relative' as const,
}

const secondaryButtonStyle = {
  backgroundColor: '#151f31',
  cursor: 'pointer',
  color: 'white',
  fontWeight: '600',
  padding: '8px 20px',
  width: '100%',
  borderRadius: '6px',
  border: 'none',
  fontSize: '0.775rem',
  transition: 'all 0.3s ease',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.5px',
}

const Project: React.FC<ProjectProps> = (props) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [scale, setScale] = useState(1)
  const [shadow, setShadow] = useState('0 20px 25px -5px rgba(0, 0, 0, 0.5)')
  const animationFrameRef = useRef<number | null>(null)

  // Detect touch device on mount
  useEffect(() => {
    const hasTouchSupport = () => {
      return (
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        (navigator as any).msMaxTouchPoints > 0
      )
    }
    setIsMobile(hasTouchSupport())
  }, [])

  // Handle mouse movement for 3D effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || !cardRef.current) return

    // Cancel previous animation frame to prevent queuing
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current)
    }

    // Get card dimensions and position
    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const centerX = rect.left + width / 2
    const centerY = rect.top + height / 2

    // Calculate relative mouse position
    const mouseX = e.clientX - centerX
    const mouseY = e.clientY - centerY

    // Normalize to -1 to 1 range
    const normalizedX = mouseX / (width / 2)
    const normalizedY = mouseY / (height / 2)

    // Use requestAnimationFrame for smooth animation
    animationFrameRef.current = requestAnimationFrame(() => {
      // Calculate rotation (subtle, max 8 degrees)
      const rotateY = normalizedX * 8
      const rotateX = normalizedY * -8

      // Calculate scale (subtle, max 1.03)
      const scaleValue = 1 + (Math.abs(normalizedX) + Math.abs(normalizedY)) * 0.01

      // Calculate shadow shift based on tilt
      const shadowX = normalizedX * 8
      const shadowY = normalizedY * 8
      const shadowBlur = 30 + Math.abs(normalizedX + normalizedY) * 10

      setRotation({ x: rotateX, y: rotateY })
      setScale(scaleValue)
      setShadow(
        `${shadowX}px ${shadowY + 15}px ${shadowBlur}px -5px rgba(168, 85, 247, 0.3), 0 20px 25px -5px rgba(0, 0, 0, 0.5)`
      )
    })
  }

  // Reset to default state when mouse leaves
  const handleMouseLeave = () => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current)
    }
    setRotation({ x: 0, y: 0 })
    setScale(1)
    setShadow('0 20px 25px -5px rgba(0, 0, 0, 0.5)')
  }

  // Cleanup animation frame on unmount
  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <div style={{
      margin: '24px 0',
      backdropFilter: 'blur(16px)',
      backgroundColor: 'rgba(15, 23, 42, 0.8)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '0.75rem',
      padding: '40px',
      display: 'flex',
      flexDirection: typeof window !== 'undefined' && window.innerWidth >= 480 ? 'row' : 'column',
      gap: '36px',
      alignItems: 'center',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
    }}>
      {/* Left Side - Image with 3D Hover Effect */}
      <div style={{
        width: typeof window !== 'undefined' && window.innerWidth >= 480 ? '50%' : '100%',
        position: 'relative',
        perspective: '1200px',
      }}>
        {/* Gradient Glow Background */}
        <div style={{
          position: 'absolute',
          inset: '-16px',
          background: 'linear-gradient(135deg, #a855f7 0%, #6366f1 100%)',
          borderRadius: '24px',
          filter: 'blur(80px)',
          opacity: 0.4,
        }}></div>

        {/* 3D Tilted Card with Cursor Tracking */}
        <div
          ref={cardRef}
          style={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '16px',
            boxShadow: shadow,
            border: '1px solid rgba(255, 255, 255, 0.1)',
            transform: `perspective(1200px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${scale})`,
            transition: !isMobile ? 'transform 0.2s ease, box-shadow 0.2s ease' : 'transform 0.3s ease, box-shadow 0.3s ease',
            cursor: 'pointer',
            transformStyle: 'preserve-3d',
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <img
            alt="SaaS Platform Interface Preview"
            src={props.projectImg}
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
              display: 'block',
              pointerEvents: 'none', // Prevent image drag
            }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent)',
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '24px',
            left: '24px',
          }}>
            <span style={{
              fontSize: '12px',
              fontFamily: 'monospace',
              color: '#d1d5db',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              marginBottom: '4px',
              display: 'block',
            }}>Project Showcase</span>
            <div style={{
              height: '4px',
              width: '48px',
              background: '#a855f7',
            }}></div>
          </div>
        </div>
      </div>

      {/* Right Side - Content */}
      <div style={{
        width: typeof window !== 'undefined' && window.innerWidth >= 480 ? '50%' : '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
      }}>
        {/* Title Section */}
        <div>
          <h1 style={{
            fontSize: typeof window !== 'undefined' && window.innerWidth >= 480 ? '36px' : '24px',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            color: '#fff',
            lineHeight: 1.2,
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            margin: 0,
          }}>
            {props.title.slice(0, props.title.lastIndexOf(" "))}
            {props.title.slice(props.title.lastIndexOf(" ") + 1) && (
              <>
                {" "}
                <span style={{
                  background: 'linear-gradient(to right, #a855f7, #06b6d4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  {props.title.slice(props.title.lastIndexOf(" ") + 1)}
                </span>
              </>
            )}
          </h1>
          <p style={{
            marginTop: '16px',
            fontSize: '16px',
            color: '#cbd5e1',
            lineHeight: 1.6,
            fontWeight: 300,
          }}>
            {props.para}
          </p>
        </div>

        {/* Tags Section */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: '#a855f7',
            fontFamily: 'monospace',
            fontSize: '14px',
            fontWeight: 600,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
          }}>
            <span className='material-icons me-2 fs-5' style={{
              fontSize: '18px',
            }}>settings_input_component</span>
            TECH USED
          </div>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
          }}>
            {props.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  paddingLeft: '16px',
                  paddingRight: '16px',
                  paddingTop: '3px',
                  paddingBottom: '3px',
                  borderRadius: '9999px',
                  fontSize: '14px',
                  fontFamily: 'monospace',
                  color: '#d8b4fe',
                  border: '1px solid rgba(168, 85, 247, 0.3)',
                  backgroundColor: 'rgba(168, 85, 247, 0.05)',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(168, 85, 247, 0.6)'
                    ; (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(168, 85, 247, 0.1)'
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(168, 85, 247, 0.3)'
                    ; (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(168, 85, 247, 0.05)'
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons Section */}
        <footer className="mt-4">
          <div className="row g-3 g-sm-4">
            <div className="col-12 col-sm-6">
              <button
                onClick={() => Router.push(props.githubLink)}
                className="w-100 d-flex align-items-center justify-content-center btn-animation"
                style={primaryButtonStyleBorder}
              >
                <div
                  style={secondaryButtonStyle}
                  className="d-flex align-items-center justify-content-center mk-transparent"
                >
                  <span className="material-icons me-2 fs-5">code</span>
                  VIEW SOURCE
                </div>
              </button>
            </div>
            <div className="col-12 col-sm-6">
              <button
                onClick={() => Router.push(props.liveLink)}
                className="w-100 d-flex align-items-center justify-content-center btn-animation"
                style={primaryButtonStyle}
              >
                VISIT LIVE SITE
                <span className="material-icons ms-2 fs-5">
                  open_in_new
                </span>
              </button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Project