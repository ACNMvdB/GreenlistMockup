import React, { useEffect, useMemo, useState } from 'react';
import { Users, Shield, Layers, Zap, Lock, ExternalLink, Target, Search, DollarSign, BookOpen } from 'lucide-react';

// Extract data outside component to avoid re-creation on each render
const aiSolutions = [
  {
    id: 1,
    name: 'Copilot M365',
    version: 'Enterprise v2.1',
    logo: 'https://images.seeklogo.com/logo-png/62/1/microsoft-365-copilot-logo-png_seeklogo-621257.png',
    riskLevel: 'Low',
    toolType: 'Enterprise Productivity',
    primaryCapability: 'Text to Text',
    functions: ['Document Generation', 'Data Analysis', 'Email Composition', 'Meeting Summaries'],
    description:
      'AI-powered assistant integrated across Microsoft 365 applications including Word, Excel, PowerPoint, Teams, and Outlook. Enhances productivity through intelligent content generation, data analysis, and workflow automation within your existing M365 environment.',
    deploymentType: 'No code / Ready to use',
    cost: 'License Cost - $30/user/month',
    expectedUseCase:
      'Document creation in Word, data analysis in Excel, presentation building in PowerPoint, meeting summaries in Teams, email drafting in Outlook',
    tipsheet: 'https://support.microsoft.com/microsoft-365-copilot',
    leadContacts: ['Daphne Coates'],
    howToAccess:
      'Available through your Microsoft 365 account. Click the Copilot icon in any M365 app (Word, Excel, PowerPoint, Teams, Outlook). Contact IT for license assignment.',

    owner: 'Microsoft Corporation',
    contactPerson: 'Sarah Johnson',
    email: 'sarah.johnson@microsoft.com',
    phone: '+1 (425) 882-8080',
    department: 'Enterprise Solutions',
    implementationDate: 'March 2024',
    licenseType: 'Enterprise Annual',
    monthlyCost: 12500,
    activeUsers: 450,
    features: ['Document Generation', 'Data Analysis', 'Meeting Summaries', 'Email Drafting'],
    website: 'https://www.microsoft.com/microsoft-365/copilot',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Adobe Firefly',
    version: 'v3.0',
    logo: 'https://www.adobe.com/cc-shared/assets/img/firefly.svg',
    riskLevel: 'Medium',
    toolType: 'Enterprise Productivity',
    primaryCapability: 'Text to Image',
    functions: ['Image Generation', 'Image Editing', 'Graphic Design', 'Visual Content Creation'],
    description:
      'Generative AI tool for creating and editing images, graphics, and visual content. Seamlessly integrated with Adobe Creative Cloud applications for professional design workflows. Trained on licensed content for commercial safety.',
    deploymentType: 'Low code',
    cost: 'License Cost - $50/user/month',
    expectedUseCase:
      'Marketing materials, social media content, internal presentations, concept design, brand asset creation',
    tipsheet: 'https://helpx.adobe.com/firefly',
    leadContacts: ['Oliver Redington'],
    howToAccess:
      'Access through Adobe Creative Cloud desktop app or visit firefly.adobe.com. Requires Creative Cloud subscription. Integrated into Photoshop, Illustrator, and Express.',

    owner: 'Adobe Inc.',
    contactPerson: 'Emma Williams',
    email: 'emma.williams@adobe.com',
    phone: '+1 (408) 536-6000',
    department: 'Creative & Marketing',
    implementationDate: 'May 2024',
    licenseType: 'Creative Cloud Teams',
    monthlyCost: 8900,
    activeUsers: 125,
    features: ['Image Generation', 'Text Effects', 'Generative Fill', 'Style Transfer'],
    website: 'https://www.adobe.com/products/firefly',
    status: 'Active',
  },
  {
    id: 3,
    name: 'Azure Databricks AI Assistant',
    version: 'v1.2',
    logo: 'https://www.databricks.com/sites/default/files/2024-06/db-assistant-header-graphic.png?v=1717414173',
    riskLevel: 'Low',
    toolType: 'Build',
    primaryCapability: 'Text to Text',
    functions: ['Code Generation', 'Query Assistance', 'Data Analysis', 'Documentation'],
    description:
      'AI-powered assistant integrated into Databricks notebooks that helps data engineers and scientists write code, debug queries, explain results, and optimize data pipelines. Context-aware of your data environment.',
    deploymentType: 'No code / Ready to use',
    cost: 'Included with Databricks Premium',
    expectedUseCase:
      'Data engineering workflows, SQL query writing, PySpark code generation, data analysis assistance, pipeline optimization',
    tipsheet: 'https://docs.databricks.com/ai-assistant',
    leadContacts: ['Daphne Coates'],
    howToAccess:
      'Available in Databricks workspace notebooks. Click AI Assistant icon in notebook toolbar. Must have Databricks Premium tier enabled.',

    owner: 'Databricks / Azure',
    contactPerson: 'David Rodriguez',
    email: 'd.rodriguez@databricks.com',
    phone: '+1 (415) 555-0199',
    department: 'Data Engineering',
    implementationDate: 'September 2024',
    licenseType: 'Premium Tier Included',
    monthlyCost: 0,
    activeUsers: 67,
    features: ['Code Generation', 'Query Help', 'Data Insights', 'Debugging'],
    website: 'https://www.databricks.com/product/ai-assistant',
    status: 'Active',
  },
  {
    id: 4,
    name: 'GitHub Copilot',
    version: 'Business v1.5',
    logo: 'https://images.seeklogo.com/logo-png/42/1/github-copilot-logo-png_seeklogo-428029.png',
    riskLevel: 'Low',
    toolType: 'Build',
    primaryCapability: 'Text to Text',
    functions: ['Code Completion', 'Code Explanation', 'Test Generation', 'Documentation'],
    description:
      'AI pair programmer that helps developers write code faster with intelligent code suggestions, completions, and explanations. Supports multiple programming languages and frameworks with context from your codebase.',
    deploymentType: 'No code / Ready to use',
    cost: 'License Cost - $19/user/month',
    expectedUseCase:
      'Software development, code review, unit test generation, debugging assistance, technical documentation writing',
    tipsheet: 'https://docs.github.com/copilot',
    leadContacts: ['Oliver Redington'],
    howToAccess:
      'Install GitHub Copilot extension in VS Code, Visual Studio, or JetBrains IDE. Login with your GitHub account. Contact IT for license assignment.',

    owner: 'GitHub (Microsoft)',
    contactPerson: 'David Rodriguez',
    email: 'd.rodriguez@github.com',
    phone: '+1 (415) 735-4488',
    department: 'Software Development',
    implementationDate: 'February 2024',
    licenseType: 'Business',
    monthlyCost: 5600,
    activeUsers: 230,
    features: ['Code Completion', 'Code Explanation', 'Test Generation', 'Documentation'],
    website: 'https://github.com/features/copilot',
    status: 'Active',
  },
];

const gradientText = 'bg-clip-text text-transparent bg-gradient-to-r from-[#54BAFC] to-[#0066CC]';
const fmtNum = new Intl.NumberFormat('en-US');

function Logo({ src, alt, size = 'w-full h-full' }) {
  const [err, setErr] = useState(false);
  if (err || !src) return <div className="text-2xl">🤖</div>;
  return (
    <img
      src={src}
      alt={alt}
      className={`${size} object-contain`}
      onError={() => setErr(true)}
      loading="lazy"
    />
  );
}

function SolutionCard({ solution, active, onSelect }) {
  return (
    <button
      type="button"
      role="option"
      aria-selected={active}
      onClick={onSelect}
      className={`w-full text-left p-4 rounded-xl cursor-pointer transition-all duration-300 flex items-center gap-4 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
        active ? 'shadow-lg scale-105 transform' : 'bg-slate-50 hover:bg-blue-50 hover:shadow-md'
      }`}
      style={active ? { background: 'linear-gradient(135deg, #54BAFC 0%, #0066CC 100%)' } : {}}
    >
      <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg p-2 flex items-center justify-center shadow-sm">
        <Logo src={solution.logo} alt={`${solution.name} logo`} />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className={`font-semibold text-sm truncate ${active ? 'text-white' : 'text-slate-800'}`}>{solution.name}</h3>
        <p className={`text-xs truncate ${active ? 'text-blue-100' : 'text-slate-500'}`}>{solution.owner}</p>
      </div>
    </button>
  );
}

function SolutionDetails({ selected }) {
  if (!selected) {
    return (
      <div className="col-span-9 bg-white rounded-2xl shadow-xl p-8 text-center text-slate-500">
        Select a solution to see details
      </div>
    );
  }

  return (
    <div className="col-span-9 space-y-6">
      {/* Header with Logo and Key Info */}
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="flex items-start gap-6 mb-6">
          <div className="flex-shrink-0 w-24 h-24 bg-slate-50 rounded-2xl p-4 flex items-center justify-center shadow-md">
            <Logo src={selected.logo} alt={`${selected.name} logo`} size="w-full h-full" />
          </div>
          <div className="flex-1">
            <div className="mb-4">
              <h2 className={`text-3xl font-bold mb-2 ${gradientText}`}>{selected.name}</h2>
              <p className="text-slate-500 text-sm">Version {selected.version}</p>
            </div>
            <div className="flex flex-wrap gap-3 mb-4">
              <div
                className={`px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 ${
                  selected.riskLevel === 'Low'
                    ? 'bg-green-100 text-green-700 border-2 border-green-300'
                    : selected.riskLevel === 'Medium'
                    ? 'bg-yellow-100 text-yellow-700 border-2 border-yellow-300'
                    : 'bg-red-100 text-red-700 border-2 border-red-300'
                }`}
              >
                <Shield size={16} />
                Risk: {selected.riskLevel}
              </div>
              <div className="px-4 py-2 rounded-full text-sm font-semibold bg-blue-100 text-blue-700 border-2 border-blue-300 flex items-center gap-2">
                <Layers size={16} />
                {selected.toolType}
              </div>
              <div className="px-4 py-2 rounded-full text-sm font-semibold bg-purple-100 text-purple-700 border-2 border-purple-300 flex items-center gap-2">
                <Zap size={16} />
                {selected.primaryCapability}
              </div>
              <div className="px-4 py-2 rounded-full text-sm font-semibold bg-orange-100 text-orange-700 border-2 border-orange-300 flex items-center gap-2">
                <Lock size={16} />
                {selected.deploymentType}
              </div>
            </div>
            <p className="text-slate-700 leading-relaxed">{selected.description}</p>
            {(selected.monthlyCost != null || selected.activeUsers != null) && (
              <p className="text-slate-600 mt-3">
                {selected.monthlyCost != null ? `Monthly ${fmtNum.format(selected.monthlyCost)} USD` : ''}
                {selected.monthlyCost != null && selected.activeUsers != null ? ', ' : ''}
                {selected.activeUsers != null ? `${fmtNum.format(selected.activeUsers)} users` : ''}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Expected Use Cases */}
      <div className="bg-white rounded-2xl shadow-xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <Target size={20} style={{ color: '#54BAFC' }} />
          <h3 className={`text-xl font-semibold ${gradientText}`}>Expected Use Cases</h3>
        </div>
        <p className="text-slate-700 leading-relaxed">{selected.expectedUseCase}</p>
      </div>

      {/* Access & Usage Information */}
      <div className="bg-white rounded-2xl shadow-xl p-6">
        <h3 className={`text-xl font-semibold mb-6 ${gradientText}`}>Access & Usage Information</h3>
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <DollarSign size={18} style={{ color: '#54BAFC' }} />
              <p className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Pricing</p>
            </div>
            <p className="text-slate-700 font-semibold bg-slate-50 p-4 rounded-lg">{selected.cost}</p>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Lock size={18} style={{ color: '#54BAFC' }} />
              <p className="text-sm font-semibold text-slate-600 uppercase tracking-wide">How to Access</p>
            </div>
            <p className="text-slate-700 leading-relaxed bg-blue-50 p-4 rounded-lg">{selected.howToAccess}</p>
          </div>
          {selected.tipsheet && (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <BookOpen size={18} style={{ color: '#54BAFC' }} />
                <p className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Resources</p>
              </div>
              <a
                href={selected.tipsheet}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg hover:shadow-md transition-shadow group"
              >
                <span className="font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">View Tipsheet & Documentation</span>
                <ExternalLink size={16} className="text-slate-400 group-hover:text-blue-600 transition-colors" />
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Lead Contacts */}
      <div className="bg-white rounded-2xl shadow-xl p-6">
        <h3 className={`text-xl font-semibold mb-4 ${gradientText}`}>Lead Contacts</h3>
        <div className="flex flex-wrap gap-3">
          {selected.leadContacts?.map((contact, i) => (
            <div key={i} className="flex items-center gap-2 bg-slate-50 px-4 py-3 rounded-lg border border-slate-200">
              <Users size={18} style={{ color: '#54BAFC' }} />
              <span className="font-semibold text-slate-800">{contact}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProductTeamTab() {
  return (
    {tab === 'enterprise' ? (<div className="grid grid-cols-12 gap-6">)
      <div className="col-span-12 bg-white rounded-2xl shadow-xl p-8">
        <h2 className={`text-2xl font-bold ${gradientText}`}>AI Solutions for your product team</h2>
        <p className="mt-2 text-slate-600">Coming soon, curated tools and patterns for product managers, designers, and engineers. If you share your needs, I will wire them up here.</p>
      </div>
    </div>
  );
}

export default function AISolutionsDashboard() {
  const [selectedSolution, setSelectedSolution] = useState(aiSolutions[0] ?? null);
  const [searchQuery, setSearchQuery] = useState('');
  const [tab, setTab] = useState('enterprise');

  // Memoized filtering with extra fields
  const filteredSolutions = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return aiSolutions;
    return aiSolutions.filter((s) =>
      [
        s.name,
        s.description,
        s.owner,
        s.toolType,
        s.primaryCapability,
        ...(s.features || []),
      ]
        .filter(Boolean)
        .some((v) => v.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  // Keep selection in sync with current filter
  useEffect(() => {
    if (!selectedSolution) return;
    const stillVisible = filteredSolutions.some((s) => s.id === selectedSolution.id);
    if (!stillVisible) setSelectedSolution(filteredSolutions[0] ?? null);
  }, [filteredSolutions]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <img
              src="https://yeesfiji.com/wp-content/uploads/Unilever-Logo-1.png"
              alt="Unilever Logo"
              className="h-16 w-16 rounded-lg"
              onError={(e) => {
                e.currentTarget.src =
                  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='55' x='30' font-size='60' fill='%230066CC'%3EU%3C/text%3E%3C/svg%3E";
              }}
            />
            <div>
              <h1 className={`text-4xl font-bold mb-1 ${gradientText}`}>AI Solutions Portfolio</h1>
              <p style={{ color: '#54BAFC' }}>Unilever approved AI tools and solutions</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="inline-flex rounded-xl bg-white p-1 shadow-sm border border-slate-200">
              <button
                type="button"
                onClick={() => setTab('enterprise')}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition ${
                  tab === 'enterprise'
                    ? 'text-white bg-gradient-to-r from-[#54BAFC] to-[#0066CC] shadow'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
                aria-pressed={tab === 'enterprise'}
              >
                Enterprise AI solutions
              </button>
              <button
                type="button"
                onClick={() => setTab('product')}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition ${
                  tab === 'product'
                    ? 'text-white bg-gradient-to-r from-[#54BAFC] to-[#0066CC] shadow'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
                aria-pressed={tab === 'product'}
              >
                AI Solutions for your product team
              </button>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-12 gap-6">
          {/* Left Sidebar */}
          <div className="col-span-12 md:col-span-3 bg-white rounded-2xl shadow-xl p-6">
            <h2 className={`text-xl font-semibold mb-6 mt-2 ${gradientText}`}>Solutions ({filteredSolutions.length})</h2>
            {/* Search */}
            <div className="mb-6 relative">
              <label htmlFor="search" className="sr-only">
                Search solutions
              </label>
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                id="search"
                type="text"
                placeholder="Search solutions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* List */}
            <div role="listbox" aria-label="AI solutions" className="space-y-3">
              {filteredSolutions.map((solution) => (
                <SolutionCard
                  key={solution.id}
                  solution={solution}
                  active={selectedSolution?.id === solution.id}
                  onSelect={() => setSelectedSolution(solution)}
                />
              ))}

              {filteredSolutions.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-slate-500">No solutions found</p>
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="mt-2 text-sm text-blue-600 hover:text-blue-700"
                  >
                    Clear search
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right Panel */}
          {filteredSolutions.length > 0 && <SolutionDetails selected={selectedSolution} />}
          </div>
        ) : (
          <ProductTeamTab />
        )}
      </div>
    </div>
  );
}
