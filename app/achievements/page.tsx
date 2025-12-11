export default function AchievementsPage() {
  const achievements = [
    {
      year: '2024',
      items: [
        {
          title: 'Product of the Year Award',
          organization: 'Tech Innovation Summit',
          description: 'Recognized for launching an AI-powered feature that increased user engagement by 60%.',
          icon: '🏆',
        },
        {
          title: 'Published Author',
          organization: 'PM Insights Magazine',
          description: 'Published a comprehensive guide on AI integration in product management.',
          icon: '📚',
        },
      ],
    },
    {
      year: '2023',
      items: [
        {
          title: 'Best Mobile App Launch',
          organization: 'Mobile Excellence Awards',
          description: 'Led the successful launch of a mobile app that gained 100k users in the first month.',
          icon: '📱',
        },
        {
          title: 'Speaker at ProductCon',
          organization: 'ProductCon 2023',
          description: 'Delivered keynote on "Data-Driven Product Decisions" to 500+ attendees.',
          icon: '🎤',
        },
        {
          title: 'Mentor of the Year',
          organization: 'PM Mentorship Program',
          description: 'Mentored 15+ aspiring product managers, with 80% achieving their career goals.',
          icon: '🌟',
        },
      ],
    },
    {
      year: '2022',
      items: [
        {
          title: 'Innovation Excellence',
          organization: 'Global Tech Awards',
          description: 'Awarded for implementing innovative product strategies that drove 3x revenue growth.',
          icon: '💡',
        },
        {
          title: 'Certified Product Manager',
          organization: 'Product Management Institute',
          description: 'Achieved advanced certification in product management and strategy.',
          icon: '🎓',
        },
      ],
    },
  ];

  const certifications = [
    { name: 'Certified Product Manager (CPM)', issuer: 'Product Management Institute', year: '2022' },
    { name: 'AI Product Management Certification', issuer: 'Stanford University', year: '2023' },
    { name: 'Data Analytics for PMs', issuer: 'Google', year: '2021' },
    { name: 'Agile Certified Practitioner', issuer: 'PMI', year: '2021' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
            Achievements & Recognition
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Milestones, awards, and recognition throughout my product management journey.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6"></div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">12+</div>
            <div className="text-sm text-zinc-600 dark:text-zinc-400">Awards Won</div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">25+</div>
            <div className="text-sm text-zinc-600 dark:text-zinc-400">Speaking Events</div>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">50+</div>
            <div className="text-sm text-zinc-600 dark:text-zinc-400">Mentees</div>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">10+</div>
            <div className="text-sm text-zinc-600 dark:text-zinc-400">Publications</div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-8 text-center">
            Achievement Timeline
          </h2>
          <div className="space-y-12">
            {achievements.map((yearGroup, index) => (
              <div key={index} className="relative">
                <div className="sticky top-24 z-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-2xl font-bold px-6 py-3 rounded-lg inline-block mb-6">
                  {yearGroup.year}
                </div>
                <div className="space-y-6">
                  {yearGroup.items.map((achievement, i) => (
                    <div
                      key={i}
                      className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="text-4xl">{achievement.icon}</div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
                            {achievement.title}
                          </h3>
                          <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">
                            {achievement.organization}
                          </p>
                          <p className="text-zinc-600 dark:text-zinc-400">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-8 text-center">
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-zinc-50 to-blue-50 dark:from-zinc-900 dark:to-zinc-800 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 flex-1">
                    {cert.name}
                  </h3>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs rounded-full">
                    {cert.year}
                  </span>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {cert.issuer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Let's Achieve Great Things Together
          </h2>
          <p className="text-lg mb-8 text-blue-100">
            Interested in collaboration or mentorship? Let's connect.
          </p>
          <button className="px-8 py-4 bg-white text-blue-600 font-medium rounded-lg hover:bg-zinc-100 transition-colors">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
}
