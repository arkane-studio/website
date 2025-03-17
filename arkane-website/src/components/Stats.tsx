import { motion } from 'framer-motion';
import { TrendingUp, Users, Award, Clock } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: <TrendingUp className="h-8 w-8 text-red-600" />,
      value: '32.7%',
      label: 'Average Annual Return',
      description: 'Across all algorithmic strategies'
    },
    {
      icon: <Users className="h-8 w-8 text-red-600" />,
      value: '500+',
      label: 'Institutional Clients',
      description: 'Trusting our technology globally'
    },
    {
      icon: <Award className="h-8 w-8 text-red-600" />,
      value: '12',
      label: 'Industry Awards',
      description: 'For technological innovation'
    },
    {
      icon: <Clock className="h-8 w-8 text-red-600" />,
      value: '24/7',
      label: 'Market Monitoring',
      description: 'Continuous algorithm optimization'
    }
  ];

  return (
    <div className="bg-gray-900 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Proven Performance Metrics
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
            Our algorithms consistently outperform market benchmarks
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gray-700 mx-auto">
                {stat.icon}
              </div>
              <div className="mt-5 text-center">
                <h3 className="text-3xl font-extrabold text-white">{stat.value}</h3>
                <p className="mt-2 text-lg font-medium text-red-400">{stat.label}</p>
                <p className="mt-1 text-sm text-gray-400">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
