import { motion } from 'framer-motion';
import { Cpu, BarChart2, Zap, Lock, RefreshCw, TrendingUp } from 'lucide-react';

const Features = () => {
  const features = [
    {
      name: 'Machine Learning',
      description: 'Our algorithms continuously learn and adapt to changing market conditions, improving performance over time.',
      icon: Cpu,
    },
    {
      name: 'Multi-factor Analysis',
      description: 'Analyzes hundreds of market factors simultaneously to identify trading opportunities invisible to human traders.',
      icon: BarChart2,
    },
    {
      name: 'High-Frequency Execution',
      description: 'Microsecond-level trade execution with smart order routing to minimize slippage and market impact.',
      icon: Zap,
    },
    {
      name: 'Advanced Risk Management',
      description: 'Sophisticated risk controls monitor and adjust exposure to various market factors to protect capital.',
      icon: Lock,
    },
    {
      name: 'Continuous Optimization',
      description: 'Algorithms are continuously backtested and optimized using the latest market data and research.',
      icon: RefreshCw,
    },
    {
      name: 'Market-Neutral Strategies',
      description: 'Our strategies can generate returns regardless of overall market direction, providing true diversification.',
      icon: TrendingUp,
    },
  ];

  return (
    <div className="bg-black py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-base font-semibold text-violet-400 tracking-wide uppercase">Advanced Technology</h2>
            <p className="mt-1 text-3xl font-extrabold text-white sm:text-4xl">
              Advanced Financial Technology
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-300">
              Our proprietary technology stack powers our quantitative trading strategies
            </p>
          </motion.div>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="pt-6"
              >
                <div className="flow-root bg-gray-900 rounded-lg px-6 pb-8 h-full border border-gray-800 hover:border-violet-900/50 transition-colors">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-black rounded-md shadow-lg">
                        <feature.icon className="h-6 w-6 text-violet-400" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-white tracking-tight">{feature.name}</h3>
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
