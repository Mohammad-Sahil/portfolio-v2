import Head from 'next/head'
import HomePage from '../components/HomePage'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Mohammad Sahil — Full Stack Developer</title>
        <meta
          name="description"
          content="Welcome to my portfolio — I'm Mohammad Sahil, a full stack developer building scalable apps with React, Next.js, Firebase, and Flutter."
        />
      </Head>
      <Layout>
        <HomePage />
      </Layout>
    </>
  )
}
