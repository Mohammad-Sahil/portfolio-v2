import styles from '../styles/Experience.module.css'
import WorkExperienceCard from './WorkExperienceCard'

const WorkExperienceArray = [
  {
    title: 'Contractor',
    company: 'Focus On Concepts',
    link: 'https://focusonconcepts.com/',
    date: 'November, 2024 - January, 2025',
    list1:
      'Designed and developed the official website and admin panel for Focus On Concepts using Next.js, Tailwind, MUI, Node.js, and Firebase to streamline educational content and course management.',
    list2:
      'Built dynamic pages for each course, implemented CI/CD, and created admin tools for managing live/recorded courses, testimonials, FAQs, contact queries, and student data with Firebase integration.',
    list3:
      'Improved admin efficiency and boosted site engagement through responsive design, dynamic content handling, and real-time updates, supporting scalable growth for high school students.',
  },
  {
    title: 'Contractor',
    company: 'Just Speak',
    link: 'https://www.just-speak.com/',
    date: 'July, 2024 - August, 2024',
    list1:
      'Designed and developed the Just Speak website and admin panel using Next.js, MUI, Bootstrap, Node.js, and Firebase to manage events, chapters, and members with a dynamic public interface.',
    list2:
      'Built dynamic page generation for each new club chapter via the admin panel; integrated CI/CD, Firebase database, and storage to ensure seamless updates and content management.',
    list3:
      'Enabled real-time content updates and simplified chapter management, boosting user engagement and reducing manual maintenance; contributed to expanding public speaking clubs across multiple cities efficiently.',
  },
  {
    title: 'Full Stack Intern',
    company: 'TalentZ.AI',
    // link: "https://www.talentz.ai/",
    link: 'https://talentz.vercel.app/',
    date: 'August, 2022 - February, 2023',
    list1:
      'Developed a dynamic full-stack job portal for TalentZ.AI using NextJS, MUI, Redux, NodeJS, and DynamoDB, enabling companies, students, and partners to connect seamlessly on a unified platform.',
    list2:
      'Implemented key features including role-based dashboards, real-time job listings, filter job listings, user authentication, and CI/CD pipelines; ensured high responsiveness and mobile-friendly design across all user categories.',
    list3:
      'Deployed on AWS with automated workflows, reducing release time; contributed to a 60% increase in user engagement and streamlined hiring processes for companies and students.',
  },
  {
    title: 'Contractor',
    company: 'Masterji.online',
    link: 'http://masterji.online/',
    date: 'July, 2022 - August, 2022',
    list1:
      'Built a fully functional admin panel for MasterJI tailoring app using Node.js, Firebase, and Firestore to manage orders, garments, users, and roles, streamlining backend operations and app control.',
    list2:
      'Implemented admin authentication, role-based access control, and complete CRUD for all Firestore collections; integrated backend with both the PWA and Flutter mobile app for seamless data sync.',
    list3:
      'Enhanced operational efficiency through real-time admin tools and intuitive UI; improved turnaround time and order tracking across teams, contributing to smoother customer service and app reliability.',
  },
  {
    title: 'Web Developer Intern',
    company: 'Ask Quick Global',
    link: 'https://askquickglobal.vercel.app/',
    date: 'January 2021 - February, 2021',
    list1:
      'Designed and developed a user-centric React web app for Ask Quick Global, handling both UI/UX in Figma and full-stack development with React.js, Node.js, MongoDB, and MUI.',
    list2:
      'Built frontend pages like Home, Services, Offers, and Join Us; created backend for assignment submissions, affiliate programs, and tutor applications with seamless form handling and data storage.',
    list3:
      'Improved user engagement and retention through intuitive navigation, faster load times, and responsive design; supported scalable traffic handling for a growing academic support platform.',
  },
  {
    title: 'Project Lead',
    company: 'VRIDDHI - eSports Fest',
    link: 'https://vriddhi.vercel.app/',
    date: 'January 2022 - February, 2022',
    list1:
      'Designed and developed Vriddhi official eSports event web app from scratch using Next.js, Node.js, and MongoDB, handling both frontend and backend deployment with user-friendly and visually appealing UI.',
    list2:
      'Built real-time event listings with filters, dynamic routing for individual events, Stripe payment integration, user authentication, and personal dashboards to track registrations and payment status seamlessly.',
    list3:
      'Attracted 10K+ users with a high-performing, mobile-responsive UI; streamlined user experience led to a faster registrations and improved engagement throughout the multi-event tournament.',
  },
]

const WorkExperience = () => {
  return (
    <>
      <div className="row">
        {WorkExperienceArray.map((item, index) => {
          return (
            <WorkExperienceCard
              key={index}
              title={item.title}
              company={item.company}
              link={item.link}
              date={item.date}
              list1={item.list1}
              list2={item.list2}
              list3={item.list3}
            />
          )
        })}
      </div>
    </>
  )
}

export default WorkExperience
