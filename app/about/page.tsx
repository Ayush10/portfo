export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
            About Me
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>

        {/* Profile Section */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-zinc-900 dark:to-zinc-800 rounded-2xl p-8 sm:p-12 mb-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-6xl">
              👨‍💼
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
                Product Manager & AI Enthusiast
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-4">
                Passionate about building products that solve real problems and create value for users. 
                Experienced in product strategy, user research, and cross-functional team leadership.
              </p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm">
                  Product Strategy
                </span>
                <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm">
                  AI & ML
                </span>
                <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm">
                  User Research
                </span>
                <span className="px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full text-sm">
                  Data Analysis
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">My Journey</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            With over several years of experience in product management, I've had the privilege of working on products 
            that have impacted millions of users. My journey began with a fascination for technology and its potential 
            to solve complex problems.
          </p>
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            Throughout my career, I've developed expertise in various domains including AI/ML products, SaaS platforms, 
            and consumer applications. I believe in a data-driven approach to product development, combined with deep 
            empathy for user needs.
          </p>
          <p className="text-zinc-600 dark:text-zinc-400">
            Today, I share my knowledge through courses, case studies, and resources to help aspiring and established 
            product managers excel in their careers. I'm particularly passionate about the intersection of AI and 
            product management, and how emerging technologies are shaping the future of products.
          </p>
        </div>

        {/* Experience Highlights */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">Experience Highlights</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">Senior Product Manager</h3>
              <p className="text-zinc-600 dark:text-zinc-400">Led product development for AI-powered features</p>
            </div>
            <div className="border-l-4 border-purple-600 pl-6 py-2">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">Product Lead</h3>
              <p className="text-zinc-600 dark:text-zinc-400">Managed cross-functional teams and product roadmaps</p>
            </div>
            <div className="border-l-4 border-green-600 pl-6 py-2">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">Product Analyst</h3>
              <p className="text-zinc-600 dark:text-zinc-400">Data-driven insights and user research</p>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">Core Competencies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-6">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">Product Strategy</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Vision setting, roadmap planning, and go-to-market strategy
              </p>
            </div>
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-6">
              <div className="text-3xl mb-3">👥</div>
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">User Research</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                User interviews, surveys, and usability testing
              </p>
            </div>
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-6">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">Data Analytics</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Metrics definition, A/B testing, and performance analysis
              </p>
            </div>
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-6">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">Stakeholder Management</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Cross-functional collaboration and executive communication
              </p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Let's Connect</h2>
          <p className="mb-6">
            Interested in collaborating or have questions? Feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contact@example.com"
              className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-zinc-100 transition-colors"
            >
              Send Email
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-medium rounded-lg border-2 border-white/30 hover:bg-white/20 transition-colors"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
