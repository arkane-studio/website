import { ArrowRight, BarChart2, Cpu, LineChart, Lock, Server, TrendingUp, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AlgorithmPerformance from '../components/AlgorithmPerformance'

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 grid-background"></div>
        <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-background/80 to-background"></div>
        
        {/* Floating elements */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl animate-float opacity-30"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl animate-float opacity-20" style={{ animationDelay: '2s' }}></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <motion.div 
            className="max-w-3xl"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20">
              Next-Generation Quantitative Trading
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight"
              variants={itemVariants}
            >
              Pioneering <span className="text-gradient">Algorithmic Trading</span> & Investment Solutions
            </motion.h1>
            
            <motion.p 
              className="text-xl text-white/70 mb-8"
              variants={itemVariants}
            >
              ARKANE leverages cutting-edge algorithms and AI to deliver exceptional trading performance and automated infrastructure management.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              variants={itemVariants}
            >
              <Link to="/algorithms" className="btn-primary">
                Explore Our Algorithms
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/contact" className="btn-outline">
                Schedule a Demo
              </Link>
            </motion.div>
            
            <motion.div 
              className="mt-12 flex flex-wrap gap-8 text-white/60"
              variants={itemVariants}
            >
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm">Annual Return</p>
                  <p className="text-xl font-semibold text-white">+18.7%</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <LineChart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm">Sharpe Ratio</p>
                  <p className="text-xl font-semibold text-white">2.4</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <Lock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm">Max Drawdown</p>
                  <p className="text-xl font-semibold text-white">-8.3%</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-24 bg-background-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary border border-secondary/20">
              Our Services
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Comprehensive Solutions for Financial Markets</h2>
            <p className="text-white/60">
              Leveraging advanced technology to deliver superior results across trading, investment, and infrastructure management
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="glass-card p-8 hover:shadow-glow transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-6">
                <BarChart2 className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Quantitative Trading</h3>
              <p className="text-white/60 mb-6">
                Data-driven trading strategies that leverage statistical models and machine learning to identify market opportunities.
              </p>
              <Link to="/algorithms" className="inline-flex items-center text-primary hover:text-primary-light transition-colors">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="glass-card p-8 hover:shadow-glow transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center mb-6">
                <TrendingUp className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Investment Management</h3>
              <p className="text-white/60 mb-6">
                Sophisticated portfolio management combining algorithmic strategies with expert human oversight.
              </p>
              <Link to="/investments" className="inline-flex items-center text-secondary hover:text-secondary-light transition-colors">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
              className="glass-card p-8 hover:shadow-glow transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center mb-6">
                <Server className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-4">IT Automation</h3>
              <p className="text-white/60 mb-6">
                AI-powered infrastructure management with Ansible for seamless operations and enhanced security.
              </p>
              <Link to="/automation" className="inline-flex items-center text-accent hover:text-accent-light transition-colors">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Algorithm Performance Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20">
              Performance Metrics
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Our Trading Algorithms</h2>
            <p className="text-white/60">
              Explore the performance of our proprietary trading algorithms designed to capitalize on market inefficiencies
            </p>
          </motion.div>
          
          <AlgorithmPerformance />
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-24 bg-background-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-accent/10 text-accent border border-accent/20">
                Why Choose ARKANE
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">Cutting-Edge Technology for Superior Results</h2>
              
              <div className="space-y-8">
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <LineChart className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-semibold mb-2">Advanced Algorithms</h3>
                    <p className="text-white/60">
                      Proprietary trading algorithms developed by a team of mathematicians, physicists, and financial experts.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                      <Cpu className="h-6 w-6 text-secondary" />
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-semibold mb-2">AI-Powered Analysis</h3>
                    <p className="text-white/60">
                      Machine learning models that adapt to changing market conditions and identify emerging patterns.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Lock className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-semibold mb-2">Robust Security</h3>
                    <p className="text-white/60">
                      Enterprise-grade security protocols protecting your investments and sensitive financial data.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Trading dashboard" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 glass-card p-4 shadow-xl animate-glow">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">Average Annual Return</p>
                    <p className="text-2xl font-bold">+18.7%</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 glass-card p-4 shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <LineChart className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">Sharpe Ratio</p>
                    <p className="text-2xl font-bold">2.4</p>
                  </div>
                </div>
              </div>
              
              {/* Background decorative elements */}
              <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl"></div>
              <div className="absolute -z-10 -top-10 -left-10 w-64 h-64 bg-secondary/10 rounded-full filter blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="glass-card p-12 relative overflow-hidden"
          >
            {/* Background decorative elements */}
            <div className="absolute -z-10 top-0 right-0 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl"></div>
            <div className="absolute -z-10 bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl"></div>
            
            <div className="max-w-3xl mx-auto text-center relative z-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Ready to elevate your trading?</h2>
              <p className="text-xl text-white/70 mb-8">
                Join ARKANE today and experience the power of algorithmic trading and AI-driven investment strategies.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="btn-primary">
                  Get Started
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
                <Link to="/algorithms" className="btn-outline">
                  Learn More
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
