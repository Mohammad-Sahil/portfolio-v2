import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown'
import TerminalIcon from '@mui/icons-material/Terminal';
import SourceIcon from '@mui/icons-material/Source';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import { ReactNode } from 'react'

interface WorkExperienceCardProps {
  id: number
  title: string
  company: string
  link: string
  date: string
  list1: string | ReactNode
  list2?: string | ReactNode
  list3?: string | ReactNode
  icon?: ReactNode
  skills?: Array<{ name: string; color: string }>
  accentColor?: string
}

const WorkExperienceCard = ({
  id,
  title,
  company,
  link,
  date,
  list1,
  list2,
  list3,
  icon,
  skills,
  accentColor = id % 2 !== 0 ? '#d946ef' : '#22d3ee', // primary purple or teal
}: WorkExperienceCardProps) => {
  const backgroundColor = 'rgba(30, 41, 59, 0.7)' // card-dark
  const borderColor = 'rgba(255, 255, 255, 0.05)'
  const textLight = '#f1f5f9' // slate-100
  const textMuted = '#cbd5e1' // slate-300
  const textDim = '#64748b' // slate-500

  return (
    <div className="experience-card-container">
      <div
        style={{
          backdropFilter: 'blur(12px)',
          backgroundColor: backgroundColor,
          border: `1px solid ${borderColor}`,
          borderRadius: '0.75rem',
          padding: '32px',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
          marginTop: '32px',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-4px)'
          e.currentTarget.style.boxShadow = `0 25px 50px -12px rgba(${accentColor === '#22d3ee' ? '34, 211, 238' : '168, 85, 247'}, 0.05)`
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)'
          e.currentTarget.style.boxShadow = 'none'
        }}
      >
        {/* Header: Title and Date */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '16px',
            marginBottom: '32px',
            flexWrap: 'wrap',
          }}
        >
          {/* Left side: Icon, Title, Company */}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '16px',
            }}
          >
            {/* Icon container */}
            <div
              style={{
                width: '56px',
                height: '56px',
                backgroundColor: `${accentColor}20`, // 20% opacity
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              {icon ? (
                <div style={{ color: accentColor, fontSize: '32px' }}>
                  {icon}
                </div>
              ) : (
                id % 2 === 0 ? <SourceIcon
                  style={{
                    color: accentColor,
                    fontSize: '32px',
                  }}
                /> : <TerminalIcon
                  style={{
                    color: accentColor,
                    fontSize: '32px',
                  }}
                />
              )}
            </div>

            {/* Title and Company */}
            <div>
              <h3
                style={{
                  fontSize: '24px',
                  fontWeight: 800,
                  color: textLight,
                  margin: 0,
                  marginBottom: '8px',
                  fontFamily: 'Outfit, sans-serif',
                }}
              >
                {title}
              </h3>
              <a
                href={link}
                style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: accentColor,
                  textDecoration: 'underline',
                  textDecorationColor: `${accentColor}50`,
                  textUnderlineOffset: '4px',
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                }}
              >
                @{company}
              </a>
            </div>
          </div>

          {/* Right side: Date */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              paddingLeft: '16px',
              paddingRight: '16px',
              paddingTop: '8px',
              paddingBottom: '8px',
              backgroundColor: 'rgb(30 41 59 / 0.5)', // slate-800/50
              borderRadius: '12px',
              fontSize: '12px',
              fontWeight: 600,
              color: '#fff',
            }}
          >
            <CalendarTodayIcon style={{ fontSize: '14px' }} />
            <span>{date}</span>
          </div>
        </div>

        {/* Description list */}
        <div style={{ marginBottom: '32px', marginTop: '32px', display: 'space-y-4' }}>
          {/* List item 1 */}
          <div
            style={{
              display: 'flex',
              gap: '16px',
              marginBottom: '16px',
            }}
          >
            <DoubleArrowIcon
              style={{
                color: `${accentColor}80`, // 50% opacity
                fontSize: '20px',
                flexShrink: 0,
                marginTop: '2px',
              }}
            />
            <p
              style={{
                color: textMuted,
                fontSize: '16px',
                fontWeight: 400,
                margin: 0,
                lineHeight: 1.6,
                fontFamily: 'Plus Jakarta Sans, sans-serif',
              }}
            >
              {list1}
            </p>
          </div>

          {/* List item 2 */}
          {list2 && (
            <div
              style={{
                display: 'flex',
                gap: '16px',
                marginBottom: '16px',
              }}
            >
              <DoubleArrowIcon
                style={{
                  color: `${accentColor}80`,
                  fontSize: '20px',
                  flexShrink: 0,
                  marginTop: '2px',
                }}
              />
              <p
                style={{
                  color: textMuted,
                  fontSize: '16px',
                  fontWeight: 400,
                  margin: 0,
                  lineHeight: 1.6,
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                }}
              >
                {list2}
              </p>
            </div>
          )}

          {/* List item 3 */}
          {list3 && (
            <div
              style={{
                display: 'flex',
                gap: '16px',
              }}
            >
              <DoubleArrowIcon
                style={{
                  color: `${accentColor}80`,
                  fontSize: '20px',
                  flexShrink: 0,
                  marginTop: '2px',
                }}
              />
              <p
                style={{
                  color: textMuted,
                  fontSize: '16px',
                  fontWeight: 400,
                  margin: 0,
                  lineHeight: 1.6,
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                }}
              >
                {list3}
              </p>
            </div>
          )}
        </div>

        {/* Skills section */}
        {skills && skills.length > 0 && (
          <div
            style={{
              marginTop: '24px',
              paddingTop: '24px',
              borderTop: `1px solid rgba(226, 232, 240, 0.05)`,
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
            }}
          >
            {skills.map((skill, index) => (
              <span
                key={index}
                style={{
                  paddingLeft: '12px',
                  paddingRight: '12px',
                  paddingTop: '6px',
                  paddingBottom: '6px',
                  // backgroundColor: 'rgba(226, 232, 240, 0.1)', // slate-800
                  backgroundColor: skill.color ? `${skill.color}10` : 'rgba(226, 232, 240, 0.1)', // slate-800
                  color: skill.color ? skill.color : textDim,
                  fontSize: '11px',
                  fontWeight: 700,
                  borderRadius: '8px',
                  textTransform: 'uppercase',
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                }}
              >
                {skill.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default WorkExperienceCard