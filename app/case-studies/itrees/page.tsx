import CaseStudyLayout from '@/app/components/CaseStudyLayout';

export const metadata = {
  title: 'iTrees Case Study - Ads By Justin',
  description: 'Tree care service company grows business with strategic digital marketing',
};

const challengeContent = `iTrees is a tree care service provider that needed to improve their digital presence and generate more qualified leads.

Without a solid digital marketing strategy, they were missing out on potential customers searching for tree care services online.

They needed a comprehensive approach to compete effectively in their market.`;

const solutionContent = `I developed a strategic approach focused on local search optimization and targeted Google Ads to reach customers actively looking for tree care services.

We optimized their website for conversions and implemented a careful keyword strategy to ensure they were reaching the right customers at the right time.

The combination of improved visibility and targeted advertising resulted in significant business growth.`;

const results = [
  {
    number: '200%',
    label: 'Lead Increase',
    color: 'green' as const,
  },
  {
    number: '50%',
    label: 'Lower Customer Acquisition Cost',
    color: 'red' as const,
  },
  {
    number: '85%',
    label: 'Conversion Rate Improvement',
    color: 'orange' as const,
  },
  {
    number: '2x',
    label: 'Revenue Growth',
    color: 'purple' as const,
  },
];

const tactics = [
  {
    title: 'Local Search Optimization',
    description: 'Implemented a strong local SEO strategy and Google Business Profile optimization to ensure iTrees appeared in local search results when customers were looking for tree care services in their area.',
  },
  {
    title: 'Targeted Keyword Strategy',
    description: 'Developed a focused keyword strategy targeting high-intent search terms related to specific tree care services. This ensured ad spend was directed toward customers most likely to convert.',
  },
  {
    title: 'Mobile-Optimized Website',
    description: 'Many customers search for tree care services on mobile devices. We optimized the website for mobile conversions, making it easy for customers to request quotes or schedule services.',
  },
];

export default function ITreesCaseStudy() {
  return (
    <CaseStudyLayout
      pageTitle="iTrees Case Study"
      liveLink="https://itrees.com"
      imagePath="/case-studies/itrees-stats_updated.png"
      challengeContent={challengeContent}
      solutionContent={solutionContent}
      results={results}
      tactics={tactics}
    />
  );
}

