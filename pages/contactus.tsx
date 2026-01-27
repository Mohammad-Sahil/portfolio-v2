import { useState } from 'react'
import Button from '@mui/material/Button'
import styless from '../styles/Home.module.css'
import styles from '../styles/Contact.module.css'
import Layout from '../components/Layout'
import PersonIcon from '@mui/icons-material/Person'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import { db } from '../components/firebase'
import { collection, addDoc } from 'firebase/firestore'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Head from 'next/head'
import emailjs from '@emailjs/browser'

// Initialize EmailJS (call once on app load, preferably in your _app.tsx or _app.js)
emailjs.init('hLeOSzIC3767vFN4U')

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [isLoading, setIsLoading] = useState(false)

  interface FormData {
    name: string
    email: string
    message: string
  }

  interface ChangeEvent {
    target: {
      id: string
      value: string
    }
  }

  const handleChange = (e: ChangeEvent): void => {
    const { id, value } = e.target
    setFormData((prev: FormData) => ({
      ...prev,
      [id === 'name' ? 'name' : id === 'email' ? 'email' : 'message']: value,
    }))
  }

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Prepare data with timestamp
      const dataToSubmit = {
        ...formData,
        timestamp: new Date(),
      }

      // Send to Firebase
      const firestorePromise = addDoc(collection(db, 'contactus'), dataToSubmit)

      // Send to EmailJS with template variables
      const emailPromise = emailjs.send(
        'service_stgug7u',
        'template_npweby7',
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date().toLocaleString(),
        }
      )

      // Wait for both operations to complete
      await Promise.all([firestorePromise, emailPromise])

      // Show success toast
      toast.success('Message sent successfully!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })

      // Reset form
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      // Show error toast
      toast.error('Failed to send message. Please try again.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })

      console.error('Error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Head>
        <title>Contact | Mohammad Sahil — Let&apos;s Build Something</title>
        <meta
          name="description"
          content="Interested in collaborating or hiring? Reach out to Mohammad Sahil for freelance or full-time development and design opportunities."
        />
      </Head>
      <Layout>
        <div
          className={styless.home_container_container}
          style={{ marginTop: '0' }}
        >
          <div className={styles.contact_container}>
            <h2><span style={{ color: "#fff" }}>Get in touch</span><br /><span style={{ fontSize: '16px', fontWeight: '400' }}>Let's Build Something Together</span></h2>
            <div>
              <div className={styles.contact_container_div}>
                <form className="px-5 py-4" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">
                      <PersonIcon />
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      aria-describedby="nameHelp"
                      placeholder="Name"
                      required
                      disabled={isLoading}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">
                      <AlternateEmailIcon />
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      aria-describedby="emailHelp"
                      placeholder="Email"
                      required
                      disabled={isLoading}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">
                      <MailOutlineIcon />
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Message"
                      required
                      disabled={isLoading}
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <Button
                      type="submit"
                      className={styles.contact_container_div_button}
                      variant="contained"
                      disabled={isLoading}
                    >
                      {isLoading ? 'SENDING...' : 'SEND MESSAGE'}
                    </Button>
                  </div>
                </form>
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

      {/* Toast container for notifications */}
      <ToastContainer />
    </>
  )
}