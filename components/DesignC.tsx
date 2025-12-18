import React, { useState } from 'react'

interface DesignCProps {
  imgLink1: string
  title1: string
  linkA: string
  imgLink2: string
  title2: string
  linkB: string
}

const DesignC: React.FC<DesignCProps> = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeImage, setActiveImage] = useState({ src: '', title: '' })
  const [zoomLevel, setZoomLevel] = useState(1)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 })

  const openModal = (imageSrc: string, imageTitle: string) => {
    setActiveImage({ src: imageSrc, title: imageTitle })
    setIsModalOpen(true)
    setZoomLevel(1)
    setImagePosition({ x: 0, y: 0 })
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setZoomLevel(1)
    setImagePosition({ x: 0, y: 0 })
    setActiveImage({ src: '', title: '' })
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

  const handleImageClick = (
    e: React.MouseEvent,
    imageSrc: string,
    imageTitle: string
  ) => {
    e.preventDefault()
    e.stopPropagation()
    openModal(imageSrc, imageTitle)
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

  const modalTitleStyle = {
    position: 'absolute' as const,
    top: '20px',
    left: '20px',
    background: 'rgba(0, 0, 0, 0.7)',
    color: 'white',
    padding: '12px 20px',
    borderRadius: '25px',
    fontSize: '16px',
    fontWeight: '600',
    backdropFilter: 'blur(10px)',
    zIndex: 10001,
    maxWidth: 'calc(100% - 120px)',
  }

  const clickableImageStyle = {
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
    fontSize: '16px',
    fontWeight: 'bold',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)',
    zIndex: 2,
  }

  return (
    <>
      <div>
        <div className="grid">
          <figure className="effect-sadie">
            <div
              style={clickableImageStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)'
                const overlay = e.currentTarget.querySelector(
                  '.image-overlay'
                ) as HTMLElement
                if (overlay) {
                  overlay.style.opacity = '1'
                  overlay.style.background = 'rgba(0, 0, 0, 0.4)'
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)'
                const overlay = e.currentTarget.querySelector(
                  '.image-overlay'
                ) as HTMLElement
                if (overlay) {
                  overlay.style.opacity = '0'
                  overlay.style.background = 'rgba(0, 0, 0, 0)'
                }
              }}
            >
              <img
                src={props.imgLink1}
                alt={props.title1}
                onClick={(e) =>
                  handleImageClick(e, props.imgLink1, props.title1)
                }
              />
              <div className="image-overlay" style={imageOverlayStyle}>
                🔍 Click to View Full Size
              </div>
            </div>
            <figcaption>
              <h2>
                <span>{props.title1}</span>
              </h2>
              <a href={props.linkA}>View more</a>
            </figcaption>
          </figure>

          <figure className="effect-sadie">
            <div
              style={clickableImageStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)'
                const overlay = e.currentTarget.querySelector(
                  '.image-overlay'
                ) as HTMLElement
                if (overlay) {
                  overlay.style.opacity = '1'
                  overlay.style.background = 'rgba(0, 0, 0, 0.4)'
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)'
                const overlay = e.currentTarget.querySelector(
                  '.image-overlay'
                ) as HTMLElement
                if (overlay) {
                  overlay.style.opacity = '0'
                  overlay.style.background = 'rgba(0, 0, 0, 0)'
                }
              }}
            >
              <img
                src={props.imgLink2}
                alt={props.title2}
                onClick={(e) =>
                  handleImageClick(e, props.imgLink2, props.title2)
                }
              />
              <div className="image-overlay" style={imageOverlayStyle}>
                🔍 Click to View Full Size
              </div>
            </div>
            <figcaption>
              <h2>
                <span>{props.title2}</span>
              </h2>
              <a href={props.linkB}>View more</a>
            </figcaption>
          </figure>
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
          {/* Modal Title */}
          {activeImage.title && (
            <div style={modalTitleStyle}>{activeImage.title}</div>
          )}

          <img
            src={activeImage.src}
            alt={`${activeImage.title} - Full View`}
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

export default DesignC
