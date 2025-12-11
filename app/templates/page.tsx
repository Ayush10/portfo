export default function TemplatesPage() {
  const templates = [
    {
      title: 'Product Requirements Document (PRD)',
      description: 'Comprehensive template for documenting product requirements and specifications.',
      category: 'Documentation',
      downloads: '2.5k',
      icon: '📋',
    },
    {
      title: 'Product Roadmap Template',
      description: 'Visual roadmap template for planning and communicating product strategy.',
      category: 'Planning',
      downloads: '3.1k',
      icon: '🗺️',
    },
    {
      title: 'User Story Mapping',
      description: 'Template for creating user story maps and organizing user journeys.',
      category: 'User Research',
      downloads: '1.8k',
      icon: '👥',
    },
    {
      title: 'Feature Prioritization Matrix',
      description: 'Framework for prioritizing features using various scoring methods.',
      category: 'Strategy',
      downloads: '2.2k',
      icon: '⚖️',
    },
    {
      title: 'Competitive Analysis Framework',
      description: 'Structured template for analyzing competitors and market positioning.',
      category: 'Research',
      downloads: '1.6k',
      icon: '🔍',
    },
    {
      title: 'OKR Template',
      description: 'Objectives and Key Results template for goal setting and tracking.',
      category: 'Planning',
      downloads: '2.8k',
      icon: '🎯',
    },
    {
      title: 'Sprint Planning Template',
      description: 'Agile sprint planning template for organizing sprint activities.',
      category: 'Agile',
      downloads: '1.9k',
      icon: '🏃',
    },
    {
      title: 'Product Launch Checklist',
      description: 'Complete checklist for successful product launches.',
      category: 'Launch',
      downloads: '3.3k',
      icon: '🚀',
    },
    {
      title: 'User Persona Template',
      description: 'Create detailed user personas to guide product decisions.',
      category: 'User Research',
      downloads: '2.6k',
      icon: '👤',
    },
  ];

  const categories = ['All', 'Documentation', 'Planning', 'User Research', 'Strategy', 'Research', 'Agile', 'Launch'];

  return (
    <div className="min-h-screen bg-white dark:bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
            PM Templates & Resources
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Free, ready-to-use templates to streamline your product management workflow.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6"></div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-lg border-2 border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {templates.map((template, index) => (
            <div
              key={index}
              className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{template.icon}</div>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs rounded-full">
                  {template.category}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                {template.title}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                {template.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-zinc-500 dark:text-zinc-500">
                  {template.downloads} downloads
                </span>
                <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-lg hover:shadow-lg transition-all duration-200">
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-zinc-900 dark:to-zinc-800 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
            Need a Custom Template?
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
            Let me know what you need, and I'll create a template tailored to your requirements.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-xl transition-all duration-200">
            Request Template
          </button>
        </div>
      </div>
    </div>
  );
}
