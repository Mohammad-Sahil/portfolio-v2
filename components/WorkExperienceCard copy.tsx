import styles from '../styles/Experience.module.css'
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown'

const WorkExperienceCard = ({
  title,
  company,
  link,
  date,
  list1,
  list2,
  list3,
}) => {
  return (
    <div className={styles.experience_card}>
      <div className={styles.experience_container_div}>
        <div className={styles.card_title}>
          <h3>
            {title}
            <a href={link} className="text-text-decoration-none">
              @{company}
            </a>
          </h3>
          <p>{date}</p>
        </div>
        <ul>
          <li>{list1}</li>
          {list2 && <li>{list2}</li>}
          {list3 && <li>{list3}</li>}
        </ul>
      </div>
    </div>
  )
}

export default WorkExperienceCard
