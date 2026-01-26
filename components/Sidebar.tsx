import React from 'react'
import styles from '../styles/Sidebar.module.css'
import profileImg from '../public/profile.jpg'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from '@mui/icons-material/Twitter'
import DownloadIcon from '@mui/icons-material/Download'
import { CircularProgressbar } from 'react-circular-progressbar'
import Link from 'next/link'
// import '../node_modules/react-circular-progressbar/dist/styles.css';

const Sidebar = ({ display }) => {
  const percentageOne = 90
  const percentageTwo = 100
  const percentageThree = 40
  return (
    <div style={{ display: display }} className={styles.sidebar_container}>
      <div className={styles.sidebar_profilecard}>
        <div className={styles.sidebar_profile}>
          <div style={{ position: 'relative' }}>
            <div className={styles.sidebar_profile_img}>
              <img src={profileImg.src} alt="Sahil_profile" />
            </div>
            <span className="pulse"></span>
          </div>
          <h1 className={styles.profile_title}>
            Mohammad Sahil
            <span style={{ display: 'none' }}>
              {' '}
              Portfolio — Full Stack Developer
            </span>
          </h1>
          {/* <p>Full Stack Web Developer<br />Cloud Enthusiast</p> */}
          <p style={{ color: '#fff', fontWeight: '800', }}>
            <span className='role-badge'>Full-Stack Developer</span>
            <br />
            <span style={{ color: '#22c55e', fontWeight: '400' }}>Next.js</span> · <span style={{ color: '#06b6d4', fontWeight: '400' }}>Node.js</span> · <span style={{ color: '#fbbf24', fontWeight: '400' }}>TypeScript</span> · <span style={{ color: '#d946ef', fontWeight: '400' }}>AWS</span>
          </p>
        </div>
      </div>
      <div className={styles.sidebar_details}>
        <p>
          <span>Residence :</span>
          <span className={styles.sidebar_details_right}>India</span>
        </p>
        <p>
          <span>City :</span>
          <span className={styles.sidebar_details_right}>Prayagraj</span>
        </p>
        <p>
          <span>DOB :</span>
          <span className={styles.sidebar_details_right}>7 Nov 2001</span>
        </p>
      </div>
      <div className={styles.sidebar_lang}>
        <div className={styles.sidebar_lang_progress}>
          <div className="row">
            <div className="col-4 first-ring">
              <CircularProgressbar
                value={percentageOne}
                text={`${percentageOne}%`}
              />
              <br />
              <p>EN</p>
            </div>
            <div className="col-4 second-ring">
              <CircularProgressbar
                value={percentageTwo}
                text={`${percentageTwo}%`}
              />
              <br />
              <p>HI</p>
            </div>
            <div className="col-4 third-ring">
              <CircularProgressbar
                value={percentageThree}
                text={`${percentageThree}%`}
              />
              <br />
              <p>ES</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sidebar_cvdownload}>
        <Link
          href="/Mohammad_Sahil_Resume.pdf"
          className="text-decoration-none cv_link"
        >
          {/* <a className='text-decoration-none'> */}
          Download CV
          <DownloadIcon style={{ fontSize: '20px' }} />
          {/* </a> */}
        </Link>
      </div>
      <div className={styles.sidebar_footer}>
        <div className={styles.sidebar_icon}>
          <Link
            href="https://github.com/Mohammad-Sahil"
            className="text-decoration-none"
          >
            <GitHubIcon
              style={{
                fontSize: '15px',
                cursor: 'pointer',
                color: '#94A3B8',
                marginLeft: '5px',
                marginRight: '5px',
              }}
            />
          </Link>
          <Link
            href="https://leetcode.com/u/tsharpsahil/"
            className="text-decoration-none"
          >
            <img
              src="leetcode.svg"
              alt="LeetCode"
              style={{
                width: '14px',
                height: '14px',
                cursor: 'pointer',
                color: '#94A3B8',
                marginLeft: '5px',
                marginRight: '5px',
              }}
            />
          </Link>
          <Link
            href="https://tsharpsahil.medium.com/"
            className="text-decoration-none"
          >
            <i
              className="fab fa-medium"
              style={{ cursor: 'pointer', color: '#94A3B8' }}
              aria-hidden="true"
            ></i>
          </Link>
          <Link
            href="https://www.linkedin.com/in/tsharpsahilemeja/"
            className="text-decoration-none"
          >
            <LinkedInIcon
              style={{
                fontSize: '15px',
                cursor: 'pointer',
                color: '#94A3B8',
                marginLeft: '5px',
                marginRight: '5px',
              }}
            />
          </Link>
          <Link
            href="https://twitter.com/tsharpsahil"
            className="text-decoration-none"
          >
            <TwitterIcon
              style={{
                fontSize: '15px',
                cursor: 'pointer',
                color: '#94A3B8',
                marginLeft: '5px',
                marginRight: '5px',
              }}
            />
          </Link>
          <Link
            href="https://www.behance.net/mohammadsahil2"
            className="text-decoration-none"
          >
            <i
              className="fab fa-behance"
              style={{ cursor: 'pointer', color: '#94A3B8' }}
              aria-hidden="true"
            ></i>
          </Link>
          <Link
            href="https://www.instagram.com/tsharpsahil/"
            className="text-decoration-none"
          >
            <InstagramIcon
              style={{
                fontSize: '15px',
                cursor: 'pointer',
                color: '#94A3B8',
                marginLeft: '5px',
                marginRight: '5px',
              }}
            />
          </Link>
          <Link
            href="https://www.facebook.com/sahil87654/"
            className="text-decoration-none"
          >
            <FacebookIcon
              style={{
                fontSize: '15px',
                cursor: 'pointer',
                color: '#94A3B8',
                marginLeft: '5px',
                marginRight: '5px',
              }}
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
