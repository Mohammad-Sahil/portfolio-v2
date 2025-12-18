import styless from '../styles/Home.module.css'
import styles from '../styles/Session.module.css'
import Layout from '../components/Layout'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Sessions | Mohammad Sahil — Talks, Workshops & Live Events
        </title>
        <meta
          name="description"
          content="Join my sessions and workshops covering React, Flutter, Firebase, design systems, and the full stack dev journey from imagination to execution."
        />
      </Head>

      <Layout>
        <div
          className={styless.home_container_container}
          style={{ marginTop: '0' }}
        >
          <div className={styles.session_container}>
            <h2>Talks & Sessions</h2>
            <div className={styles.session_container_div}>Coming Soon</div>
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
