import React, { useState } from 'react';
import { Mail, Phone, Building2, Calendar, DollarSign, Users, Globe, CheckCircle } from 'lucide-react';

const AISolutionsDashboard = () => {
  const aiSolutions = [
    {
      id: 1,
      name: "Microsoft Copilot",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Microsoft_365_Copilot_Icon.svg/240px-Microsoft_365_Copilot_Icon.svg.png",
      owner: "Microsoft Corporation",
      contactPerson: "Sarah Johnson",
      email: "sarah.johnson@microsoft.com",
      phone: "+1 (425) 882-8080",
      department: "Enterprise Solutions",
      implementationDate: "March 2024",
      licenseType: "Enterprise Annual",
      monthlyCost: 12500,
      activeUsers: 450,
      description: "AI-powered assistant integrated across Microsoft 365 applications including Word, Excel, PowerPoint, and Teams. Enhances productivity through intelligent content generation, data analysis, and workflow automation.",
      features: ["Document Generation", "Data Analysis", "Meeting Summaries", "Email Drafting", "Code Assistance"],
      website: "https://copilot.microsoft.com",
      status: "Active"
    },
    {
      id: 2,
      name: "ChatGPT Enterprise",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/240px-ChatGPT_logo.svg.png",
      owner: "OpenAI",
      contactPerson: "Michael Chen",
      email: "m.chen@openai.com",
      phone: "+1 (415) 231-9988",
      department: "AI Research & Development",
      implementationDate: "January 2024",
      licenseType: "Enterprise Premium",
      monthlyCost: 18000,
      activeUsers: 680,
      description: "Advanced conversational AI platform for enterprise use cases including customer support automation, content creation, research assistance, and strategic planning. Offers enhanced security and data privacy features.",
      features: ["Conversational AI", "Content Creation", "Code Generation", "Research Assistant", "Custom GPTs"],
      website: "https://openai.com/chatgpt/enterprise",
      status: "Active"
    },
    {
      id: 3,
      name: "Adobe Firefly",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Adobe_Firefly_logo.svg/240px-Adobe_Firefly_logo.svg.png",
      owner: "Adobe Inc.",
      contactPerson: "Emma Williams",
      email: "emma.williams@adobe.com",
      phone: "+1 (408) 536-6000",
      department: "Creative & Marketing",
      implementationDate: "May 2024",
      licenseType: "Creative Cloud Teams",
      monthlyCost: 8900,
      activeUsers: 125,
      description: "Generative AI tool for creating and editing images, graphics, and visual content. Seamlessly integrated with Adobe Creative Cloud applications for professional design workflows.",
      features: ["Image Generation", "Text Effects", "Generative Fill", "Style Transfer", "Vector Graphics"],
      website: "https://www.adobe.com/products/firefly",
      status: "Active"
    },
    {
      id: 4,
      name: "GitHub Copilot",
      logo: "https://github.githubassets.com/assets/github-copilot-logo-7e1ae1d4db21.png",
      owner: "GitHub (Microsoft)",
      contactPerson: "David Rodriguez",
      email: "d.rodriguez@github.com",
      phone: "+1 (415) 735-4488",
      department: "Software Development",
      implementationDate: "February 2024",
      licenseType: "Business",
      monthlyCost: 5600,
      activeUsers: 230,
      description: "AI pair programmer that helps developers write code faster with intelligent code suggestions, completions, and explanations. Supports multiple programming languages and frameworks.",
      features: ["Code Completion", "Code Explanation", "Test Generation", "Documentation", "Bug Detection"],
      website: "https://github.com/features/copilot",
      status: "Active"
    },
    {
      id: 5,
      name: "Midjourney",
      logo: "https://styles.redditmedia.com/t5_5cqmdv/styles/communityIcon_5kl6ol1z3ri81.png",
      owner: "Midjourney, Inc.",
      contactPerson: "Lisa Anderson",
      email: "lisa.anderson@midjourney.com",
      phone: "+1 (650) 555-0199",
      department: "Creative & Marketing",
      implementationDate: "June 2024",
      licenseType: "Pro Plan",
      monthlyCost: 3200,
      activeUsers: 45,
      description: "Advanced AI image generation platform creating high-quality artwork and visual content from text descriptions. Ideal for concept art, marketing materials, and creative exploration.",
      features: ["Text-to-Image", "Image Variations", "Style Customization", "High Resolution", "Commercial License"],
      website: "https://www.midjourney.com",
      status: "Active"
    },
    {
      id: 6,
      name: "Jasper AI",
      logo: "https://asset.brandfetch.io/idZAyF9rlg/idm22vBcvK.png",
      owner: "Jasper AI",
      contactPerson: "Robert Martinez",
      email: "r.martinez@jasper.ai",
      phone: "+1 (512) 555-0147",
      department: "Content & Marketing",
      implementationDate: "April 2024",
      licenseType: "Business",
      monthlyCost: 4500,
      activeUsers: 85,
      description: "AI content creation platform specialized in marketing copy, blog posts, social media content, and advertising materials. Includes brand voice customization and SEO optimization.",
      features: ["Content Generation", "SEO Optimization", "Brand Voice", "Multiple Languages", "Templates"],
      website: "https://www.jasper.ai",
      status: "Active"
    },
    {
      id: 7,
      name: "Anthropic Claude",
      logo: "https://www.anthropic.com/_next/image?url=%2Fimages%2Ficons%2Fclaude-app-icon.png&w=96&q=75",
      owner: "Anthropic",
      contactPerson: "Jennifer Thompson",
      email: "j.thompson@anthropic.com",
      phone: "+1 (415) 555-0182",
      department: "AI Research & Development",
      implementationDate: "July 2024",
      licenseType: "Enterprise",
      monthlyCost: 15000,
      activeUsers: 320,
      description: "Advanced AI assistant focused on safety and reliability for enterprise applications. Excels at complex reasoning, analysis, coding, and long-form content generation with strong ethical guidelines.",
      features: ["Advanced Reasoning", "Document Analysis", "Code Generation", "Research Assistant", "Extended Context"],
      website: "https://www.anthropic.com",
      status: "Active"
    },
    {
      id: 8,
      name: "Synthesia",
      logo: "https://asset.brandfetch.io/idAnleGLRt/idMH_TfVzP.png",
      owner: "Synthesia Ltd",
      contactPerson: "Thomas Wright",
      email: "t.wright@synthesia.io",
      phone: "+44 20 3514 0051",
      department: "Learning & Development",
      implementationDate: "August 2024",
      licenseType: "Corporate",
      monthlyCost: 6700,
      activeUsers: 95,
      description: "AI video creation platform that generates professional videos with AI avatars and voiceovers. Ideal for training materials, product demos, and corporate communications in multiple languages.",
      features: ["AI Avatars", "Text-to-Video", "Multi-language", "Custom Branding", "Screen Recording"],
      website: "https://www.synthesia.io",
      status: "Active"
    }
  ];

  const [selectedSolution, setSelectedSolution] = useState(aiSolutions[0]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-slate-800 mb-2">AI Solutions Portfolio</h1>
          <p className="text-slate-600">Manage and monitor your organization's AI tools</p>
        </header>

        <div className="grid grid-cols-12 gap-6">
          {/* Left Sidebar - Solution List */}
          <div className="col-span-3 bg-white rounded-2xl shadow-xl p-6">
            <h2 className="text-xl font-semibold text-slate-800 mb-6">Solutions ({aiSolutions.length})</h2>
            <div className="space-y-3">
              {aiSolutions.map((solution) => (
                <div
                  key={solution.id}
                  onClick={() => setSelectedSolution(solution)}
                  className={`p-4 rounded-xl cursor-pointer transition-all duration-300 flex items-center gap-4 ${
                    selectedSolution.id === solution.id
                      ? 'bg-blue-500 shadow-lg scale-105 transform'
                      : 'bg-slate-50 hover:bg-slate-100 hover:shadow-md'
                  }`}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg p-2 flex items-center justify-center shadow-sm">
                    <img 
                      src={solution.logo} 
                      alt={`${solution.name} logo`}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = '<div class="text-2xl">🤖</div>';
                      }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className={`font-semibold text-sm truncate ${
                      selectedSolution.id === solution.id ? 'text-white' : 'text-slate-800'
                    }`}>
                      {solution.name}
                    </h3>
                    <p className={`text-xs truncate ${
                      selectedSolution.id === solution.id ? 'text-blue-100' : 'text-slate-500'
                    }`}>
                      {solution.owner}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Panel - Solution Details */}
          <div className="col-span-9 space-y-6">
            {/* Header with Logo */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-start gap-6 mb-6">
                <div className="flex-shrink-0 w-20 h-20 bg-slate-50 rounded-2xl p-3 flex items-center justify-center shadow-md">
                  <img 
                    src={selectedSolution.logo} 
                    alt={`${selectedSolution.name} logo`}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<div class="text-4xl">🤖</div>';
                    }}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h2 className="text-3xl font-bold text-slate-800">{selectedSolution.name}</h2>
                    <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
                      <CheckCircle size={16} />
                      {selectedSolution.status}
                    </span>
                  </div>
                  <p className="text-slate-600 text-lg mb-4">{selectedSolution.owner}</p>
                  <p className="text-slate-700 leading-relaxed">{selectedSolution.description}</p>
                </div>
              </div>
              
              <div className="pt-4 border-t border-slate-200">
                <a 
                  href={selectedSolution.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                >
                  <Globe size={18} />
                  Visit Website
                </a>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-semibold text-slate-800 mb-6">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Users className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wide mb-1">Contact Person</p>
                    <p className="text-slate-800 font-semibold">{selectedSolution.contactPerson}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Mail className="text-green-600" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wide mb-1">Email</p>
                    <a href={`mailto:${selectedSolution.email}`} className="text-slate-800 font-semibold hover:text-blue-600">
                      {selectedSolution.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Phone className="text-purple-600" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wide mb-1">Phone</p>
                    <a href={`tel:${selectedSolution.phone}`} className="text-slate-800 font-semibold hover:text-blue-600">
                      {selectedSolution.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Building2 className="text-orange-600" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wide mb-1">Department</p>
                    <p className="text-slate-800 font-semibold">{selectedSolution.department}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Solution Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-6">Subscription Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                    <span className="text-slate-600">License Type</span>
                    <span className="text-slate-800 font-semibold">{selectedSolution.licenseType}</span>
                  </div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                    <span className="text-slate-600">Monthly Cost</span>
                    <span className="text-slate-800 font-semibold">${selectedSolution.monthlyCost.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                    <span className="text-slate-600">Active Users</span>
                    <span className="text-slate-800 font-semibold">{selectedSolution.activeUsers}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Implementation Date</span>
                    <span className="text-slate-800 font-semibold">{selectedSolution.implementationDate}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-6">Key Features</h3>
                <div className="space-y-2">
                  {selectedSolution.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                      <CheckCircle className="text-green-500 flex-shrink-0" size={18} />
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AISolutionsDashboard;