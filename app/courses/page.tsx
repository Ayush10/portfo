export default function CoursesPage() {
  const courses = [
    {
      title: 'Product Management Fundamentals',
      description: 'Learn the core principles of product management from ideation to launch.',
      level: 'Beginner',
      duration: '8 weeks',
      students: '1,200+',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Data-Driven Product Decisions',
      description: 'Master analytics, metrics, and A/B testing for product success.',
      level: 'Intermediate',
      duration: '6 weeks',
      students: '850+',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'AI for Product Managers',
      description: 'Understand AI/ML and how to integrate it into your product strategy.',
      level: 'Advanced',
      duration: '10 weeks',
      students: '600+',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'User Research & Design Thinking',
      description: 'Conduct effective user research and apply design thinking methodologies.',
      level: 'Intermediate',
      duration: '5 weeks',
      students: '950+',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'Product Strategy & Roadmapping',
      description: 'Build compelling product strategies and prioritize effectively.',
      level: 'Advanced',
      duration: '7 weeks',
      students: '700+',
      gradient: 'from-indigo-500 to-blue-500',
    },
    {
      title: 'Agile Product Development',
      description: 'Master agile methodologies and lead cross-functional teams.',
      level: 'Beginner',
      duration: '4 weeks',
      students: '1,100+',
      gradient: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
            Product Management Courses
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Comprehensive courses designed to help you master product management skills and advance your career.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6"></div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {courses.map((course, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className={`h-2 bg-gradient-to-r ${course.gradient}`}></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${course.gradient} text-white`}>
                    {course.level}
                  </span>
                  <span className="text-sm text-zinc-600 dark:text-zinc-400">{course.duration}</span>
                </div>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                  {course.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-2">
                  {course.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-zinc-500 dark:text-zinc-500">
                    {course.students} students
                  </span>
                  <button className={`px-4 py-2 rounded-lg bg-gradient-to-r ${course.gradient} text-white font-medium text-sm hover:shadow-lg transition-all duration-200`}>
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Can't find what you're looking for?
          </h2>
          <p className="text-lg mb-8 text-blue-100">
            New courses are added regularly. Subscribe to get notified about upcoming courses.
          </p>
          <button className="px-8 py-4 bg-white text-blue-600 font-medium rounded-lg hover:bg-zinc-100 transition-colors">
            Subscribe for Updates
          </button>
        </div>
      </div>
    </div>
  );
}
