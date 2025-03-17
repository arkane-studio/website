import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <div className="bg-red-950">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span className="block">Ready to elevate your trading?</span>
          <span className="block text-red-300">Start with ARKANE's algorithms today.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-red-900 bg-white hover:bg-gray-100"
            >
              Get started
              <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
            </Link>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <Link
              to="/algorithms"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-800 hover:bg-red-900"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
