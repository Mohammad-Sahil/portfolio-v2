import styles from '../styles/Home.module.css'
import HeroSection from './HeroSection'
import Cards4 from './Cards4'
import AboutSection from './AboutSection'
import FeaturedProjects from './FeaturedProjects'
import InterestsCards from './InterestsCards'

function HomePage() {
  return (
    <div
      className={styles.home_container_container}
      style={{ marginTop: '26px' }}
    >
      <HeroSection />
      <Cards4 />
      <AboutSection />
      <FeaturedProjects />
      <InterestsCards />

      <div className="home_footer">
        <p>Made with 💜 By Mohammad Sahil | © {new Date().getFullYear()}</p>
        <p>Email: sahilmejakhas@gmail.com</p>
      </div>
    </div>
  )
}

export default HomePage
