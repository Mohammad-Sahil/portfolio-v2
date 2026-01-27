import styles from '../styles/Experience.module.css'
import WorkExperienceCard from './WorkExperienceCard'

const Highlight = ({ children }) => (
  <span style={{ fontWeight: 600, color: '#fff' }}>{children}</span>
)


const WorkExperienceArray = [
  {
    id: 1,
    title: 'Contractor',
    company: 'Focus On Concepts',
    link: 'https://focusonconcepts.com/',
    date: 'Nov 2024 — Jan 2025',

    skills: [
      { name: 'Next.js', color: '#fbbf24' },
      { name: 'Tailwind', color: '#06b6d4' },
      { name: 'MUI', color: '#60a5fa' },
      { name: 'Node.js', color: '#22c55e' },
      { name: 'Firebase', color: '#f97316' },
      { name: 'CI/CD', color: '#a78bfa' },
    ],

    list1: (
      <>Designed and developed the official website and admin panel for <Highlight>Focus On Concepts</Highlight> using <Highlight>Next.js</Highlight>, <Highlight>Tailwind</Highlight>, <Highlight>MUI</Highlight>, <Highlight>Node.js</Highlight>, and <Highlight>Firebase</Highlight> to streamline educational content and course management.</>
    ),

    list2: (
      <>Built dynamic pages for each course, implemented <Highlight>CI/CD</Highlight>, and created admin tools for managing <Highlight>live/recorded courses</Highlight>, testimonials, <Highlight>FAQs</Highlight>, contact queries, and student data with <Highlight>Firebase integration</Highlight>.</>
    ),

    list3: (
      <>Improved admin efficiency and boosted site engagement through <Highlight>responsive design</Highlight>, dynamic content handling, and <Highlight>real-time updates</Highlight>, supporting scalable growth for high school students.</>
    ),
  },

  {
    id: 2,
    title: 'Contractor',
    company: 'Just Speak',
    link: 'https://www.just-speak.com/',
    date: 'Jul 2024 — Aug 2024',

    skills: [
      { name: 'Next.js', color: '#fbbf24' },
      { name: 'React', color: '#60a5fa' },
      { name: 'TypeScript', color: '#a78bfa' },
      { name: 'Firebase', color: '#f97316' },
      { name: 'MUI', color: '#22c55e' },
      { name: 'Bootstrap', color: '#06b6d4' },
    ],

    list1: (
      <>Designed and developed the Just Speak website and admin panel using <Highlight>Next.js</Highlight>, <Highlight>MUI</Highlight>, <Highlight>Bootstrap</Highlight>, <Highlight>Node.js</Highlight>, and <Highlight>Firebase</Highlight> to manage events, chapters, and members with a dynamic public interface.</>
    ),

    list2: (
      <>Built dynamic page generation for each new club chapter via the admin panel; integrated <Highlight>CI/CD</Highlight>, <Highlight>Firebase database</Highlight>, and storage to ensure seamless updates and content management.</>
    ),

    list3: (
      <>Enabled <Highlight>real-time content updates</Highlight> and simplified chapter management, boosting user engagement and reducing manual maintenance; contributed to expanding public speaking clubs across multiple cities efficiently.</>
    ),
  },

  {
    id: 3,
    title: 'Full Stack Intern',
    company: 'TalentZ.AI',
    link: 'https://talentz.vercel.app/',
    date: 'Aug 2022 — Feb 2023',

    skills: [
      { name: 'Next.js', color: '#fbbf24' },
      { name: 'Node.js', color: '#22c55e' },
      { name: 'Redux', color: '#a78bfa' },
      { name: 'DynamoDB', color: '#f97316' },
      { name: 'AWS', color: '#60a5fa' },
      { name: 'CI/CD', color: '#06b6d4' },
    ],

    list1: (
      <>Developed a dynamic full-stack job portal for <Highlight>TalentZ.AI</Highlight> using <Highlight>NextJS</Highlight>, <Highlight>MUI</Highlight>, <Highlight>Redux</Highlight>, <Highlight>NodeJS</Highlight>, and <Highlight>DynamoDB</Highlight>, enabling companies, students, and partners to connect seamlessly on a unified platform.</>
    ),

    list2: (
      <>Implemented key features including <Highlight>role-based dashboards</Highlight>, <Highlight>real-time job listings</Highlight>, filter job listings, user authentication, and <Highlight>CI/CD pipelines</Highlight>; ensured high responsiveness and mobile-friendly design across all user categories.</>
    ),

    list3: (
      <>Deployed on <Highlight>AWS</Highlight> with automated workflows, reducing release time; contributed to a <Highlight>60% increase in user engagement</Highlight> and streamlined hiring processes for companies and students.</>
    ),
  },

  {
    id: 4,
    title: 'Contractor',
    company: 'Masterji.online',
    link: 'http://masterji.online/',
    date: 'Jul 2022 — Aug 2022',

    skills: [
      { name: 'Node.js', color: '#22c55e' },
      { name: 'Firebase', color: '#f97316' },
      { name: 'Firestore', color: '#60a5fa' },
      { name: 'Flutter', color: '#06b6d4' },
      { name: 'CRUD', color: '#a78bfa' },
      { name: 'Auth', color: '#fbbf24' },
    ],

    list1: (
      <>Built a fully functional admin panel for <Highlight>MasterJI</Highlight> tailoring app using <Highlight>Node.js</Highlight>, <Highlight>Firebase</Highlight>, and <Highlight>Firestore</Highlight> to manage orders, garments, users, and roles, streamlining backend operations and app control.</>
    ),

    list2: (
      <>Implemented admin authentication, <Highlight>role-based access control</Highlight>, and complete <Highlight>CRUD</Highlight> for all Firestore collections; integrated backend with both the <Highlight>PWA</Highlight> and <Highlight>Flutter</Highlight> mobile app for seamless data sync.</>
    ),

    list3: (
      <>Enhanced operational efficiency through <Highlight>real-time admin tools</Highlight> and intuitive UI; improved turnaround time and order tracking across teams, contributing to smoother customer service and app reliability.</>
    ),
  },

  {
    id: 5,
    title: 'Web Developer Intern',
    company: 'Ask Quick Global',
    link: 'https://askquickglobal.vercel.app/',
    date: 'Jan 2021 — Feb 2021',

    skills: [
      { name: 'React.js', color: '#60a5fa' },
      { name: 'Node.js', color: '#22c55e' },
      { name: 'MongoDB', color: '#f97316' },
      { name: 'MUI', color: '#a78bfa' },
      { name: 'Figma', color: '#06b6d4' },
      { name: 'CSS', color: '#fbbf24' },
    ],

    list1: (
      <>Designed and developed a user-centric <Highlight>React</Highlight> web app for <Highlight>Ask Quick Global</Highlight>, handling both UI/UX in <Highlight>Figma</Highlight> and full-stack development with <Highlight>React.js</Highlight>, <Highlight>Node.js</Highlight>, <Highlight>MongoDB</Highlight>, and <Highlight>MUI</Highlight>.</>
    ),

    list2: (
      <>Built frontend pages like Home, Services, Offers, and Join Us; created backend for assignment submissions, <Highlight>affiliate programs</Highlight>, and tutor applications with seamless form handling and data storage.</>
    ),

    list3: (
      <>Improved user engagement and retention through intuitive navigation, <Highlight>faster load times</Highlight>, and <Highlight>responsive design</Highlight>; supported scalable traffic handling for a growing academic support platform.</>
    ),
  },

  {
    id: 6,
    title: 'Project Lead',
    company: 'VRIDDHI - eSports Fest',
    link: 'https://vriddhi.vercel.app/',
    date: 'Jan 2022 — Feb 2022',

    skills: [
      { name: 'Next.js', color: '#fbbf24' },
      { name: 'MUI', color: '#60a5fa' },
      { name: 'Node.js', color: '#22c55e' },
      { name: 'MongoDB', color: '#f97316' },
      { name: 'Stripe', color: '#a78bfa' },
      { name: 'Vercel', color: '#06b6d4' },
    ],

    list1: (
      <>Designed and developed Vriddhi official eSports event web app from scratch using <Highlight>Next.js</Highlight>, <Highlight>Node.js</Highlight>, and <Highlight>MongoDB</Highlight>, handling both frontend and backend deployment with user-friendly and visually appealing UI.</>
    ),

    list2: (
      <>Built <Highlight>real-time event listings</Highlight> with filters, dynamic routing for individual events, <Highlight>Stripe payment integration</Highlight>, user authentication, and personal dashboards to track registrations and payment status seamlessly.</>
    ),

    list3: (
      <>Attracted <Highlight>10K+ users</Highlight> with a high-performing, mobile-responsive UI; streamlined user experience led to a faster registrations and improved engagement throughout the multi-event tournament.</>
    ),
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
              id={item.id}
              title={item.title}
              company={item.company}
              link={item.link}
              date={item.date}
              list1={item.list1}
              list2={item.list2}
              list3={item.list3}
              skills={item.skills}
            />
          )
        })}
      </div>
    </>
  )
}

export default WorkExperience
