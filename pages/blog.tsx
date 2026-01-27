import Button from '@mui/material/Button'
import styless from '../styles/Home.module.css'
import styles from '../styles/Blog.module.css'
import Layout from '../components/Layout'
import Blog from '../components/Blog'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Blog | Mohammad Sahil — Thoughts on Code, Design & Innovation
        </title>
        <meta
          name="description"
          content="Read my latest articles on full stack development, design practices, cloud integration, and lessons learned from real-world projects."
        />
      </Head>

      <Layout>
        <div
          className={styless.home_container_container}
          style={{ marginTop: '0' }}
        >
          <div className={styles.blog_container}>
            <h2><span style={{ color: "#fff" }}>Latest Blogs</span><br /><span style={{ fontSize: '16px', fontWeight: '400' }}>Writing About Code & Craft</span></h2>
            <div className="blog_container_blog">
              <div className="row mx-auto my-4">
                <Blog
                  img="https://miro.medium.com/max/950/0*5CQNOotOtymHvncb"
                  link="https://tsharpsahil.medium.com/why-should-you-design-for-failure-2fbafc993a87"
                  para="In the world of DevOps, what do you consider a failure when designing your application as a collection of stateles…"
                  title="Why should you Design for failure?"
                />
                <Blog
                  img="https://miro.medium.com/max/1050/0*U4x3jO0tJuOt2bVQ"
                  link="https://tsharpsahil.medium.com/testing-approaches-and-cloud-native-microservices-e2454e1700c9"
                  para="Do you know how Amazon started? One of the biggest reasons why startups fail is because they design their initial…"
                  title="Testing approaches and Cloud-native microservices"
                />
                <Blog
                  img="https://miro.medium.com/max/1050/0*1KrwD2r2Q_uc8mA1.png"
                  link="https://tsharpsahil.medium.com/project-management-methodologies-and-devops-2a7490adc293"
                  para="Have you ever researched project management methodologies before? Well then, The Agile, Scrum, XP, and Waterfall…"
                  title="Project Management Methodologies and DevOps"
                />
                <Blog
                  img="https://miro.medium.com/max/1050/1*IY5getaYv1gjQduwfWF6ig.png"
                  link="https://tsharpsahil.medium.com/an-introduction-to-devops-7048becba15f"
                  para="When working as a student on a project, you might have come across the word “DevOps”, right? According to a recent…"
                  title="An introduction to DevOps"
                />
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
