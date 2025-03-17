import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Menu, X, BarChart2 } from 'lucide-react'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <motion.header 
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/90 backdrop-blur-md border-b border-white/5 shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div variants={itemVariants} className="flex items-center">
            <NavLink to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <BarChart2 className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xl font-display font-semibold tracking-wide">ARKANE</span>
            </NavLink>
          </motion.div>
          
          <nav className="hidden md:block">
            <motion.ul variants={navVariants} className="flex space-x-1">
              <motion.li variants={itemVariants}>
                <NavLink to="/" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>Home</NavLink>
              </motion.li>
              <motion.li variants={itemVariants}>
                <NavLink to="/algorithms" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>Algorithms</NavLink>
              </motion.li>
              <motion.li variants={itemVariants}>
                <NavLink to="/investments" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>Investments</NavLink>
              </motion.li>
              <motion.li variants={itemVariants}>
                <NavLink to="/automation" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>Automation</NavLink>
              </motion.li>
              <motion.li variants={itemVariants}>
                <NavLink to="/contact" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>Contact</NavLink>
              </motion.li>
            </motion.ul>
          </nav>
          
          <motion.div variants={itemVariants} className="hidden md:block">
            <NavLink to="/contact" className="btn-primary">
              Get Started
            </NavLink>
          </motion.div>
          
          <button 
            className="md:hidden p-2 rounded-md text-white/70 hover:text-white hover:bg-white/5"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-background-light border-b border-white/5"
        >
          <div className="px-4 py-5 space-y-3">
            <NavLink 
              to="/" 
              className={({isActive}) => `block px-4 py-3 rounded-lg ${isActive ? 'bg-primary/10 text-primary' : 'text-white/70 hover:bg-white/5 hover:text-white'}`} 
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink 
              to="/algorithms" 
              className={({isActive}) => `block px-4 py-3 rounded-lg ${isActive ? 'bg-primary/10 text-primary' : 'text-white/70 hover:bg-white/5 hover:text-white'}`} 
              onClick={() => setIsOpen(false)}
            >
              Algorithms
            </NavLink>
            <NavLink 
              to="/investments" 
              className={({isActive}) => `block px-4 py-3 rounded-lg ${isActive ? 'bg-primary/10 text-primary' : 'text-white/70 hover:bg-white/5 hover:text-white'}`} 
              onClick={() => setIsOpen(false)}
            >
              Investments
            </NavLink>
            <NavLink 
              to="/automation" 
              className={({isActive}) => `block px-4 py-3 rounded-lg ${isActive ? 'bg-primary/10 text-primary' : 'text-white/70 hover:bg-white/5 hover:text-white'}`} 
              onClick={() => setIsOpen(false)}
            >
              Automation
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({isActive}) => `block px-4 py-3 rounded-lg ${isActive ? 'bg-primary/10 text-primary' : 'text-white/70 hover:bg-white/5 hover:text-white'}`} 
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>
            
            <div className="pt-2">
              <NavLink 
                to="/contact" 
                className="w-full btn-primary"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </NavLink>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}

export default Navbar
