export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: 'E-commerce Platform Redesign',
      company: 'TechRetail Inc.',
      description: 'Led a complete redesign of the e-commerce platform, resulting in 45% increase in conversion rate.',
      metrics: ['45% ↑ Conversion', '30% ↑ Revenue', '25% ↓ Bounce Rate'],
      tags: ['UX/UI', 'A/B Testing', 'Analytics'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'AI-Powered Recommendation Engine',
      company: 'StreamMedia Co.',
      description: 'Developed and launched an ML-based recommendation system that increased user engagement by 60%.',
      metrics: ['60% ↑ Engagement', '40% ↑ Session Time', '50% ↑ Retention'],
      tags: ['AI/ML', 'Data Science', 'Personalization'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Mobile App Launch Strategy',
      company: 'FinTech Solutions',
      description: 'Orchestrated the launch of a mobile banking app, achieving 100k downloads in the first month.',
      metrics: ['100k Downloads', '4.8★ Rating', '70% MAU'],
      tags: ['Mobile', 'Go-to-Market', 'Growth'],
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'SaaS Product Pivot',
      company: 'CloudWork Systems',
      description: 'Led a successful product pivot based on user feedback, resulting in 3x revenue growth.',
      metrics: ['3x Revenue', '80% Retention', '50+ Enterprise Clients'],
      tags: ['Strategy', 'B2B SaaS', 'Product-Market Fit'],
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'Customer Onboarding Optimization',
      company: 'CollabTech',
      description: 'Redesigned onboarding flow, reducing time-to-value by 70% and improving activation rate.',
      metrics: ['70% ↓ Time-to-Value', '55% ↑ Activation', '35% ↑ Trial Conversion'],
      tags: ['User Experience', 'Onboarding', 'Conversion'],
      gradient: 'from-indigo-500 to-blue-500',
    },
    {
      title: 'Marketplace Platform Growth',
      company: 'LocalBiz Connect',
      description: 'Scaled a two-sided marketplace from 1k to 50k active users through strategic features and partnerships.',
      metrics: ['50x User Growth', '10k Merchants', '$5M GMV'],
      tags: ['Marketplace', 'Growth', 'Partnerships'],
      gradient: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
            Case Studies
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Real-world product success stories showcasing strategy, execution, and measurable impact.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6"></div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              <div className={`h-3 bg-gradient-to-r ${study.gradient}`}></div>
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                      {study.title}
                    </h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-500">
                      {study.company}
                    </p>
                  </div>
                  <span className={`px-4 py-2 rounded-lg bg-gradient-to-r ${study.gradient} text-white text-xs font-medium`}>
                    Featured
                  </span>
                </div>
                
                <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                  {study.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {study.metrics.map((metric, i) => (
                    <div key={i} className="bg-zinc-50 dark:bg-zinc-800 rounded-lg p-3 text-center">
                      <div className={`text-sm font-bold bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent`}>
                        {metric}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {study.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button className={`w-full py-3 rounded-lg bg-gradient-to-r ${study.gradient} text-white font-medium hover:shadow-lg transition-all duration-200`}>
                  View Full Case Study
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Interested in Collaboration?
          </h2>
          <p className="text-lg mb-8 text-blue-100">
            Let's work together on your next product challenge.
          </p>
          <button className="px-8 py-4 bg-white text-blue-600 font-medium rounded-lg hover:bg-zinc-100 transition-colors">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
}
