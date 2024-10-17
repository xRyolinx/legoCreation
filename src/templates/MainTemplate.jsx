import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import ScrollToTop from '../utils/ScrollToTop'
import Background from '../components/Background'

const MainTemplate = () => {
  return (
    <>
      <Background/>
      <ScrollToTop />
      <Navbar />
      <Outlet />
    </>
  )
}

export default MainTemplate