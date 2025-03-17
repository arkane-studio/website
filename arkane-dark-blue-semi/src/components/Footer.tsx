import { BarChart2, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-background-light border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <BarChart2 className="h-6 w-6 text-primary" />
                </div>
                <span className="text-xl font-display font-semibold tracking-wide">ARKANE</span>
              </div>
              <p className="text-white/60 mb-6">
                Pioneering quantitative trading and investment solutions powered by cutting-edge algorithms and AI.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
                  <Twitter size={18} className="text-white/70" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
                  <Linkedin size={18} className="text-white/70" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
                  <Github size={18} className="text-white/70" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li><Link to="/" className="text-white/60 hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/algorithms" className="text-white/60 hover:text-white transition-colors">Algorithms</Link></li>
                <li><Link to="/investments" className="text-white/60 hover:text-white transition-colors">Investments</Link></li>
                <li><Link to="/automation" className="text-white/60 hover:text-white transition-colors">Automation</Link></li>
                <li><Link to="/contact" className="text-white/60 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">Quantitative Trading</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">Investment Management</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">IT Automation</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">AI Solutions</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">Infrastructure Management</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin size={20} className="text-primary flex-shrink-0 mt-1 mr-3" />
                  <span className="text-white/60">123 Finance Street, New York, NY 10001</span>
                </li>
                <li className="flex items-center">
                  <Phone size={20} className="text-primary flex-shrink-0 mr-3" />
                  <span className="text-white/60">+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center">
                  <Mail size={20} className="text-primary flex-shrink-0 mr-3" />
                  <span className="text-white/60">info@arkane-finance.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="py-6 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} ARKANE. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-white/40 hover:text-white/70 text-sm">Privacy Policy</a>
              <a href="#" className="text-white/40 hover:text-white/70 text-sm">Terms of Service</a>
              <a href="#" className="text-white/40 hover:text-white/70 text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
