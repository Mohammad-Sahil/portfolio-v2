import styless from '../styles/Home.module.css'
import styles from '../styles/Session.module.css'
import Layout from '../components/Layout'
import DesignCard from '../components/DesignCard'

import notes from '../public/project/project_a2nitr.jpg'
import vriddhi from '../public/project/project_vriddhi.png'
import portfolio from '../public/project/project_portfolio.png'
import codecanibals from '../public/project/codecanibals.png'
import nss from '../public/project/nss.png'
import ebsbs from '../public/project/ebsb.png'
import xpraints from '../public/project/xpraints.png'
import aqg from '../public/project/aqg.png'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Design | Mohammad Sahil — UI/UX and Creative Work</title>
        <meta
          name="description"
          content="Explore my design work — thoughtful UI/UX, clean layouts, and pixel-perfect interfaces for mobile and web applications."
        />
      </Head>
      <Layout>
        <div
          className={styless.home_container_container}
          style={{ marginTop: '0' }}
        >
          <div className={styles.session_container}>
            <h2><span style={{ color: "#fff" }}>Featured Art Space of Ui/UX</span><br /><span style={{ fontSize: '16px', fontWeight: '400' }}>Thoughtful interfaces built for real users</span></h2>

            <DesignCard
              cardImg={vriddhi.src}
              title="Vriddhi eSports Fest"
              para="Designed a complete UI design for an e-sports website in Figma, including low-fidelity wireframes, and high-fidelity designs. Developed clear user flows and structured layouts to enhance navigation and visual consistency. Demonstrated strong skills in interface design, wireframing, and user journey mapping through a structured design process across three iterative stages."
              figmaLink="https://www.figma.com/file/9gBT4ixqZboGas4qaMf54B/Vriddhi-UX%2FUI?node-id=401%3A4"
            />
            <DesignCard
              cardImg={notes.src}
              title="NITR Notes & Book"
              para="Designed the UI for A2ZNITRNotes, a centralized academic resource platform for NIT Rourkela students, using Figma. Created user flows, wireframes, and high-fidelity prototypes across multiple pages. Focused on clean layout, intuitive navigation, and visual clarity to enhance accessibility of notes, book recommendations, and academic tools for a better student experience."
              figmaLink="https://www.figma.com/file/6G9xGeW4XLJFSf3MabcOjg/A2NITR?node-id=0%3A1"
            />
            <DesignCard
              cardImg={portfolio.src}
              title="Personal Portfolio"
              para="Designed a personal portfolio website in Figma styled like a PDF resume, featuring clean typography and intuitive section-based navigation. Created wireframes and high-fidelity mockups to showcase projects, skills, and experience. Focused on visual clarity, consistency, and a user-friendly layout to reflect a professional identity and enhance engagement for recruiters and collaborators."
              figmaLink="https://www.figma.com/file/qvqIhBy1BDzZehvt20XCpY/Sahil_Portfolio?node-id=301%3A3"
            />
            <DesignCard
              cardImg={codecanibals.src}
              title="Code Canibals"
              para="Designed a user interface for Code Canibals, a college platform for quiz and assignment submissions. Created structured user flows, wireframes, and high-fidelity prototypes in Figma. Focused on ease of use, clean layout, and efficient navigation to simplify the submission process for students and streamline review for instructors, ensuring an intuitive and engaging experience."
              figmaLink="https://www.figma.com/file/kJ5TZS5kEncLvoRo9NZRD8/CodeCannibals?node-id=0%3A1"
            />
            <DesignCard
              cardImg={nss.src}
              title="NSS NIT Rourkela"
              para="Designed the user interface for the National Service Scheme (NSS), NIT Rourkela branch website using Figma. Created user flows, wireframes, and high-fidelity prototypes to highlight events, activities, and volunteer involvement. Focused on clear visual hierarchy, easy navigation, and an inviting layout to promote engagement and reflect the organization's values and impact."
              figmaLink="https://www.figma.com/file/cqJ0r7JIqwM1L0c5RcJYwR/NSS-Web-Pages?node-id=603%3A2"
            />
            <DesignCard
              cardImg={ebsbs.src}
              title="Ek Bharat Shreshtha Bharat"
              para="Designed the user interface for Ek Bharat Shreshtha Bharat (EBSB), NIT Rourkela, using Figma. Developed user flows, wireframes, and high-fidelity mockups to showcase cultural exchange events and initiatives. Focused on a vibrant, accessible layout with smooth navigation to reflect the spirit of national integration and encourage student participation."
              figmaLink="https://www.figma.com/file/fzdBRaw2X49zHuEgF75znO/EBSB---Ui-Pages?node-id=0%3A1"
            />
            <DesignCard
              cardImg={aqg.src}
              title="Ask Quick Global"
              para="Designed the UI for Ask Quick Global, a web app for submitting subject-specific assignments and receiving timed solutions. Created user flows, wireframes, and high-fidelity prototypes in Figma. Focused on a clean, responsive layout with intuitive navigation to streamline task submission, enhance user experience, and support fast, accurate solution delivery within defined time limits."
              figmaLink="https://www.figma.com/file/aGR2E1NXO030d4sUC5fVfg/ASK-QUICK-GLOBAL?node-id=202%3A2"
            />
            <DesignCard
              cardImg={xpraints.src}
              title="Xpraint Web Interface"
              para="Designed the UI for Xpraint's web interface, a product showcase and e-commerce platform for its manufactured paints and tiles. Created user flows, wireframes, and high-fidelity prototypes in Figma. Focused on a visually appealing, organized layout with smooth navigation to enhance product browsing, improve user engagement, and support seamless purchasing experiences."
              figmaLink="https://www.figma.com/file/iiP4VgCssGKZrTsUyVqwi1/Xpraint-Home-page?node-id=41%3A227"
            />

            <div className="home_footer">
              <p>
                Made with 💜 By Mohammad Sahil | © {new Date().getFullYear()}
              </p>
              <p>Email: sahilmejakhas@gmail.com</p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
