import { motion } from 'framer-motion';
import { 
  BarChart2, TrendingUp, Cpu, Shield, Zap, RefreshCw, 
  Database, Lock, Server 
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <BarChart2 className="h-6 w-6 text-blue-400" />,
      title: 'Quantitative Algorithms',
      description: 'Advanced mathematical models that identify market inefficiencies and trading opportunities.'
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-blue-400" />,
      title: 'Investment Strategies',
      description: 'Diversified portfolio management with risk-adjusted returns exceeding market benchmarks.'
    },
    {
      icon: <Cpu className="h-6 w-6 text-blue-400" />,
      title: 'AI Infrastructure',
      description: 'Cutting-edge machine learning models that adapt to changing market conditions.'
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-400" />,
      title: 'Risk Management',
      description: 'Sophisticated risk controls that protect capital during market volatility.'
    },
    {
      icon: <Zap className="h-6 w-6 text-blue-400" />,
      title: 'Low Latency Execution',
      description: 'Microsecond trade execution ensuring optimal entry and exit points.'
    },
    {
      icon: <RefreshCw className="h-6 w-6 text-blue-400" />,
      title: 'Continuous Optimization',
      description: 'Algorithms that self-improve through machine learning feedback loops.'
    },
    {
      icon: <Database className="h-6 w-6 text-blue-400" />,
      title: 'Big Data Analysis',
      description: 'Processing petabytes of market data to identify patterns invisible to humans.'
    },
    {
      icon: <Lock className="h-6 w-6 text-blue-400" />,
      title: 'Enterprise Security',
      description: 'Bank-grade security protocols protecting all trading systems and client data.'
    },
    {
      icon: <Server className="h-6 w-6 text-blue-400" />,
      title: 'IT Automation',
      description: 'Ansible-powered infrastructure management with AI-driven optimization.'
    }
  ];

  return (
    <div className="bg-gray-900 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-blue-400 tracking-wide uppercase">Capabilities</h2>
          <p className="mt-1 text-3xl font-extrabold text-white sm:text-4xl">
            Advanced Financial Technology
          </p>
          <p className="max-w-2xl mt-5 mx-auto text-xl text-gray-300">
            Our proprietary systems combine quantitative analysis, machine learning, and IT automation
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="pt-6"
              >
                <div className="flow-root bg-gray-950 rounded-lg px-6 pb-8 h-full border border-gray-800 hover:shadow-md transition-shadow">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-black rounded-md shadow-lg">
                        {feature.icon}
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-white tracking-tight">{feature.title}</h3>
                    <p className="mt-5 text-base text-gray-400">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
