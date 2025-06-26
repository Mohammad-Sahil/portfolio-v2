import Head from "next/head";
import React, { useState, useEffect, Dispatch, SetStateAction } from "react";

interface SplashScreenProps {
  setShowSplash: Dispatch<SetStateAction<boolean>>;
}

const SplashScreen = ({ setShowSplash }) => {
  const skills = [
    "React/NextJS",
    "React Native",
    "NodeJS/SpringBoot",
    "AWS/Firebase",
  ];

  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [cycleCount, setCycleCount] = useState(0);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  useEffect(() => {
    let timeoutId;
    const currentSkill = skills[currentSkillIndex];

    if (isTyping) {
      if (currentText.length < currentSkill.length) {
        timeoutId = setTimeout(() => {
          setCurrentText(currentSkill.slice(0, currentText.length + 1));
        }, 30);
      } else {
        timeoutId = setTimeout(() => {
          setIsTyping(false);
        }, 800);
      }
    } else {
      if (currentText.length > 0) {
        timeoutId = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, 20);
      } else {
        const nextIndex =
          currentSkillIndex === skills.length - 1 ? 0 : currentSkillIndex + 1;

        if (currentSkillIndex === skills.length - 1) {
          const newCycleCount = cycleCount + 1;
          setCycleCount(newCycleCount);

          if (newCycleCount >= 1) {
            setTimeout(() => setShowSplash(false), 800);
            return;
          }
        }

        setCurrentSkillIndex(nextIndex);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [currentText, isTyping, currentSkillIndex, skills, cycleCount]);

  return (
    <>
      <div className="border-container">
        {/* Fixed positioned orbs at viewport corners */}
        <div className={`gradient-orb orb-1 ${isLoaded ? "loaded" : ""}`}></div>
        <div className={`gradient-orb orb-2 ${isLoaded ? "loaded" : ""}`}></div>
        <div className={`gradient-orb orb-3 ${isLoaded ? "loaded" : ""}`}></div>
        <div className={`gradient-orb orb-4 ${isLoaded ? "loaded" : ""}`}></div>

        <div className="splash-container">
          <div className={`content-wrapper ${isLoaded ? "loaded" : ""}`}>
            {/* Main content */}
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

        <style jsx>{`
        .border-container {
          padding: 16px;
          min-height: 100vh;
          background-color: #0e1629;
          position: relative;
        }
        
        .splash-container {
          min-height: calc(100vh - 32px);
          // background: linear-gradient(to bottom right, #1e293b, #0f172a);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            sans-serif;
        }

        .content-wrapper {
          position: relative;
          z-index: 2;
          text-align: center;
          padding: 2rem;
          opacity: 0;
          transform: translateY(50px) scale(0.9);
          transition: all 1.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .content-wrapper.loaded {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .gradient-orb {
          position: fixed;
          border-radius: 50%;
          background: linear-gradient(
            45deg,
            #ec4899,
            #8b5cf6,
            #ec4899,
            #8b5cf6
          );
          background-size: 400% 400%;
          animation: gradientRotate 6s ease-in-out infinite,
            float 8s ease-in-out infinite;
          opacity: 0;
          filter: blur(1px);
          transition: opacity 1s ease 0.8s;
          z-index: 1;
          pointer-events: none;
        }

        .gradient-orb.loaded {
          opacity: 0.1;
        }

        /* Top-left corner - fixed to viewport */
        .orb-1 {
          width: 280px;
          height: 280px;
          top: -140px;
          left: -140px;
          animation-delay: 0s;
        }

        /* Top-right corner - fixed to viewport */
        .orb-2 {
          width: 240px;
          height: 240px;
          top: -120px;
          right: -120px;
          animation-delay: 2s;
        }

        /* Bottom-left corner - fixed to viewport */
        .orb-3 {
          width: 260px;
          height: 260px;
          bottom: -130px;
          left: -130px;
          animation-delay: 4s;
        }

        /* Bottom-right corner - fixed to viewport */
        .orb-4 {
          width: 220px;
          height: 220px;
          bottom: -110px;
          right: -110px;
          animation-delay: 1s;
        }

        .main-content {
          position: relative;
          z-index: 3;
        }

        .name-skills-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;
          flex-wrap: wrap;
          opacity: 0;
          transform: translateY(30px);
          transition: all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.3s;
        }

        .content-wrapper.loaded .name-skills-container {
          opacity: 1;
          transform: translateY(0);
        }

        .name-title {
          font-size: 28px;
          font-weight: 700;
          margin: 0;
          color: white;
          line-height: 1.1;
        }

        .separator {
          font-size: 30px;
          font-weight: 300;
          color: rgba(236, 72, 153, 0.6);
          margin: 0;
        }

        .scroll-text-container {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          min-width: 200px;
        }

        .scroll-text {
          font-size: 22px;
          font-weight: 700;
          color: #e2e8f0;
          display: inline-flex;
          align-items: center;
          min-height: 1.2em;
          position: relative;
          background: linear-gradient(45deg, #ec4899, #8b5cf6, #ec4899);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: textGradient 3s ease-in-out infinite;
        }

        .cursor {
          display: inline-block;
          background: linear-gradient(45deg, #ec4899, #8b5cf6);
          width: 3px;
          margin-left: 2px;
          animation: cursorBlink 1s infinite;
          -webkit-background-clip: unset;
          -webkit-text-fill-color: unset;
          background-clip: unset;
        }

        @keyframes cursorBlink {
          0%,
          50% {
            opacity: 1;
          }
          51%,
          100% {
            opacity: 0;
          }
        }

        @keyframes textGradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes gradientRotate {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          25% {
            transform: translateY(-20px) rotate(5deg);
          }
          50% {
            transform: translateY(-10px) rotate(-5deg);
          }
          75% {
            transform: translateY(-30px) rotate(3deg);
          }
        }

        @media (max-width: 768px) {
          .content-wrapper {
            padding: 1rem;
          }

          .orb-1,
          .orb-2,
          .orb-3,
          .orb-4 {
            width: 120px;
            height: 120px;
          }

          .orb-1 {
            top: -60px;
            left: -60px;
          }

          .orb-2 {
            top: -60px;
            right: -60px;
          }

          .orb-3 {
            bottom: -60px;
            left: -60px;
          }

          .orb-4 {
            bottom: -60px;
            right: -60px;
          }

          .name-skills-container {
            flex-direction: column;
            gap: 1rem;
          }

          .separator {
            transform: rotate(90deg);
            margin: 0;
          }

          .scroll-text-container {
            min-width: 150px;
          }

          .cursor {
            width: 2px;
          }
        }
      `}</style>
      </div></>
  );
};

export default SplashScreen;