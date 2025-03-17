import { Link } from 'react-router-dom';
import { BarChart3, Twitter, Linkedin, GitHub, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <BarChart3 className="h-8 w-8 text-red-600" />
              <span className="text-xl font-bold tracking-wider text-white">ARKANE</span>
            </Link>
            <p className="mt-4 text-gray-400 text-sm">
              Next-generation quantitative trading solutions powered by advanced algorithms and AI.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-violet-400">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-violet-400">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-violet-400">
                <GitHub className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-violet-400">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Solutions</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/algorithms" className="text-gray-400 hover:text-violet-400">
                  Algorithmic Trading
                </Link>
              </li>
              <li>
                <Link to="/investments" className="text-gray-400 hover:text-violet-400">
                  Investment Strategies
                </Link>
              </li>
              <li>
                <Link to="/automation" className="text-gray-400 hover:text-violet-400">
                  IT Automation
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-violet-400">
                  Risk Management
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="#" className="text-gray-400 hover:text-violet-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-violet-400">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-violet-400">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-violet-400">
                  Partners
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="#" className="text-gray-400 hover:text-violet-400">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-violet-400">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-violet-400">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-violet-400">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} ARKANE Financial Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
