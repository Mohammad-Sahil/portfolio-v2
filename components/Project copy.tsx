import React, { useState } from 'react'
import Router from 'next/router'

interface ProjectProps {
  projectImg: string
  title: string
  para: string
  githubLink: string
  liveLink: string
  tag1: string
  tag2: string
  tag3: string
  tag4: string
  tag5: string
  tag6: string
}

const Project: React.FC<ProjectProps> = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [zoomLevel, setZoomLevel] = useState(1)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 })

  const openModal = () => {
    setIsModalOpen(true)
    setZoomLevel(1)
    setImagePosition({ x: 0, y: 0 })
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setZoomLevel(1)
    setImagePosition({ x: 0, y: 0 })
  }

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.5, 4))
  }

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.5, 0.5))
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomLevel > 1) {
      setIsDragging(true)
      setDragStart({
        x: e.clientX - imagePosition.x,
        y: e.clientY - imagePosition.y,
      })
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoomLevel > 1) {
      setImagePosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault()
    if (e.deltaY < 0) {
      handleZoomIn()
    } else {
      handleZoomOut()
    }
  }

  const containerStyle = {}

  const cardStyle = {
    background: 'linear-gradient(to bottom right, #1e293b, #0f172a)',
    borderRadius: '0.75rem',
    overflow: 'hidden',
    maxWidth: '68rem',
    filter: 'drop-shadow(0 0 4px rgba(0, 0, 0, .15))',
  }

  const titleStyle = {
    color: '#ffffffe3',
    fontWeight: 'bold',
    letterSpacing: '0.5px',
  }

  const textStyle = {
    color: '#94A3B8',
    lineHeight: '1.625',
  }

  const sectionTitleStyle = {
    color: '#A78BFA',
    fontWeight: '600',
    fontSize: '1rem',
  }

  const tagStyle = {
    backgroundColor: 'rgba(139, 92, 246, 0.2)',
    color: '#A78BFA',
    fontSize: '0.75rem',
    fontWeight: '500',
    padding: '0.375rem 0.75rem',
    borderRadius: '9999px',
    display: 'inline-block',
    margin: '0.125rem',
  }

  const primaryButtonStyle = {
    background: 'linear-gradient(45deg, #ec4899, #8b5cf6, #ec4899, #8b5cf6)',
    backgroundSize: '400% 400%',
    color: 'white',
    fontWeight: '600',
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    border: 'none',
    fontSize: '0.875rem',
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
    fontSize: '0.875rem',
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
    fontSize: '0.875rem',
    transition: 'all 0.3s ease',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.5px',
  }

  const modalOverlayStyle = {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.95)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
    backdropFilter: 'blur(8px)',
    opacity: isModalOpen ? 1 : 0,
    visibility: (isModalOpen
      ? 'visible'
      : 'hidden') as React.CSSProperties['visibility'],
    transition: 'all 0.3s ease',
  }

  const modalContentStyle = {
    position: 'relative' as const,
    maxWidth: '95vw',
    maxHeight: '95vh',
    overflow: 'hidden',
    borderRadius: '12px',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  }

  const modalImageStyle = {
    display: 'block',
    maxWidth: 'none',
    maxHeight: 'none',
    width: 'auto',
    height: 'auto',
    transform: `scale(${zoomLevel}) translate(${imagePosition.x / zoomLevel}px, ${imagePosition.y / zoomLevel}px)`,
    transition: isDragging ? 'none' : 'transform 0.3s ease',
    cursor: zoomLevel > 1 ? (isDragging ? 'grabbing' : 'grab') : 'zoom-in',
  }

  const closeButtonStyle = {
    position: 'absolute' as const,
    top: '20px',
    right: '20px',
    background: 'rgba(0, 0, 0, 0.7)',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    fontSize: '24px',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(10px)',
    zIndex: 10001,
  }

  const zoomControlsStyle = {
    position: 'absolute' as const,
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: '10px',
    background: 'rgba(0, 0, 0, 0.7)',
    padding: '12px 20px',
    borderRadius: '25px',
    backdropFilter: 'blur(10px)',
    zIndex: 10001,
  }

  const zoomButtonStyle = {
    background: 'rgba(255, 255, 255, 0.2)',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    fontSize: '18px',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
  }

  const zoomInfoStyle = {
    color: 'white',
    fontSize: '14px',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    minWidth: '60px',
    justifyContent: 'center',
  }

  const clickableImageStyle = {
    cursor: 'pointer',
    transition: 'transform 0.3s ease, filter 0.3s ease',
    border: '2px solid rgba(167, 139, 250, 0.3)',
  }

  return (
    <>
      <div
        className="d-flex align-items-center justify-content-center py-4"
        style={containerStyle}
      >
        <div className="w-100 row g-0" style={cardStyle}>
          <div className="col-md-5 position-relative overflow-hidden">
            <div
              className="position-absolute top-0 start-0 w-100 h-100"
              style={{
                backgroundImage: `url(${props.projectImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'blur(4px)',
                transform: 'scale(1.1)',
                zIndex: 1,
              }}
            />
            <div
              className="position-relative d-flex align-items-center justify-content-center h-100 p-0"
              style={{ zIndex: 2, minHeight: '300px' }}
            >
              <img
                alt={`${props.title} preview`}
                className="img-fluid rounded shadow-lg"
                src={props.projectImg}
                onClick={openModal}
                style={{
                  ...clickableImageStyle,
                  maxHeight: '80%',
                  maxWidth: '90%',
                  objectFit: 'contain',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)'
                  e.currentTarget.style.filter = 'brightness(1.1)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)'
                  e.currentTarget.style.filter = 'brightness(1)'
                }}
              />
            </div>
          </div>
          <div className="col-md-7 p-3 p-sm-4 d-flex flex-column">
            <header className="mb-4">
              <h1 className="fs-2 fs-sm-1 mb-0" style={titleStyle}>
                {props.title}
              </h1>
            </header>

            <section className="mb-4">
              <p className="fs-6 fs-sm-5 mb-0" style={textStyle}>
                {props.para}
              </p>
            </section>

            <section className="mb-5">
              <h3
                className="mb-3 d-flex align-items-center"
                style={sectionTitleStyle}
              >
                <span className="material-icons me-2 fs-5">
                  settings_input_component
                </span>
                TECH USED
              </h3>
              <div className="d-flex flex-wrap">
                {[
                  props.tag1,
                  props.tag2,
                  props.tag3,
                  props.tag4,
                  props.tag5,
                  props.tag6,
                ].map(
                  (tag, index) =>
                    tag && (
                      <span key={index} style={tagStyle}>
                        {tag}
                      </span>
                    )
                )}
              </div>
            </section>

            <footer className="mt-auto">
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
                      VIEW SOURC
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
      </div>

      {/* Image Modal */}
      <div
        style={modalOverlayStyle}
        onClick={closeModal}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
          <img
            src={props.projectImg}
            alt={`${props.title} - Full View`}
            style={modalImageStyle}
            onMouseDown={handleMouseDown}
            onWheel={handleWheel}
            onClick={zoomLevel === 1 ? handleZoomIn : undefined}
            draggable={false}
          />

          {/* Close Button */}
          <button
            style={closeButtonStyle}
            onClick={closeModal}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'
              e.currentTarget.style.transform = 'scale(1.1)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(0, 0, 0, 0.7)'
              e.currentTarget.style.transform = 'scale(1)'
            }}
          >
            ×
          </button>

          {/* Zoom Controls */}
          <div style={zoomControlsStyle}>
            <button
              style={zoomButtonStyle}
              onClick={handleZoomOut}
              disabled={zoomLevel <= 0.5}
              onMouseEnter={(e) => {
                if (zoomLevel > 0.5) {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)'
                  e.currentTarget.style.transform = 'scale(1.1)'
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'
                e.currentTarget.style.transform = 'scale(1)'
              }}
            >
              −
            </button>
            <div style={zoomInfoStyle}>{Math.round(zoomLevel * 100)}%</div>
            <button
              style={zoomButtonStyle}
              onClick={handleZoomIn}
              disabled={zoomLevel >= 4}
              onMouseEnter={(e) => {
                if (zoomLevel < 4) {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)'
                  e.currentTarget.style.transform = 'scale(1.1)'
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'
                e.currentTarget.style.transform = 'scale(1)'
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Project