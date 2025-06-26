import * as React from 'react';
import { useState } from 'react';
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import styles from '../styles/Layout.module.css'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { IconButton } from '@material-ui/core'
import Chat from './Chat';

const Layout = ({ children }) => {
  const [sidebarD, setSidebarD] = useState("none");
  const [navbarD, setNavbarD] = useState("none");

  return (
    <>
      <div className={styles.layout_container}>
        <div className={styles.layout_margin}>
          <div className={styles.layout_topbar}>
            <IconButton onClick={() => setSidebarD(prev => (prev === "none" ? "block" : "none"))} style={{ color: "white" }}><MoreVertIcon style={{ marginLeft: "18px", fontSize: "28px" }} /></IconButton>
            <IconButton onClick={() => setNavbarD(prev => (prev === "none" ? "block" : "none"))} style={{ color: "white", marginRight: 0, marginLeft: "auto" }}><MenuOpenIcon style={{ marginLeft: "auto", marginRight: "18px", fontSize: "28px" }} /></IconButton>
          </div>
          <div className="layout_margin_container d-flex" style={{ borderRadius: "0.6rem", overflow: "hidden" }}>
            <Sidebar
              display={sidebarD}
            />
            <div className={styles.home_container}>
              {children}
            </div>
            <Navbar
              display={navbarD}
            />
          </div>
        </div>
        <Chat />
      </div>
    </>
  )
}

export default Layout