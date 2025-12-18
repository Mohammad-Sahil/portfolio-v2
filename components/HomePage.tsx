import React from 'react'
// import bannerImg from '../public/bannerImg.png'
import TypeAnimation from 'react-type-animation'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Button from '@mui/material/Button'

function HomePage() {
  const myInterests = [
    {
      name: 'Full Stack Development',
      icon: 'fas fa-laptop-code',
    },
    {
      name: 'Cloud Computing & AI',
      icon: 'fas fa-cloud',
    },
    {
      name: 'Problem Solving',
      icon: 'fas fa-brain',
    },
    {
      name: 'UI/UX Designing',
      icon: 'fas fa-pencil-ruler',
    },
  ]

  return (
    <div
      className={styles.home_container_container}
      style={{ marginTop: '26px' }}
    >
      <div className={styles.home_banner}>
        <div>
          <h2>
            Discover my <span className="gradient-text">Amazing</span>
            <br />
            Project Space!
          </h2>
          <div className={styles.home_banner_type}>
            &lt;<i>code</i>&gt;{' '}
            <TypeAnimation
              cursor={true}
              sequence={[
                ' I build full-stack web and mobile applications. ',
                2000,
                ' I deploy scalable cloud solutions using Firebase, GCP, and AWS. ',
                2000,
                ' I am an Ai enthusiast and thrive in collaborative environments. ',
                2000,
                ' I craft intuitive & responsive ui for modern web and mobile platforms. ',
                2000,
              ]}
              wrapper="div"
              repeat={Infinity}
            />
            &lt;/<i>code</i>&gt;
          </div>
          <Link href="/projects" className="text-decoration-none text-white">
            <Button className={styles.home_button} variant="contained">
              EXPLORE NOW
            </Button>
          </Link>
        </div>
      </div>
      <div className={styles.home_banner}>
        <div>
          <h3>Hi, there... 👋</h3>
          <span className={styles.ask_how}>HOW ARE YOU ?</span>
          <p>
            Hi, I&apos;m <span className={styles.text1}>Mohammad Sahil</span> —
            a <span className={styles.text2}>Full-Stack Developer</span>{' '}
            passionate about building scalable web and mobile apps. I specialize
            in <span className={styles.text2}>React.js</span>,{' '}
            <span className={styles.text2}>Next.js</span>,{' '}
            <span className={styles.text2}>Node.js</span>,{' '}
            <span className={styles.text3}>TypeScript</span>,{' '}
            <span className={styles.text3}>React Native</span>,{' '}
            <span className={styles.text3}>Flutter</span>,{' '}
            <span className={styles.text1}>Firebase</span>,{' '}
            <span className={styles.text1}>AWS</span>, and{' '}
            <span className={styles.text1}>GCP</span>. I&apos;ve led end-to-end
            development for startups like Talentz, Just-Speak, and Masterji
            Tailor, delivering real-time dashboards, admin panels, and
            production-ready systems. With hands-on experience in cloud
            integration and automation, I thrive in fast-paced, problem-solving
            environments. I&apos;m also an active open-source contributor
            focused on projects that create real-world impact. I love turning
            complex problems into clean, elegant solutions that drive business
            and user value.
          </p>
        </div>
      </div>
      <div className={styles.home_interest}>
        <div>
          <h2>My Interests lie in</h2>
          <div className="row">
            {myInterests.map((interest, index) => {
              return (
                <div
                  key={index}
                  className="col-12 col-md-6 d-flex justify-content-center align-items-center p-3"
                >
                  <div className={styles.interest_div}>
                    <div className={styles.interest_div_icon}>
                      <i className={interest.icon}></i>
                    </div>
                    <p>{interest.name}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className="home_footer">
        <p>Made with 💜 By Mohammad Sahil | © {new Date().getFullYear()}</p>
        <p>Email: sahilmejakhas@gmail.com</p>
      </div>
    </div>
  )
}

export default HomePage
