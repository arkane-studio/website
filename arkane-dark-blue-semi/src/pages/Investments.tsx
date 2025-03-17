import { ArrowRight, BarChart2, Briefcase, LineChart, TrendingUp, ChevronRight } from 'lucide-react'
import PortfolioPerformance from '../components/PortfolioPerformance'
import { motion } from 'framer-motion'

const Investments = () => {
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
        <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-background/90 to-background"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div variants={itemVariants} className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-accent/10 text-accent border border-accent/20">
              Portfolio Management
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Investment Management</h1>
            <p className="text-xl text-white/70 mb-8">
              Our investment management services combine algorithmic strategies with expert human oversight to deliver exceptional returns.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Investment Approach */}
      <section className="py-16 bg-background-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={itemVariants}>
              <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                Our Approach
              </div>
              <h2 className="text-3xl font-display font-bold mb-6">Hybrid Investment Strategy</h2>
              <p className="text-white/70 mb-8">
                At ARKANE, we employ a hybrid approach to investment management, combining the precision of algorithmic trading with the strategic insight of experienced portfolio managers.
              </p>
              
              <div className="space-y-8">
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <BarChart2 className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-semibold mb-2">Data-Driven Analysis</h3>
                    <p className="text-white/60">
                      Comprehensive market analysis using proprietary data models and alternative data sources.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-secondary" />
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-semibold mb-2">Risk Management</h3>
                    <p className="text-white/60">
                      Sophisticated risk models that adapt to changing market conditions and volatility regimes.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Briefcase className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-semibold mb-2">Portfolio Construction</h3>
                    <p className="text-white/60">
                      Optimized asset allocation across multiple asset classes and investment strategies.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Investment dashboard" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 glass-card p-4 shadow-xl animate-glow">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <LineChart className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">Risk-Adjusted Return</p>
                    <p className="text-2xl font-bold">Sharpe 2.8</p>
                  </div>
                </div>
              </div>
              
              {/* Background decorative elements */}
              <div className="absolute -z-10 -bottom-10 -left-10 w-64 h-64 bg-accent/10 rounded-full filter blur-3xl"></div>
              <div className="absolute -z-10 -top-10 -right-10 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Manual Investment Portfolio */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary border border-secondary/20">
              Performance Metrics
            </div>
            <h2 className="text-3xl font-display font-bold mb-4">Manual Investment Portfolio</h2>
            <p className="text-white/60">
              Our flagship investment portfolio managed by our team of expert portfolio managers
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-6">Portfolio Allocation</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white/60">Equities</span>
                    <span className="font-medium">45%</span>
                  </div>
                  <div className="w-full bg-background rounded-full h-2.5 overflow-hidden">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white/60">Fixed Income</span>
                    <span className="font-medium">30%</span>
                  </div>
                  <div className="w-full bg-background rounded-full h-2.5 overflow-hidden">
                    <div className="bg-secondary h-2.5 rounded-full" style={{ width: '30%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white/60">Alternatives</span>
                    <span className="font-medium">15%</span>
                  </div>
                  <div className="w-full bg-background rounded-full h-2.5 overflow-hidden">
                    <div className="bg-accent h-2.5 rounded-full" style={{ width: '15%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white/60">Cash</span>
                    <span className="font-medium">10%</span>
                  </div>
                  <div className="w-full bg-background rounded-full h-2.5 overflow-hidden">
                    <div className="bg-neutral h-2.5 rounded-full" style={{ width: '10%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-6">Key Metrics</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center pb-2 border-b border-white/10">
                  <span className="text-white/60">Annualized Return</span>
                  <span className="text-xl font-semibold text-primary">14.8%</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-white/10">
                  <span className="text-white/60">Volatility</span>
                  <span className="text-xl font-semibold">8.2%</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-white/10">
                  <span className="text-white/60">Sharpe Ratio</span>
                  <span className="text-xl font-semibold text-accent">1.8</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/60">Max Drawdown</span>
                  <span className="text-xl font-semibold text-danger">-12.5%</span>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-6">Geographic Exposure</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white/60">North America</span>
                    <span className="font-medium">55%</span>
                  </div>
                  <div className="w-full bg-background rounded-full h-2.5 overflow-hidden">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: '55%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white/60">Europe</span>
                    <span className="font-medium">25%</span>
                  </div>
                  <div className="w-full bg-background rounded-full h-2.5 overflow-hidden">
                    <div className="bg-secondary h-2.5 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white/60">Asia Pacific</span>
                    <span className="font-medium">15%</span>
                  </div>
                  <div className="w-full bg-background rounded-full h-2.5 overflow-hidden">
                    <div className="bg-accent h-2.5 rounded-full" style={{ width: '15%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white/60">Emerging Markets</span>
                    <span className="font-medium">5%</span>
                  </div>
                  <div className="w-full bg-background rounded-full h-2.5 overflow-hidden">
                    <div className="bg-neutral h-2.5 rounded-full" style={{ width: '5%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Portfolio Performance Chart */}
          <motion.div variants={itemVariants}>
            <PortfolioPerformance />
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
            <div className="absolute -z-10 top-0 right-0 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl"></div>
            <div className="absolute -z-10 bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl"></div>
            
            <div className="max-w-3xl mx-auto text-center relative z-10">
              <h2 className="text-3xl font-display font-bold mb-6">Ready to invest with ARKANE?</h2>
              <p className="text-xl text-white/70 mb-8">
                Contact our investment team to discuss how our strategies can help you achieve your financial goals.
              </p>
              <a href="/contact" className="btn-primary">
                Schedule a Consultation <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default Investments
