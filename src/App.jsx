import React, { useState } from 'react';
import { Users, Shield, Layers, Zap, Lock, ExternalLink, Target, Search, DollarSign, BookOpen } from 'lucide-react';

const AISolutionsDashboard = () => {
  const aiSolutions = [
    // zelfde data als eerder
  ];

  const [selectedSolution, setSelectedSolution] = useState(aiSolutions[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('enterprise');
  const [activeTeam, setActiveTeam] = useState('A');

  const filteredSolutions = aiSolutions.filter(solution => {
    const q = searchQuery.toLowerCase();
    // filter op team alleen als activeTab = product
    const matchesTeam = activeTab === 'product' ? solution.toolType?.includes(`Team ${activeTeam}`) || true : true;
    const matchesSearch = (
      solution.name.toLowerCase().includes(q) ||
      solution.description.toLowerCase().includes(q) ||
      solution.owner.toLowerCase().includes(q) ||
      solution.toolType.toLowerCase().includes(q) ||
      solution.primaryCapability.toLowerCase().includes(q)
    );
    return matchesSearch && matchesTeam;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <img 
              src="https://yeesfiji.com/wp-content/uploads/Unilever-Logo-1.png" 
              alt="Unilever Logo"
              className="h-16 w-16 rounded-lg"
              onError={(e) => {
                e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='55' x='30' font-size='60' fill='%230066CC'%3EU%3C/text%3E%3C/svg%3E";
              }}
            />
            <div>
              <h1 className="text-4xl font-bold mb-1" style={{color: '#0D009D'}}>AI Solutions Portfolio</h1>
              <p style={{color: '#54BAFC'}}>Unilever approved AI tools and solutions</p>
            </div>
          </div>
        </header>

        {/* Selector bar under header, above Solutions */}
        <div className="mb-4">
          <div className="flex items-center gap-3">
            <span className="text-slate-600 text-sm">AI solutions for</span>
            <div className="inline-flex rounded-xl bg-white p-1 shadow-sm border border-slate-200">
              <button
                type="button"
                onClick={() => setActiveTab('enterprise')}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition ${activeTab === 'enterprise'
                  ? 'text-white bg-gradient-to-r from-[#54BAFC] to-[#0066CC] shadow'
                  : 'text-slate-700 hover:bg-slate-50'}`}
                aria-pressed={activeTab === 'enterprise'}
              >
                Enterprise productivity
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('product')}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition ${activeTab === 'product'
                  ? 'text-white bg-gradient-to-r from-[#54BAFC] to-[#0066CC] shadow'
                  : 'text-slate-700 hover:bg-slate-50'}`}
                aria-pressed={activeTab === 'product'}
              >
                Product Team
              </button>
            </div>
          </div>
        </div>

        {activeTab === 'enterprise' || activeTab === 'product' ? (
          <div className="grid grid-cols-12 gap-6">
            {/* Left Sidebar - Solution List */}
            <div className="col-span-3 bg-white rounded-2xl shadow-xl p-6">
              {activeTab === 'product' && (
                <div className="flex gap-2 mb-4">
                  {['A','B','C'].map(team => (
                    <button
                      key={team}
                      type="button"
                      onClick={() => setActiveTeam(team)}
                      className={`flex-1 px-2 py-1 text-sm font-medium rounded-lg border transition ${
                        activeTeam === team
                          ? 'text-white bg-gradient-to-r from-[#54BAFC] to-[#0066CC] border-transparent shadow'
                          : 'text-slate-700 border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      Product team {team}
                    </button>
                  ))}
                </div>
              )}

              <h2 className="text-xl font-semibold mb-6 mt-2" style={{background: 'linear-gradient(90deg, #54BAFC 0%, #0066CC 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>
                Solutions ({filteredSolutions.length})
              </h2>
              <div className="mb-6 relative">
                <label htmlFor="search" className="sr-only">Search solutions</label>
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
                <input
                  id="search"
                  type="text"
                  placeholder="Search solutions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="space-y-3" role="listbox" aria-label="AI solutions">
                {filteredSolutions.map((solution) => (
                  <button
                    type="button"
                    key={solution.id}
                    onClick={() => setSelectedSolution(solution)}
                    role="option"
                    aria-selected={selectedSolution.id === solution.id}
                    className={`w-full text-left p-4 rounded-xl cursor-pointer transition-all duration-300 flex items-center gap-4 ${
                      selectedSolution.id === solution.id
                        ? 'shadow-lg scale-105 transform'
                        : 'bg-slate-50 hover:bg-blue-50 hover:shadow-md'
                    }`}
                    style={selectedSolution.id === solution.id ? {background: 'linear-gradient(135deg, #54BAFC 0%, #0066CC 100%)'} : {}}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg p-2 flex items-center justify-center shadow-sm">
                      <img 
                        src={solution.logo} 
                        alt={`${solution.name} logo`}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement.innerHTML = '<div class="text-2xl">🤖</div>';
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
                  </button>
                ))}
                {filteredSolutions.length === 0 && (
                  <div className="text-center py-8">
                    <p className="text-slate-500">No solutions found</p>
                    <button
                      onClick={() => setSearchQuery('')}
                      className="mt-2 text-sm text-blue-600 hover:text-blue-700"
                    >
                      Clear search
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Right Panel - Solution Details */}
            <div className="col-span-9 space-y-6">
              <SolutionDetails selectedSolution={selectedSolution} />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

function SolutionDetails({ selectedSolution }) {
  return (
    <>
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="flex items-start gap-6 mb-6">
          <div className="flex-shrink-0 w-24 h-24 bg-slate-50 rounded-2xl p-4 flex items-center justify-center shadow-md">
            <img 
              src={selectedSolution.logo} 
              alt={`${selectedSolution.name} logo`}
              className="w-full h-full object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement.innerHTML = '<div class="text-5xl">🤖</div>';
              }}
            />
          </div>
          <div className="flex-1">
            <div className="mb-4">
              <h2 className="text-3xl font-bold mb-2" style={{background: 'linear-gradient(90deg, #54BAFC 0%, #0066CC 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>
                {selectedSolution.name}
              </h2>
              <p className="text-slate-500 text-sm">Version {selectedSolution.version}</p>
            </div>
            <div className="flex flex-wrap gap-3 mb-4">
              <div className={`px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 ${
                selectedSolution.riskLevel === 'Low' ? 'bg-green-100 text-green-700 border-2 border-green-300' :
                selectedSolution.riskLevel === 'Medium' ? 'bg-yellow-100 text-yellow-700 border-2 border-yellow-300' :
                'bg-red-100 text-red-700 border-2 border-red-300'
              }`}>
                <Shield size={16} />
                Risk: {selectedSolution.riskLevel}
              </div>
              <div className="px-4 py-2 rounded-full text-sm font-semibold bg-blue-100 text-blue-700 border-2 border-blue-300 flex items-center gap-2">
                <Layers size={16} />
                {selectedSolution.toolType}
              </div>
              <div className="px-4 py-2 rounded-full text-sm font-semibold bg-purple-100 text-purple-700 border-2 border-purple-300 flex items-center gap-2">
                <Zap size={16} />
                {selectedSolution.primaryCapability}
              </div>
              <div className="px-4 py-2 rounded-full text-sm font-semibold bg-orange-100 text-orange-700 border-2 border-orange-300 flex items-center gap-2">
                <Lock size={16} />
                {selectedSolution.deploymentType}
              </div>
            </div>
            <p className="text-slate-700 leading-relaxed">{selectedSolution.description}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <Target size={20} style={{color: '#54BAFC'}} />
          <h3 className="text-xl font-semibold" style={{background: 'linear-gradient(90deg, #54BAFC 0%, #0066CC 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>
            Expected Use Cases
          </h3>
        </div>
        <p className="text-slate-700 leading-relaxed">{selectedSolution.expectedUseCase}</p>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-6">
        <h3 className="text-xl font-semibold mb-6" style={{background: 'linear-gradient(90deg, #54BAFC 0%, #0066CC 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>
          Access & Usage Information
        </h3>
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <DollarSign size={18} style={{color: '#54BAFC'}} />
              <p className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Pricing</p>
            </div>
            <p className="text-slate-700 font-semibold bg-slate-50 p-4 rounded-lg">{selectedSolution.cost}</p>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Lock size={18} style={{color: '#54BAFC'}} />
              <p className="text-sm font-semibold text-slate-600 uppercase tracking-wide">How to Access</p>
            </div>
            <p className="text-slate-700 leading-relaxed bg-blue-50 p-4 rounded-lg">{selectedSolution.howToAccess}</p>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <BookOpen size={18} style={{color: '#54BAFC'}} />
              <p className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Resources</p>
            </div>
            <a 
              href={selectedSolution.tipsheet} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg hover:shadow-md transition-shadow group"
            >
              <span className="font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">View Tipsheet & Documentation</span>
              <ExternalLink size={16} className="text-slate-400 group-hover:text-blue-600 transition-colors" />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-6">
        <h3 className="text-xl font-semibold mb-4" style={{background: 'linear-gradient(90deg, #54BAFC 0%, #0066CC 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>
          Lead Contacts
        </h3>
        <div className="flex flex-wrap gap-3">
          {selectedSolution.leadContacts.map((contact, index) => (
            <div key={index} className="flex items-center gap-2 bg-slate-50 px-4 py-3 rounded-lg border border-slate-200">
              <Users size={18} style={{color: '#54BAFC'}} />
              <span className="font-semibold text-slate-800">{contact}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AISolutionsDashboard;
