import styless from '../styles/Home.module.css'
import styles from '../styles/Session.module.css'
import Layout from '../components/Layout'
import WorkExperience from '../components/WorkExperience'
import Head from 'next/head'

export default function Experience() {
  return (
    <>
      <Head>
        <title>Experience | Mohammad Sahil — Developer Case Studies</title>
        <meta
          name="description"
          content="Hands-on experience building production-ready apps, scalable admin panels, mobile platforms, and real-time dashboards for startups and clients."
        />
      </Head>
      <Layout>
        <div
          className={styless.home_container_container}
          style={{ marginTop: '0' }}
        >
          <div className={styles.session_container}>
            <h2><span style={{ color: "#fff" }}>Work Experience</span><br /><span style={{ fontSize: '16px', fontWeight: '400' }}>Engineering Impact Across Products</span></h2>

            <WorkExperience />
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
