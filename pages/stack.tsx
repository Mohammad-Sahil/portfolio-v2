import styless from '../styles/Home.module.css'
import styles from '../styles/Stack.module.css'
import Layout from '../components/Layout'
import stacks from '../components/stack'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Stack | Mohammad Sahil — Tools, Technologies & Skills</title>
        <meta
          name="description"
          content="Explore the full stack of technologies I use — React, Next.js, Node.js, Firebase, Flutter, AWS, GCP, TypeScript, and more."
        />
      </Head>
      <Layout>
        <div
          className={styless.home_container_container}
          style={{ marginTop: '0' }}
        >
          <div className={styles.stack_container}>
            <h2><span style={{ color: "#fff" }}>Tech Stacks</span><br /><span style={{ fontSize: '16px', fontWeight: '400' }}>The Tools Behind My Work</span></h2>
            <div className={styles.stack_container_div}>
              <h4>GENERAL PROGRAMMING</h4>
              <div className="row">
                {stacks
                  .filter((olddata) => {
                    return olddata.category === 'GENERAL PROGRAMMING'
                  })
                  .map((data) => {
                    return (
                      <div key={data.id} className="col-6 col-md-3">
                        <div className={styles.tech_card}>
                          <img src={data.img} alt="Tech Icon" />
                          <p className="m-0 p-0">{data.title}</p>
                        </div>
                      </div>
                    )
                  })}
              </div>
            </div>
            <div className={styles.stack_container_div}>
              <h4>FRAMEWORKS & DATABASES</h4>
              <div className="row">
                {stacks
                  .filter((olddata) => {
                    return olddata.category === 'FRAMEWORKS & DATABASES'
                  })
                  .map((data) => {
                    return (
                      <div key={data.id} className="col-6 col-md-3">
                        <div className={styles.tech_card}>
                          <img src={data.img} alt="Tech Icon" />
                          <p className="m-0 p-0">{data.title}</p>
                        </div>
                      </div>
                    )
                  })}
              </div>
            </div>
            <div className={styles.stack_container_div}>
              <h4>TOOLS & UTILITIES</h4>
              <div className="row">
                {stacks
                  .filter((olddata) => {
                    return olddata.category === 'TOOLS & UTILITIES'
                  })
                  .map((data) => {
                    return (
                      <div key={data.id} className="col-6 col-md-3">
                        <div className={styles.tech_card}>
                          <img src={data.img} alt="Tech Icon" />
                          <p className="m-0 p-0">{data.title}</p>
                        </div>
                      </div>
                    )
                  })}
              </div>
            </div>

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
