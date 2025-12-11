import Link from 'next/link';

export default function Home() {
  const features = [
    {
      title: 'Courses',
      description: 'Comprehensive product management courses designed to elevate your skills.',
      icon: '📚',
      href: '/courses',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Templates',
      description: 'Ready-to-use templates for PRDs, roadmaps, and more.',
      icon: '📝',
      href: '/templates',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Blog',
      description: 'Insights, tips, and trends in product management and AI.',
      icon: '✍️',
      href: '/blog',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Case Studies',
      description: 'Real-world product case studies and success stories.',
      icon: '📊',
      href: '/case-studies',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'Teardowns',
      description: 'In-depth product analysis and deconstruction.',
      icon: '🔍',
      href: '/teardowns',
      gradient: 'from-indigo-500 to-blue-500',
    },
    {
      title: 'Store',
      description: 'Exclusive merchandise and resources for PMs.',
      icon: '🛍️',
      href: '/store',
      gradient: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-zinc-900 dark:via-black dark:to-zinc-900">
        <div className="absolute inset-0 bg-grid-zinc-900/[0.04] dark:bg-grid-zinc-100/[0.02] bg-[size:60px_60px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="block text-zinc-900 dark:text-zinc-100 mb-2">Product Manager</span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Portfolio & Resources
              </span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
              A comprehensive hub for product management excellence. Explore courses, templates, case studies, and insights to accelerate your PM journey.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/about"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              >
                About Me
              </Link>
              <Link
                href="/courses"
                className="px-8 py-4 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-medium rounded-lg border-2 border-zinc-200 dark:border-zinc-700 hover:border-blue-600 dark:hover:border-blue-400 transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Explore Courses
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
            What You'll Find Here
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Everything you need to excel in product management, all in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Link
              key={index}
              href={feature.href}
              className="group relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-8 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              <div className="relative">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                  {feature.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  {feature.description}
                </p>
                <div className={`mt-4 inline-flex items-center text-sm font-medium bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                  Explore →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-blue-100">Case Studies</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">100+</div>
              <div className="text-blue-100">Templates</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">30+</div>
              <div className="text-blue-100">Courses</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">200+</div>
              <div className="text-blue-100">Blog Posts</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-br from-zinc-50 to-blue-50 dark:from-zinc-900 dark:to-zinc-800 rounded-2xl p-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
            Ready to Level Up Your PM Skills?
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">
            Join thousands of product managers who are learning, growing, and building better products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/referrals"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Get Referrals
            </Link>
            <Link
              href="/achievements"
              className="px-8 py-4 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-medium rounded-lg border-2 border-zinc-200 dark:border-zinc-700 hover:border-blue-600 dark:hover:border-blue-400 transform hover:-translate-y-0.5 transition-all duration-200"
            >
              View Achievements
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
