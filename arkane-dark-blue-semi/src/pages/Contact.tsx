import { useState } from 'react'
import { Mail, MapPin, Phone, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: 'algorithms'
  })
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData)
    alert('Thank you for your message. We will get back to you shortly.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
      service: 'algorithms'
    })
  }
  
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
              Get In Touch
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-white/70 mb-8">
              Get in touch with our team to learn more about our services and how we can help you achieve your goals.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="py-16 bg-background-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div variants={itemVariants}>
              <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                Send a Message
              </div>
              <h2 className="text-3xl font-display font-bold mb-6">Get in Touch</h2>
              <p className="text-white/70 mb-8">
                Fill out the form below and one of our experts will get back to you as soon as possible.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-white/70 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-white/70 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your Company"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-white/70 mb-2">
                    Service of Interest *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="algorithms">Trading Algorithms</option>
                    <option value="investments">Investment Management</option>
                    <option value="automation">IT Automation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="btn-primary w-full md:w-auto"
                  >
                    Send Message
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </form>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <div className="glass-card p-8 shadow-lg mb-8">
                <h3 className="text-2xl font-display font-semibold mb-8">Contact Information</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="ml-6">
                      <h4 className="text-lg font-semibold mb-2">Our Location</h4>
                      <p className="text-white/60">
                        123 Finance Street<br />
                        New York, NY 10001<br />
                        United States
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                        <Mail className="h-6 w-6 text-secondary" />
                      </div>
                    </div>
                    <div className="ml-6">
                      <h4 className="text-lg font-semibold mb-2">Email Us</h4>
                      <p className="text-white/60">
                        info@arkane-finance.com<br />
                        support@arkane-finance.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                        <Phone className="h-6 w-6 text-accent" />
                      </div>
                    </div>
                    <div className="ml-6">
                      <h4 className="text-lg font-semibold mb-2">Call Us</h4>
                      <p className="text-white/60">
                        +1 (555) 123-4567<br />
                        +1 (555) 987-6543
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="rounded-xl overflow-hidden h-80 shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.0059418846361!3d40.74127904379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sNew%20York%2C%20NY%2010001!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary border border-secondary/20">
              Common Questions
            </div>
            <h2 className="text-3xl font-display font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-white/60">
              Find answers to the most common questions about our services
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="glass-card p-6 hover:shadow-glow-sm transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3">What is algorithmic trading?</h3>
                <p className="text-white/60">
                  Algorithmic trading uses computer programs following a defined set of instructions (an algorithm) to place trades. The algorithms are based on timing, price, quantity, or any mathematical model.
                </p>
              </div>
              
              <div className="glass-card p-6 hover:shadow-glow-sm transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3">What minimum investment is required?</h3>
                <p className="text-white/60">
                  Our investment services typically require a minimum investment of $250,000, but this can vary depending on the specific strategy and service. Please contact us for more details.
                </p>
              </div>
              
              <div className="glass-card p-6 hover:shadow-glow-sm transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3">How does your IT automation service work?</h3>
                <p className="text-white/60">
                  Our IT automation service combines Ansible with our proprietary AI-Agent to automate infrastructure management, security operations, and compliance. We begin with an assessment of your current environment and then implement tailored automation solutions.
                </p>
              </div>
              
              <div className="glass-card p-6 hover:shadow-glow-sm transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3">What makes ARKANE different from other firms?</h3>
                <p className="text-white/60">
                  ARKANE stands out through our integrated approach combining quantitative trading expertise with advanced IT automation capabilities. Our proprietary algorithms and AI-driven infrastructure management provide a unique advantage in both performance and operational efficiency.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default Contact
