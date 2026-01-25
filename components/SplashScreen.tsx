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
    <div className="border-container">
      <div className={`gradient-orb orb-1 ${isLoaded ? 'loaded' : ''}`} />
      <div className={`gradient-orb orb-2 ${isLoaded ? 'loaded' : ''}`} />
      <div className={`gradient-orb orb-3 ${isLoaded ? 'loaded' : ''}`} />
      <div className={`gradient-orb orb-4 ${isLoaded ? 'loaded' : ''}`} />

      <div className="splash-container">
        <div className={`content-wrapper ${isLoaded ? 'loaded' : ''}`}>
          <div className="main-content">
            <div className="name-skills-container">
              <h1 className="name-title">MS</h1>
              <span className="separator">|</span>
              <div className="scroll-text-container">
                <span className="scroll-text">
                  {currentText}
                  <span className="cursor">|</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SplashScreen