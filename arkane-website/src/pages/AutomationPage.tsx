import { motion } from 'framer-motion';
import { Cpu, Server, Shield, Code, Database, Network, RefreshCw, Settings, Zap, Search, Brain, Bot } from 'lucide-react';

const AutomationPage = () => {
  const features = [
    {
      icon: <Server className="h-6 w-6 text-blue-500" />,
      title: 'Infrastructure as Code',
      description: 'Manage your entire infrastructure through version-controlled code with Ansible playbooks.'
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-500" />,
      title: 'Security Automation',
      description: 'Automated security patching, compliance checks, and vulnerability remediation.'
    },
    {
      icon: <Code className="h-6 w-6 text-blue-500" />,
      title: 'CI/CD Integration',
      description: 'Seamless integration with your CI/CD pipelines for automated deployments.'
    },
    {
      icon: <Database className="h-6 w-6 text-blue-500" />,
      title: 'Database Management',
      description: 'Automated database provisioning, backups, and performance optimization.'
    },
    {
      icon: <Network className="h-6 w-6 text-blue-500" />,
      title: 'Network Automation',
      description: 'Automate network configuration, monitoring, and policy enforcement.'
    },
    {
      icon: <RefreshCw className="h-6 w-6 text-blue-500" />,
      title: 'Self-Healing Systems',
      description: 'AI-powered systems that detect and remediate issues automatically.'
    }
  ];

  const aiAgents = [
    {
      icon: <Search className="h-6 w-6" />,
      title: "Network Scanner AI",
      description: "Continuously scans your infrastructure to identify vulnerabilities, misconfigurations, and optimization opportunities."
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Strategic Thinking AI",
      description: "Analyzes patterns and predicts potential issues before they occur, developing proactive maintenance strategies."
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Code Generation AI",
      description: "Automatically writes and optimizes infrastructure code, patches, and automation scripts without human intervention."
    },
    {
      icon: <Bot className="h-6 w-6" />,
      title: "Execution AI",
      description: "Safely implements changes across your infrastructure with intelligent rollback capabilities if issues are detected."
    }
  ];

  return (
    <div className="pt-16 bg-gray-950">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-gray-950 text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
              IT Automation with Ansible
            </h1>
            <p className="mt-6 text-xl text-blue-200 max-w-3xl mx-auto">
              ARKANE's AI-powered automation platform streamlines IT operations and enhances infrastructure reliability.
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Ansible AI Agent */}
      <div className="bg-gray-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Meet ARKANE's AI Automation Agent</h2>
              <p className="text-lg text-gray-300 mb-6">
                Our AI-powered automation agent combines the power of Ansible with advanced machine learning to create self-optimizing infrastructure.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-black text-blue-500 flex items-center justify-center">
                    <Zap className="h-4 w-4" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-white">Intelligent Orchestration</h3>
                    <p className="mt-1 text-gray-400">
                      Automatically prioritizes and schedules tasks based on system load and business impact.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-black text-blue-500 flex items-center justify-center">
                    <Settings className="h-4 w-4" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-white">Predictive Maintenance</h3>
                    <p className="mt-1 text-gray-400">
                      Identifies potential issues before they cause downtime using predictive analytics.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-black text-blue-500 flex items-center justify-center">
                    <Cpu className="h-4 w-4" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-white">Continuous Learning</h3>
                    <p className="mt-1 text-gray-400">
                      Improves over time by learning from past operations and infrastructure patterns.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <button className="px-6 py-3 bg-blue-700 text-white rounded-md font-medium hover:bg-blue-800 transition-colors">
                  Request Demo
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-violet-600 rounded-lg blur opacity-75"></div>
                <div className="relative bg-gray-950 rounded-lg overflow-hidden border border-gray-800">
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex items-center space-x-2">
                        <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                        <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
                        <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="text-gray-400 text-sm">ARKANE Automation Terminal</div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="h-8 bg-gray-900 rounded w-full"></div>
                      <div className="h-40 bg-gray-900 rounded flex items-center justify-center">
                        <Cpu className="h-16 w-16 text-blue-500" />
                      </div>
                      <div className="h-8 bg-gray-900 rounded w-3/4"></div>
                      <div className="h-8 bg-gray-900 rounded w-1/2"></div>
                      <div className="h-8 bg-gray-900 rounded w-5/6"></div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="h-12 bg-blue-700 rounded"></div>
                        <div className="h-12 bg-gray-900 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Features */}
      <div className="bg-gray-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Automation Capabilities</h2>
            <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
              Comprehensive IT automation solutions for modern infrastructure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-800"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-black text-blue-500 mb-5">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Autonomous AI Agents */}
      <div className="bg-gray-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Autonomous AI Agent System</h2>
            <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
              Our multi-agent AI system works autonomously to manage your infrastructure
            </p>
          </div>
          
          <div className="relative mb-16">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            </div>
            
            <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
              {aiAgents.map((agent, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-900 p-6 rounded-lg border border-gray-800 flex flex-col items-center text-center"
                >
                  <div className="h-16 w-16 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-400 mb-4">
                    {agent.icon}
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">{agent.title}</h3>
                  <p className="text-sm text-gray-400">{agent.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-6">How Our Autonomous AI System Works</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-300 mb-4">
                  ARKANE's autonomous AI system represents the next generation of IT automation, moving beyond simple scripted tasks to true artificial intelligence that can observe, think, and act independently.
                </p>
                
                <p className="text-gray-300 mb-4">
                  Our multi-agent system combines specialized AI models that work together seamlessly:
                </p>
                
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Continuous infrastructure scanning and analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Autonomous decision-making based on business priorities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Automatic code generation and deployment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Self-healing capabilities with intelligent rollbacks</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-950 rounded-lg p-6 border border-gray-800">
                <h4 className="text-lg font-medium text-white mb-4">AI Agent Workflow</h4>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-900/50 text-blue-400 flex items-center justify-center mr-3">
                      1
                    </div>
                    <div>
                      <h5 className="text-white font-medium">Network Scanning</h5>
                      <p className="text-sm text-gray-400">AI continuously monitors your infrastructure, identifying patterns and potential issues</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-900/50 text-blue-400 flex items-center justify-center mr-3">
                      2
                    </div>
                    <div>
                      <h5 className="text-white font-medium">Strategic Analysis</h5>
                      <p className="text-sm text-gray-400">Thinking AI evaluates findings and develops optimization strategies</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-900/50 text-blue-400 flex items-center justify-center mr-3">
                      3
                    </div>
                    <div>
                      <h5 className="text-white font-medium">Code Generation</h5>
                      <p className="text-sm text-gray-400">AI writes infrastructure code, patches, and automation scripts</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-900/50 text-blue-400 flex items-center justify-center mr-3">
                      4
                    </div>
                    <div>
                      <h5 className="text-white font-medium">Autonomous Execution</h5>
                      <p className="text-sm text-gray-400">Changes are implemented with intelligent monitoring and rollback capabilities</p>
                    </div>
                  </div>
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
