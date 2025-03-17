import { ArrowRight, Bot, Code, Database, Lock, Server, Shield, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

const Automation = () => {
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
        <div className="absolute inset-0 bg-gradient-radial from-secondary/5 via-background/90 to-background"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div variants={itemVariants} className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary border border-secondary/20">
              Infrastructure Management
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">IT Automation</h1>
            <p className="text-xl text-white/70 mb-8">
              ARKANE's AI-powered infrastructure management with Ansible for seamless operations and enhanced security.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Main Features */}
      <section className="py-16 bg-background-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20">
              Intelligent Automation
            </div>
            <h2 className="text-3xl font-display font-bold mb-4">Ansible AI-Agent</h2>
            <p className="text-white/60">
              Our proprietary AI-Agent for managing IT infrastructure combines the power of Ansible with advanced machine learning
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 hover:shadow-glow transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-6">
                <Server className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Infrastructure as Code</h3>
              <p className="text-white/60 mb-6">
                Automated provisioning and configuration management across cloud and on-premises environments.
              </p>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                    <ArrowRight className="h-3 w-3 text-primary" />
                  </div>
                  <span>Multi-cloud support</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                    <ArrowRight className="h-3 w-3 text-primary" />
                  </div>
                  <span>Version-controlled configurations</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                    <ArrowRight className="h-3 w-3 text-primary" />
                  </div>
                  <span>Idempotent operations</span>
                </li>
              </ul>
            </div>
            
            <div className="glass-card p-8 hover:shadow-glow transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center mb-6">
                <Bot className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">AI-Driven Automation</h3>
              <p className="text-white/60 mb-6">
                Machine learning algorithms that optimize infrastructure performance and predict potential issues.
              </p>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center mr-3">
                    <ArrowRight className="h-3 w-3 text-secondary" />
                  </div>
                  <span>Predictive maintenance</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center mr-3">
                    <ArrowRight className="h-3 w-3 text-secondary" />
                  </div>
                  <span>Anomaly detection</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center mr-3">
                    <ArrowRight className="h-3 w-3 text-secondary" />
                  </div>
                  <span>Self-healing systems</span>
                </li>
              </ul>
            </div>
            
            <div className="glass-card p-8 hover:shadow-glow transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center mb-6">
                <Shield className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Security Automation</h3>
              <p className="text-white/60 mb-6">
                Continuous security monitoring and automated remediation of vulnerabilities and compliance issues.
              </p>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center mr-3">
                    <ArrowRight className="h-3 w-3 text-accent" />
                  </div>
                  <span>Compliance enforcement</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center mr-3">
                    <ArrowRight className="h-3 w-3 text-accent" />
                  </div>
                  <span>Vulnerability scanning</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center mr-3">
                    <ArrowRight className="h-3 w-3 text-accent" />
                  </div>
                  <span>Automated patching</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary border border-secondary/20">
              Process
            </div>
            <h2 className="text-3xl font-display font-bold mb-4">How It Works</h2>
            <p className="text-white/60">
              Our AI-Agent seamlessly integrates with your existing infrastructure to provide intelligent automation
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="glass-card p-8 text-center relative">
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">1</div>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Assessment</h3>
              <p className="text-white/60">
                Comprehensive analysis of your current infrastructure and automation needs.
              </p>
            </div>
            
            <div className="glass-card p-8 text-center relative">
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">2</div>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Implementation</h3>
              <p className="text-white/60">
                Deployment of Ansible playbooks and AI-Agent integration with your systems.
              </p>
            </div>
            
            <div className="glass-card p-8 text-center relative">
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">3</div>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Learning</h3>
              <p className="text-white/60">
                AI-Agent learns from your environment to optimize operations and security.
              </p>
            </div>
            
            <div className="glass-card p-8 text-center relative">
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">4</div>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Continuous Improvement</h3>
              <p className="text-white/60">
                Ongoing optimization and adaptation to changing infrastructure needs.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Use Cases */}
      <section className="py-16 bg-background-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={itemVariants}>
              <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-accent/10 text-accent border border-accent/20">
                Applications
              </div>
              <h2 className="text-3xl font-display font-bold mb-6">Use Cases</h2>
              <p className="text-white/70 mb-8">
                Our AI-powered automation solutions are designed to address a wide range of IT infrastructure challenges.
              </p>
              
              <div className="space-y-8">
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Database className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-semibold mb-2">Financial Services Infrastructure</h3>
                    <p className="text-white/60">
                      Secure, compliant, and high-performance infrastructure for trading systems and financial applications.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                      <Lock className="h-6 w-6 text-secondary" />
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-semibold mb-2">Security Operations</h3>
                    <p className="text-white/60">
                      Automated security monitoring, incident response, and compliance management.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Code className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-semibold mb-2">DevOps Acceleration</h3>
                    <p className="text-white/60">
                      Streamlined CI/CD pipelines and infrastructure automation for development teams.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Server room" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 glass-card p-4 shadow-xl animate-glow">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Server className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">Automation Efficiency</p>
                    <p className="text-2xl font-bold">+85%</p>
                  </div>
                </div>
              </div>
              
              {/* Background decorative elements */}
              <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-secondary/10 rounded-full filter blur-3xl"></div>
              <div className="absolute -z-10 -top-10 -left-10 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={itemVariants}
            className="glass-card p-12 relative overflow-hidden"
          >
            {/* Background decorative elements */}
            <div className="absolute -z-10 top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl"></div>
            <div className="absolute -z-10 bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl"></div>
            
            <div className="max-w-3xl mx-auto text-center relative z-10">
              <h2 className="text-3xl font-display font-bold mb-6">Ready to automate your infrastructure?</h2>
              <p className="text-xl text-white/70 mb-8">
                Contact our team to learn how our AI-powered automation solutions can transform your IT operations.
              </p>
              <a href="/contact" className="btn-primary">
                Schedule a Demo <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default Automation
