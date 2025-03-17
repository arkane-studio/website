import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 border-t border-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-bold text-white">
              <span className="text-violet-500">ARKANE</span>
            </Link>
            <p className="mt-4 text-gray-400 max-w-md">
              ARKANE combines cutting-edge quantitative trading algorithms with blockchain technology to revolutionize financial markets and deliver exceptional returns.
            </p>
            <div className="mt-6 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-violet-500">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-violet-500">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-violet-500">
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-violet-500">
                <span className="sr-only">Email</span>
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Solutions</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/algorithms" className="text-base text-gray-400 hover:text-violet-400">
                  Algorithmic Trading
                </Link>
              </li>
              <li>
                <Link to="/investments" className="text-base text-gray-400 hover:text-violet-400">
                  Investment Strategies
                </Link>
              </li>
              <li>
                <Link to="/automation" className="text-base text-gray-400 hover:text-violet-400">
                  IT Automation
                </Link>
              </li>
              <li>
                <a href="#" className="text-base text-gray-400 hover:text-violet-400">
                  Blockchain Solutions
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-base text-gray-400 hover:text-violet-400">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-400 hover:text-violet-400">
                  Careers
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-base text-gray-400 hover:text-violet-400">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-base text-gray-400 hover:text-violet-400">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-900 pt-8">
          <p className="text-base text-gray-500 text-center">
            &copy; {new Date().getFullYear()} ARKANE Financial Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
