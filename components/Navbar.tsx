import React from 'react'
import styles from '../styles/Navbar.module.css'
import {
  HomeOutlined,
  Home,
  AccountTreeOutlined,
  AccountTree,
  WorkOutlineOutlined,
  Work,
  DataObjectOutlined,
  DataObject,
  RssFeedOutlined,
  RssFeed,
  SupervisorAccountOutlined,
  SupervisorAccount,
  DesignServicesOutlined,
  DesignServices,
  PaletteOutlined,
  Palette,
  ContactMailOutlined,
  ContactMail,
  SchoolOutlined,
  School,
} from '@mui/icons-material'

import NavigationItem from './NavigationItem'

const Navbar = ({ display }) => {
  const linkStyle =
    'text-decoration-none d-flex justify-content-center flex-column'
  const aStyle =
    'text-decoration-none mx-auto d-flex flex-column justify-content-center'

  // Navigation items array
  const navigationItems = [
    {
      route: '/',
      text: 'Home',
      icon: HomeOutlined,
      iconFilled: Home,
    },
    {
      route: '/projects',
      text: 'Projects',
      icon: AccountTreeOutlined,
      iconFilled: AccountTree,
    },
    {
      route: '/experience',
      text: 'Experience',
      icon: WorkOutlineOutlined,
      iconFilled: Work,
    },
    {
      route: '/stack',
      text: 'Stack',
      icon: DataObjectOutlined,
      iconFilled: DataObject,
    },
    {
      route: '/blog',
      text: 'Blog',
      icon: RssFeedOutlined,
      iconFilled: RssFeed,
    },
    {
      route: '/por',
      text: 'POR',
      icon: SupervisorAccountOutlined,
      iconFilled: SupervisorAccount,
    },
    {
      route: '/uiux',
      text: 'UI/UX',
      icon: DesignServicesOutlined,
      iconFilled: DesignServices,
    },
    {
      route: '/design',
      text: 'Design',
      icon: PaletteOutlined,
      iconFilled: Palette,
    },
    {
      route: '/contactus',
      text: 'Contact',
      icon: ContactMailOutlined,
      iconFilled: ContactMail,
    },
    {
      route: '/session',
      text: 'Sessions',
      icon: SchoolOutlined,
      iconFilled: School,
    },
  ]

  return (
    <div className={styles.navbar_container} style={{ display: display }}>
      <div className={styles.nav_menu}>
        <ul className="p-0">
          {navigationItems.map((item, index) => {
            return (
              <NavigationItem
                key={index}
                item={item}
                index={index}
                linkStyle={linkStyle}
                aStyle={aStyle}
              />
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Navbar
