export default function BlogPage() {
  const blogPosts = [
    {
      title: 'The Future of AI in Product Management',
      excerpt: 'Exploring how artificial intelligence is transforming the role of product managers and the products we build.',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'AI',
      image: '🤖',
    },
    {
      title: '10 Essential Metrics Every PM Should Track',
      excerpt: 'A comprehensive guide to the most important product metrics and how to use them effectively.',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'Analytics',
      image: '📊',
    },
    {
      title: 'User Research Best Practices',
      excerpt: 'Learn how to conduct effective user research and turn insights into actionable product decisions.',
      date: '2024-01-05',
      readTime: '10 min read',
      category: 'Research',
      image: '🔍',
    },
    {
      title: 'Building Your First Product Roadmap',
      excerpt: 'Step-by-step guide to creating a product roadmap that aligns with business goals and user needs.',
      date: '2023-12-28',
      readTime: '7 min read',
      category: 'Strategy',
      image: '🗺️',
    },
    {
      title: 'Mastering Stakeholder Communication',
      excerpt: 'Effective strategies for managing stakeholder expectations and building strong relationships.',
      date: '2023-12-20',
      readTime: '5 min read',
      category: 'Leadership',
      image: '💬',
    },
    {
      title: 'Product-Market Fit: A Complete Guide',
      excerpt: 'Understanding and achieving product-market fit for sustainable growth.',
      date: '2023-12-15',
      readTime: '12 min read',
      category: 'Strategy',
      image: '🎯',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
            Product Management Blog
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Insights, strategies, and trends in product management, AI, and technology.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6"></div>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl overflow-hidden">
            <div className="p-8 md:p-12 text-white">
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                Featured Post
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-6 mb-4">
                {blogPosts[0].title}
              </h2>
              <p className="text-lg text-blue-100 mb-6">
                {blogPosts[0].excerpt}
              </p>
              <div className="flex items-center gap-6">
                <span className="text-blue-100">{blogPosts[0].date}</span>
                <span className="text-blue-100">{blogPosts[0].readTime}</span>
                <button className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-zinc-100 transition-colors">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.slice(1).map((post, index) => (
            <article
              key={index}
              className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-zinc-800 dark:to-zinc-700 p-8 flex items-center justify-center text-6xl">
                {post.image}
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-zinc-500 dark:text-zinc-500">
                    {post.date}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-zinc-500 dark:text-zinc-500">
                    {post.readTime}
                  </span>
                  <button className="text-blue-600 dark:text-blue-400 font-medium text-sm hover:underline">
                    Read More →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-br from-zinc-50 to-blue-50 dark:from-zinc-900 dark:to-zinc-800 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
            Never Miss a Post
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
            Subscribe to get the latest product management insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-2 border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:border-blue-600 dark:focus:border-blue-400 outline-none"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-xl transition-all duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
