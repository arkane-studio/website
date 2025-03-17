import { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { ArrowRight, BarChart2, Brain, Cpu, TrendingUp, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

// Generate random performance data
const generatePerformanceData = (volatility: number, trend: number) => {
  const data = [];
  let value = 100;
  
  for (let i = 0; i < 30; i++) {
    const change = (Math.random() - 0.5) * volatility + trend;
    value = Math.max(value * (1 + change / 100), 90);
    
    data.push({
      day: i + 1,
      value: parseFloat(value.toFixed(2))
    });
  }
  
  return data;
};

const algorithms = [
  {
    id: 'alpha',
    name: 'Alpha Momentum',
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    description: 'Trend-following algorithm that capitalizes on market momentum across multiple timeframes.',
    performance: '0.08%',
    data: generatePerformanceData(0.8, 0.1),
    features: [
      'Multi-timeframe analysis',
      'Adaptive position sizing',
      'Dynamic stop-loss mechanisms',
      'Correlation filtering'
    ]
  },
  {
    id: 'quantum',
    name: 'Quantum Edge',
    icon: <BarChart2 className="h-8 w-8 text-primary" />,
    description: 'Statistical arbitrage strategy that identifies pricing inefficiencies across correlated assets.',
    performance: '0.07%',
    data: generatePerformanceData(0.6, 0.09),
    features: [
      'Pair trading execution',
      'Mean-reversion modeling',
      'Cointegration analysis',
      'Real-time spread calculation'
    ]
  },
  {
    id: 'neural',
    name: 'Neural Adaptive',
    icon: <Brain className="h-8 w-8 text-primary" />,
    description: 'Deep learning model that adapts to changing market conditions using pattern recognition.',
    performance: '0.10%',
    data: generatePerformanceData(1.0, 0.12),
    features: [
      'Recurrent neural networks',
      'Sentiment analysis integration',
      'Adaptive learning rate',
      'Anomaly detection'
    ]
  }
];

const Algorithms = () => {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState(algorithms[0]);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 grid-background"></div>
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-background/90 to-background"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div variants={itemVariants} className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20">
              Algorithmic Trading
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Trading Algorithms</h1>
            <p className="text-xl text-white/70 mb-8">
              Our proprietary trading algorithms leverage advanced mathematical models and machine learning to identify market opportunities.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Algorithm Selection */}
      <section className="py-16 bg-background-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {algorithms.map(algo => (
              <button
                key={algo.id}
                onClick={() => setSelectedAlgorithm(algo)}
                className={`glass-card p-6 text-left transition-all duration-300 hover:shadow-glow-sm ${
                  selectedAlgorithm.id === algo.id
                    ? 'border-primary/50 shadow-glow-sm'
                    : 'hover:border-white/10'
                }`}
              >
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mr-4">
                    {algo.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{algo.name}</h3>
                </div>
                <p className="text-white/60 mb-4 line-clamp-2">{algo.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-white/60">Daily Performance</span>
                  <span className="text-lg font-bold text-primary">{algo.performance}</span>
                </div>
              </button>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Algorithm Details */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="glass-card p-8 shadow-lg">
            <div className="flex flex-col md:flex-row justify-between mb-8">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mr-6">
                  {selectedAlgorithm.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-1">{selectedAlgorithm.name}</h2>
                  <p className="text-white/60">{selectedAlgorithm.description}</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="text-right">
                  <p className="text-sm text-white/60">Daily Performance</p>
                  <p className="text-3xl font-bold text-primary">{selectedAlgorithm.performance}</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h3 className="text-xl font-semibold mb-4">Performance Chart</h3>
                <div className="h-80 bg-background/50 rounded-xl p-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={selectedAlgorithm.data}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                      <XAxis 
                        dataKey="day" 
                        label={{ value: 'Day', position: 'insideBottomRight', offset: -10, fill: 'rgba(255,255,255,0.6)' }}
                        stroke="rgba(255,255,255,0.4)"
                        tick={{ fill: 'rgba(255,255,255,0.6)' }}
                      />
                      <YAxis 
                        domain={[95, 105]} 
                        label={{ value: 'Value', angle: -90, position: 'insideLeft', fill: 'rgba(255,255,255,0.6)' }}
                        stroke="rgba(255,255,255,0.4)"
                        tick={{ fill: 'rgba(255,255,255,0.6)' }}
                        width={50}
                      />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'rgba(26, 29, 37, 0.95)', 
                          borderColor: '#2563EB', 
                          borderRadius: '0.5rem',
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                          color: 'white'
                        }}
                        formatter={(value: number) => [`${value}`, 'Value']}
                        labelFormatter={(label) => `Day ${label}`}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="value" 
                        stroke="#2563EB" 
                        strokeWidth={3}
                        dot={false}
                        activeDot={{ r: 6, fill: '#2563EB', stroke: '#fff' }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                <ul className="space-y-4">
                  {selectedAlgorithm.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                        <Cpu className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 p-4 rounded-xl bg-background/50">
                  <h3 className="text-xl font-semibold mb-4">Technical Specifications</h3>
                  <div className="space-y-3 text-white/80">
                    <div className="flex justify-between">
                      <span className="text-white/60">Execution Frequency:</span>
                      <span>High Frequency</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/60">Asset Classes:</span>
                      <span>Equities, Futures, Forex</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/60">Avg. Holding Period:</span>
                      <span>1-3 Days</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/60">Sharpe Ratio:</span>
                      <span>2.4</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-background-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={itemVariants}
            className="glass-card p-12 relative overflow-hidden"
          >
            {/* Background decorative elements */}
            <div className="absolute -z-10 top-0 right-0 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl"></div>
            <div className="absolute -z-10 bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl"></div>
            
            <div className="max-w-3xl mx-auto text-center relative z-10">
              <h2 className="text-3xl font-display font-bold mb-6">Ready to implement our algorithms?</h2>
              <p className="text-xl text-white/70 mb-8">
                Contact our team to discuss how our algorithmic trading solutions can be tailored to your investment needs.
              </p>
              <a href="/contact" className="btn-primary">
                Get in Touch <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default Algorithms
