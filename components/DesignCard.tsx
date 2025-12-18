import React, { useState } from 'react'
import Router from 'next/router'
import zIndex from '@mui/material/styles/zIndex'

interface DesignCardProps {
  cardImg: string
  title: string
  para: string
  figmaLink: string
}

const DesignCard: React.FC<DesignCardProps> = (props) => {
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
    visibility: isModalOpen
      ? ('visible' as React.CSSProperties['visibility'])
      : ('hidden' as React.CSSProperties['visibility']),
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

  const gridImageStyle = {
    backgroundImage: `url(${props.cardImg})`,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    position: 'relative' as const,
  }

  const imageOverlayStyle = {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0,
    transition: 'all 0.3s ease',
    color: 'white',
    fontSize: '18px',
    fontWeight: 'bold',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
    zIndex: '-1',
  }

  return (
    <>
      <div>
        <div className="min-h-screen bg-gray-100 d-flex flex-column justify-content-center align-items-center my-5">
          <div className="grid--container mb-8 h-16 max-w-4xl">
            <div
              className="grid--image"
              style={gridImageStyle}
              onClick={openModal}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)'
                e.currentTarget.style.filter = 'brightness(1.1)'
                const overlay = e.currentTarget.querySelector(
                  '.image-overlay'
                ) as HTMLElement
                if (overlay) {
                  overlay.style.opacity = '1'
                  overlay.style.background = 'rgba(0, 0, 0, 0.3)'
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)'
                e.currentTarget.style.filter = 'brightness(1)'
                const overlay = e.currentTarget.querySelector(
                  '.image-overlay'
                ) as HTMLElement
                if (overlay) {
                  overlay.style.opacity = '0'
                  overlay.style.background = 'rgba(0, 0, 0, 0)'
                }
              }}
            >
              <div className="image-overlay" style={imageOverlayStyle}>
                🔍 Click to Expand
              </div>
            </div>
            <div className="grid--content p-4 shadow-2xl" style={{ zIndex: 1 }}>
              <h1 className="card--title mb-4 text-4xl font-bold">
                {props.title}
              </h1>
              <p className="card--content leading-tight mb-4">{props.para}</p>
              <button
                onClick={() => Router.push(`${props.figmaLink}`)}
                className="bg-transparent btn_button py-2 px-4"
              >
                Visit Figma Design
              </button>
            </div>
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
            src={props.cardImg}
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

export default DesignCard
