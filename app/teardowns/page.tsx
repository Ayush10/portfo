export default function TeardownsPage() {
  const teardowns = [
    {
      product: 'Notion',
      category: 'Productivity',
      description: "Deep dive into Notion's product strategy, onboarding flow, and viral growth mechanisms.",
      highlights: ['Flexible workspace design', 'Template marketplace strategy', 'Freemium model analysis'],
      gradient: 'from-blue-500 to-cyan-500',
      icon: '📝',
    },
    {
      product: 'Spotify',
      category: 'Music Streaming',
      description: "Analysis of Spotify's recommendation engine, personalization features, and user retention strategies.",
      highlights: ['ML-powered recommendations', 'Discover Weekly success', 'Social features impact'],
      gradient: 'from-green-500 to-emerald-500',
      icon: '🎵',
    },
    {
      product: 'Airbnb',
      category: 'Marketplace',
      description: "Examining Airbnb's trust-building features, host/guest experience, and marketplace dynamics.",
      highlights: ['Two-sided marketplace balance', 'Trust & safety features', 'Dynamic pricing model'],
      gradient: 'from-pink-500 to-rose-500',
      icon: '🏠',
    },
    {
      product: 'Duolingo',
      category: 'EdTech',
      description: "Breakdown of Duolingo's gamification strategy, engagement loops, and monetization approach.",
      highlights: ['Gamification mechanics', 'Streak psychology', 'Freemium to premium conversion'],
      gradient: 'from-purple-500 to-pink-500',
      icon: '🦉',
    },
    {
      product: 'Figma',
      category: 'Design Tools',
      description: "Analyzing Figma's collaboration features, plugin ecosystem, and product-led growth strategy.",
      highlights: ['Real-time collaboration', 'Plugin marketplace', 'Bottom-up adoption'],
      gradient: 'from-indigo-500 to-blue-500',
      icon: '🎨',
    },
    {
      product: 'ChatGPT',
      category: 'AI',
      description: "Exploring ChatGPT's UX decisions, conversation design, and rapid scaling strategies.",
      highlights: ['Conversational UI patterns', 'Context management', 'Viral adoption tactics'],
      gradient: 'from-orange-500 to-red-500',
      icon: '🤖',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
            Product Teardowns
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            In-depth analysis of successful products, their strategies, and what makes them work.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6"></div>
        </div>

        {/* Teardowns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {teardowns.map((teardown, index) => (
            <div
              key={index}
              className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className={`bg-gradient-to-br ${teardown.gradient} p-8 text-center`}>
                <div className="text-6xl mb-4">{teardown.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {teardown.product}
                </h3>
                <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-white">
                  {teardown.category}
                </span>
              </div>
              
              <div className="p-8">
                <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                  {teardown.description}
                </p>

                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm">
                    Key Highlights:
                  </h4>
                  {teardown.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className={`mt-1 text-sm bg-gradient-to-r ${teardown.gradient} bg-clip-text text-transparent`}>
                        ▸
                      </span>
                      <span className="text-sm text-zinc-600 dark:text-zinc-400">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>

                <button className={`w-full py-3 rounded-lg bg-gradient-to-r ${teardown.gradient} text-white font-medium hover:shadow-lg transition-all duration-200`}>
                  Read Full Teardown
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Request Section */}
        <div className="bg-gradient-to-br from-zinc-50 to-purple-50 dark:from-zinc-900 dark:to-zinc-800 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
            Want to See a Specific Product?
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
            Suggest a product for teardown analysis and I'll add it to the queue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="text"
              placeholder="Product name"
              className="flex-1 px-4 py-3 rounded-lg border-2 border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:border-blue-600 dark:focus:border-blue-400 outline-none"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-xl transition-all duration-200">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
