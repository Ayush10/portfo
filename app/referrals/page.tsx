export default function ReferralsPage() {
  const companies = [
    {
      name: 'Google',
      type: 'Tech Giant',
      positions: ['Product Manager', 'Senior PM', 'Principal PM'],
      description: 'Open positions in various product teams including AI, Cloud, and Consumer products.',
      gradient: 'from-blue-500 to-cyan-500',
      logo: '🔍',
    },
    {
      name: 'Meta',
      type: 'Social Media',
      positions: ['PM - WhatsApp', 'PM - Instagram', 'PM - AR/VR'],
      description: 'Building the future of social connection and metaverse experiences.',
      gradient: 'from-blue-600 to-indigo-600',
      logo: '📘',
    },
    {
      name: 'Amazon',
      type: 'E-commerce & Cloud',
      positions: ['PM - AWS', 'PM - Retail', 'Senior TPM'],
      description: 'Customer-obsessed product roles across AWS and consumer products.',
      gradient: 'from-orange-500 to-amber-500',
      logo: '📦',
    },
    {
      name: 'Microsoft',
      type: 'Enterprise Software',
      positions: ['PM - Azure', 'PM - Office', 'PM - AI'],
      description: 'Empowering every person and organization to achieve more.',
      gradient: 'from-blue-400 to-cyan-400',
      logo: '🪟',
    },
    {
      name: 'Stripe',
      type: 'Fintech',
      positions: ['Product Manager', 'Technical PM', 'Growth PM'],
      description: 'Building economic infrastructure for the internet.',
      gradient: 'from-purple-500 to-indigo-500',
      logo: '💳',
    },
    {
      name: 'Airbnb',
      type: 'Marketplace',
      positions: ['PM - Host', 'PM - Guest', 'PM - Experiences'],
      description: 'Creating a world where anyone can belong anywhere.',
      gradient: 'from-pink-500 to-rose-500',
      logo: '🏠',
    },
  ];

  const referralProcess = [
    {
      step: '1',
      title: 'Review Positions',
      description: 'Browse available positions and find roles that match your skills and interests.',
      icon: '🔍',
    },
    {
      step: '2',
      title: 'Prepare Materials',
      description: 'Update your resume and prepare your portfolio highlighting relevant experience.',
      icon: '📝',
    },
    {
      step: '3',
      title: 'Request Referral',
      description: "Reach out with your resume and a brief note about why you're interested in the role.",
      icon: '📧',
    },
    {
      step: '4',
      title: 'Submit Application',
      description: "I'll submit your referral and you'll receive guidance on the interview process.",
      icon: '✅',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
            Job Referrals
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Helping talented product managers find their next opportunity at top tech companies.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6"></div>
        </div>

        {/* Stats Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            <div>
              <div className="text-3xl font-bold mb-1">50+</div>
              <div className="text-sm text-blue-100">Successful Referrals</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">15+</div>
              <div className="text-sm text-blue-100">Partner Companies</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">85%</div>
              <div className="text-sm text-blue-100">Interview Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">60%</div>
              <div className="text-sm text-blue-100">Offer Rate</div>
            </div>
          </div>
        </div>

        {/* Referral Process */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-8 text-center">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {referralProcess.map((step, index) => (
              <div
                key={index}
                className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 text-center"
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Companies */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-8 text-center">
            Available Opportunities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {companies.map((company, index) => (
              <div
                key={index}
                className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className={`h-2 bg-gradient-to-r ${company.gradient}`}></div>
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-5xl">{company.logo}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-1">
                        {company.name}
                      </h3>
                      <span className="text-sm text-zinc-600 dark:text-zinc-400">
                        {company.type}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                    {company.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                      Open Positions:
                    </h4>
                    <div className="space-y-2">
                      {company.positions.map((position, i) => (
                        <div
                          key={i}
                          className="text-sm text-zinc-600 dark:text-zinc-400 flex items-center gap-2"
                        >
                          <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${company.gradient}`}></span>
                          {position}
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className={`w-full py-3 rounded-lg bg-gradient-to-r ${company.gradient} text-white font-medium hover:shadow-lg transition-all duration-200`}>
                    Request Referral
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-br from-zinc-50 to-purple-50 dark:from-zinc-900 dark:to-zinc-800 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">
            Send me your resume and a brief note about your background and the roles you're interested in.
            I'll review and get back to you within 2-3 business days.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-xl transition-all duration-200">
            Contact Me for Referral
          </button>
        </div>
      </div>
    </div>
  );
}
