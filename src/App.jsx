import Home from './pages/Home'
import About from './pages/About'
import SolutionsPage from './pages/SolutionsPage'
import Tracking from './pages/Tracking'
import BlogsPage from './pages/BlogsPage'
import BlogDetailPage from './pages/BlogDetailPage'
import Contact from './pages/Contact'
import ClientsPage from './pages/ClientsPage'
// import Documents from './pages/Documents'
// import ProhibitedGoods from './pages/ProhibitedGoods'
import PolicyPage from './pages/PolicyPage'
import SolutionDetailPage from './pages/SolutionDetailPage'
import { solutions } from './data/solutions'
import { Routes, Route, Navigate } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import ElevatorLogistics from './pages/ElevatorLogistics'
import WarehouseLogistics from './pages/WarehouseLogistics'

function App() {
  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/solutions" element={<SolutionsPage />} />
      <Route path="/services" element={<Navigate to="/solutions" replace />} />
      <Route path="/tracking" element={<Tracking />} />
      <Route path="/our-clients" element={<ClientsPage />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/privacy-policy" element={<PolicyPage />} />
      <Route path="/terms-and-conditions" element={<PolicyPage />} />
      <Route path="/refund-policy" element={<PolicyPage />} />
      <Route path="/shipping-policy" element={<PolicyPage />} />
      <Route path="/blogs" element={<BlogsPage />} />
      <Route path="/blog/:slug" element={<BlogDetailPage />} />
      <Route path="/elevator-logistics" element={<ElevatorLogistics />} />
      <Route path="/warehouse-services" element={<WarehouseLogistics />} />
      <Route path="/warehousing-fulfillment" element={<Navigate to="/warehouse-services" replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
      {solutions.map((solution) => (
        <Route
          key={solution.slug}
          path={`/${solution.slug}`}
          element={<SolutionDetailPage />}
        />
      ))}
      {/* <Route path="/documents" element={<Documents />} />
      <Route path="/prohibited-goods" element={<ProhibitedGoods />} /> */}
    </Routes>
    </>
  )
}

export default App