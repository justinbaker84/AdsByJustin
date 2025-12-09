import Footer from './Footer';

interface Result {
  number: string;
  label: string;
  color: 'green' | 'red' | 'orange' | 'purple';
}

interface Tactic {
  title: string;
  description: string;
}

interface CaseStudyLayoutProps {
  pageTitle: string;
  liveLink: string;
  imagePath: string;
  challengeContent: string;
  solutionContent: string;
  results: Result[];
  tactics: Tactic[];
}

export default function CaseStudyLayout({
  pageTitle,
  liveLink,
  imagePath,
  challengeContent,
  solutionContent,
  results,
  tactics,
}: CaseStudyLayoutProps) {
  return (
    <main className="bg-white">
      {/* Hero Section with Title */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            {pageTitle}
          </h1>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <img
            src={imagePath}
            alt={pageTitle}
            className="w-full h-auto rounded-lg mb-8"
          />
          <div className="text-center">
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white font-bold text-lg px-8 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              View Live Website
            </a>
          </div>
        </div>
      </section>

      {/* The Challenge and Solution Sections - Side by Side */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* The Challenge */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">The Challenge</h2>
              <div>
                {challengeContent.split('\n\n').map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-lg text-gray-700 leading-relaxed mb-6"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* The Solution */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">The Solution</h2>
              <div>
                {solutionContent.split('\n\n').map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-lg text-gray-700 leading-relaxed mb-6"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-6xl font-bold text-gray-900 mb-16 text-center">Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {results.map((result, index) => {
              const colorClasses = {
                green: 'text-green-500',
                red: 'text-red-500',
                orange: 'text-orange-500',
                purple: 'text-purple-600',
              };

              return (
                <div key={index} className="text-center">
                  <div className={`text-6xl font-bold mb-4 ${colorClasses[result.color]}`}>
                    {result.number}
                  </div>
                  <p className={`text-xl font-semibold ${colorClasses[result.color]}`}>
                    {result.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Tactics Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Key Tactics</h2>
          <div className="space-y-4">
            {tactics.map((tactic, index) => (
              <div key={index} className="flex items-start gap-4">
                <span className="text-gray-900 font-bold text-lg mt-1">•</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 inline">
                    {tactic.title}
                  </h3>
                  <span className="text-gray-700 text-lg">
                    {' '}– {tactic.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Grow Your Business?
          </h2>
          <button className="bg-white text-blue-600 font-bold text-xl px-10 py-4 rounded-lg hover:bg-gray-100 transition shadow-lg">
            Contact Me
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}

