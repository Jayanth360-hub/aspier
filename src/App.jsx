import { useState, useCallback } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import SplashScreen from './components/SplashScreen'
import PageTransition from './components/PageTransition'
import Home from './pages/Home'
import UniversityOfMysore from './pages/UniversityOfMysore'
import Aspier from './pages/Aspier'
import AboutDirector from './pages/AboutDirector'
import Facilities from './pages/Facilities'
import Faculty from './pages/Faculty'
import MscCourse from './pages/MscCourse'
import Courses from './pages/Courses'
import Events from './pages/Events'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <PageTransition>
      <Routes location={location}>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="university-of-mysore" element={<UniversityOfMysore />} />
          <Route path="aspier" element={<Aspier />} />
          <Route path="about-director" element={<AboutDirector />} />
          <Route path="facilities" element={<Facilities />} />
          <Route path="faculty" element={<Faculty />} />
          <Route path="msc-course" element={<MscCourse />} />
          <Route path="courses" element={<Courses />} />
          <Route path="events" element={<Events />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </PageTransition>
  )
}

export default function App() {
  const [splashDone, setSplashDone] = useState(false)

  const handleSplashDone = useCallback(() => {
    setSplashDone(true)
  }, [])

  return (
    <>
      {!splashDone && <SplashScreen onDone={handleSplashDone} />}
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </>
  )
}
