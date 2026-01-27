import styless from '../styles/Home.module.css'
import styles from '../styles/Session.module.css'
import Layout from '../components/Layout'
import DesignC from '../components/DesignC'

import codehub from '../public/DesignC/codehub.png'
import pes from '../public/DesignC/pes.png'
import orientation from '../public/DesignC/orientation.png'
import stop from '../public/DesignC/stop.png'
import teachers from '../public/DesignC/teachers.png'
import rainbow from '../public/DesignC/rainbow.png'
import smd from '../public/DesignC/smd.png'
import nitraa from '../public/DesignC/nitraa.jpg'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Design | Mohammad Sahil — Logo & Poster Design</title>
        <meta
          name="description"
          content="Explore my design work — thoughtful Logo & Poster Design, clean vector and pixel-perfect fantastic poster designs."
        />
      </Head>
      <Layout>
        <div
          className={styless.home_container_container}
          style={{ marginTop: '0' }}
        >
          <div className={styles.session_container}>
            <h2><span style={{ color: "#fff" }}>Featured Designs</span><br /><span style={{ fontSize: '16px', fontWeight: '400' }}>Curated Graphic Design Projects</span></h2>

            <DesignC
              title1="CodeHub Logo"
              title2="Enigma Series"
              // para1="Sadie never took her eyes off me. She had a dark soul."
              // para2="Sadie never took her eyes off me. She had a dark soul."
              imgLink1={codehub.src}
              imgLink2={pes.src}
              linkA="#"
              linkB="#"
            />
            <DesignC
              title1="Orienatation"
              title2="Day against Nuclear Tests"
              // para1="Sadie never took her eyes off me. She had a dark soul."
              // para2="Sadie never took her eyes off me. She had a dark soul."
              imgLink1={orientation.src}
              imgLink2={stop.src}
              linkA="#"
              linkB="#"
            />
            <DesignC
              title1="Teachers' Day"
              title2="LGBTQ+"
              // para1="Sadie never took her eyes off me. She had a dark soul."
              // para2="Sadie never took her eyes off me. She had a dark soul."
              imgLink1={teachers.src}
              imgLink2={rainbow.src}
              linkA="#"
              linkB="#"
            />
            <DesignC
              title1="NITR Alumni"
              title2="Social Media Posters"
              // para1="Sadie never took her eyes off me. She had a dark soul."
              // para2="Sadie never took her eyes off me. She had a dark soul."
              imgLink1={nitraa.src}
              imgLink2={smd.src}
              linkA="#"
              linkB="#"
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
