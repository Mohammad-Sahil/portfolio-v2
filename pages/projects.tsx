import { useState } from 'react'
import styless from '../styles/Home.module.css'
import styles from '../styles/Projects.module.css'
import Layout from '../components/Layout'
import Project from '../components/Project'
import projectsArray from '../components/projectsArray.js'
import Head from 'next/head'

export default function Home() {
  const [category, setCategory] = useState('all')

  // Filter projects based on selected category
  const filteredProjects =
    category === 'all'
      ? projectsArray
      : projectsArray.filter((project) => project.cat === category)

  return (
    <>
      <Head>
        <title>
          Projects | Mohammad Sahil — Full Stack Developer Portfolio
        </title>
        <meta
          name="description"
          content="A showcase of my best projects — scalable dashboards, real-time web apps, mobile platforms, and cloud-powered solutions built using React, Next.js, Firebase, Flutter, and more."
        />
      </Head>
      <Layout>
        <div
          className={styless.home_container_container}
          style={{ marginTop: '0' }}
        >
          <div className={styles.project_container}>
            <div
              className={styles.project_header}
              style={{ marginBottom: '1rem' }}
            >
              <div className="row w-100 align-items-center">
                <div className="col-12 col-md-6 text-start py-3">
                  <h2 className="page_title mb-md-0" style={{ color: "#fff" }}>Featured Projects</h2>
                  <p className="m-0 p-0" style={{ fontSize: '16px', fontWeight: '400', color: '#94a3b8' }}>What I've Shipped to Production</p>
                </div>
                <div className="col-12 col-md-6 text-md-end px-0">
                  <div
                    className={styles.category_buttons}
                    style={{ float: 'right' }}
                  >
                    <button
                      className={`${styles.category_btn} ${category === 'all' ? styles.active : ''}`}
                      onClick={() => setCategory('all')}
                    >
                      All
                    </button>
                    <button
                      className={`${styles.category_btn} ${category === 'web' ? styles.active : ''}`}
                      onClick={() => setCategory('web')}
                    >
                      Web
                    </button>
                    <button
                      className={`${styles.category_btn} ${category === 'mobile' ? styles.active : ''}`}
                      onClick={() => setCategory('mobile')}
                    >
                      Mobile
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {filteredProjects.map((item, index) => {
              return (
                <Project
                  key={index}
                  title={item.title}
                  para={item.para}
                  githubLink={item.githubLink}
                  liveLink={item.liveLink}
                  tags={[item.tag1, item.tag2, item.tag3, item.tag4, item.tag5, item.tag6]}
                  projectImg={item.projectImg}
                />
              )
            })}

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
