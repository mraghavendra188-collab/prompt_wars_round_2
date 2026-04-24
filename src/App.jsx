import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import { Home as HomeIcon, CalendarDays, ListChecks, HelpCircle, MessageSquare } from 'lucide-react'
import { lazy, Suspense } from 'react'

const Home = lazy(() => import('./pages/Home'))
const Timeline = lazy(() => import('./pages/Timeline'))
const Steps = lazy(() => import('./pages/Steps'))
const FAQ = lazy(() => import('./pages/FAQ'))
const Chat = lazy(() => import('./pages/Chat'))
const Glossary = lazy(() => import('./pages/Glossary'))
const PollingLocator = lazy(() => import('./components/PollingLocator'))

function App() {
  return (
    <Router>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <div id="root-container">
        <main id="main-content">
          <Suspense fallback={<div className="loading-spinner" aria-label="Loading page...">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/timeline" element={<Timeline />} />
              <Route path="/steps" element={<Steps />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/glossary" element={<Glossary />} />
              <Route path="/map" element={<PollingLocator />} />
            </Routes>
          </Suspense>
        </main>
        
        <nav className="bottom-nav">
          <NavLink to="/" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} aria-current={({ isActive }) => isActive ? 'page' : undefined}>
            <HomeIcon size={24} aria-hidden="true" />
            <span>Home</span>
          </NavLink>
          <NavLink to="/timeline" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} aria-current={({ isActive }) => isActive ? 'page' : undefined}>
            <CalendarDays size={24} aria-hidden="true" />
            <span>Timeline</span>
          </NavLink>
          <NavLink to="/steps" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} aria-current={({ isActive }) => isActive ? 'page' : undefined}>
            <ListChecks size={24} aria-hidden="true" />
            <span>Steps</span>
          </NavLink>
          <NavLink to="/faq" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} aria-current={({ isActive }) => isActive ? 'page' : undefined}>
            <HelpCircle size={24} aria-hidden="true" />
            <span>FAQ</span>
          </NavLink>
          <NavLink to="/chat" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} aria-current={({ isActive }) => isActive ? 'page' : undefined}>
            <MessageSquare size={24} aria-hidden="true" />
            <span>Ask AI</span>
          </NavLink>
        </nav>
      </div>
    </Router>
  )
}

export default App
