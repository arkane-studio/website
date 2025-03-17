import { motion } from 'framer-motion';
import { Code, Server, Cpu, Database, Lock, RefreshCw } from 'lucide-react';

const AutomationPage = () => {
  return (
    <div className="pt-16 bg-black">
      {/* Header */}
      <div className="bg-gradient-to-r from-black via-black to-violet-950 text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-extrabold sm:text-5xl">
              IT Automation Solutions
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              Streamline your operations with our cutting-edge automation tools and services.
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">
              Comprehensive Automation Services
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
              From infrastructure management to workflow optimization, our solutions drive efficiency and reduce operational costs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Server className="h-8 w-8 text-violet-400" />,
                title: 'Infrastructure Automation',
                description: 'Automate provisioning, scaling, and management of your IT infrastructure with our cloud-native solutions.',
                features: [
                  'Infrastructure as Code (IaC)',
                  'Auto-scaling resources',
                  'Configuration management',
                  'Multi-cloud deployment'
                ]
              },
              {
                icon: <Code className="h-8 w-8 text-violet-400" />,
                title: 'CI/CD Pipeline Automation',
                description: 'Streamline your development workflow with automated testing, building, and deployment processes.',
                features: [
                  'Continuous integration',
                  'Automated testing',
                  'Deployment automation',
                  'Release management'
                ]
              },
              {
                icon: <Database className="h-8 w-8 text-violet-400" />,
                title: 'Data Processing Automation',
                description: 'Automate data collection, processing, and analysis to extract valuable insights efficiently.',
                features: [
                  'ETL process automation',
                  'Real-time data processing',
                  'Automated reporting',
                  'Data validation and cleaning'
                ]
              },
              {
                icon: <Cpu className="h-8 w-8 text-violet-400" />,
                title: 'AI-Powered Automation',
                description: 'Leverage machine learning and AI to automate complex decision-making processes and tasks.',
                features: [
                  'Predictive maintenance',
                  'Anomaly detection',
                  'Natural language processing',
                  'Computer vision solutions'
                ]
              },
              {
                icon: <Lock className="h-8 w-8 text-violet-400" />,
                title: 'Security Automation',
                description: 'Enhance your security posture with automated threat detection, response, and compliance monitoring.',
                features: [
                  'Automated security scanning',
                  'Threat response automation',
                  'Compliance monitoring',
                  'Security patch management'
                ]
              },
              {
                icon: <RefreshCw className="h-8 w-8 text-violet-400" />,
                title: 'Business Process Automation',
                description: 'Streamline repetitive business processes to improve efficiency and reduce human error.',
                features: [
                  'Workflow automation',
                  'Document processing',
                  'Customer service automation',
                  'Approval process automation'
                ]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 rounded-lg overflow-hidden shadow-lg border border-gray-800 hover:shadow-xl hover:border-gray-700 transition-all"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-md bg-black mr-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="text-violet-400 mr-2">•</span>
                        <span className="text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-lg overflow-hidden shadow-xl">
            <div className="px-6 py-12 md:p-12 md:flex md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white md:text-3xl">
                  Ready to automate your operations?
                </h2>
                <p className="mt-3 text-lg text-gray-300">
                  Contact our team to discuss how our automation solutions can transform your business.
                </p>
              </div>
              <div className="mt-8 flex md:mt-0 md:flex-shrink-0">
                <div className="inline-flex rounded-md shadow">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-violet-900 hover:bg-violet-800"
                  >
                    Get Started
                  </a>
                </div>
                <div className="ml-3 inline-flex rounded-md shadow">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-violet-400 bg-black hover:bg-gray-800"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomationPage;
