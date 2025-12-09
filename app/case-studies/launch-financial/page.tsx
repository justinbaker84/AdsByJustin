import CaseStudyLayout from '@/app/components/CaseStudyLayout';

export const metadata = {
  title: 'Launch Financial Case Study - Ads By Justin',
  description: 'DSCR loan provider increases revenue 350% with targeted Google Ads strategy',
};

const challengeContent = `Three mortgage industry veterans teamed up to promote a new type of mortgage for rental property owners. DSCR loans let people get a mortgage based on the cash flow from rental properties – especially short-term rentals like Airbnb.

This opened up mortgage loans to small business owners who would not qualify for a traditional mortgage.

The industry was growing like gang busters, but they had no web presence.`;

const solutionContent = `I built a very simple initial website and set up some basic Google Ads to see if how much opportunity there was to generate leads online.

We started off with a small budget so there was little risk.

The project was immediately a success because they had the right expertise in a rapidly growing market. Over time I built them a more sophisticated site and much more sophisticated search campaigns.`;

const results = [
  {
    number: '350%',
    label: 'More Revenue',
    color: 'green' as const,
  },
  {
    number: '45%',
    label: 'Higher Conversion Rate',
    color: 'red' as const,
  },
  {
    number: '4x',
    label: 'More Qualified Leads',
    color: 'orange' as const,
  },
  {
    number: '3x',
    label: 'Headcount increase',
    color: 'purple' as const,
  },
];

const tactics = [
  {
    title: 'Precise Search Terms',
    description: 'The most important aspect of search ads is paying close attention to the intent behind each search term. Very small differences make a huge difference in how valuable the click will be. People who are searching for the exact loan product they sell (DSCR Loans) are worth 60% more per click than people who search for "investment property loan"',
  },
  {
    title: 'Compelling Ad Copy',
    description: 'Generic phrases like "Great Rates On DSCR Loans" are not very effective. Specific language that highlights key selling points works better. We have found that when we list the specific interest rates we can get for people that performs a lot better.',
  },
  {
    title: 'Industry Leading Landing Page',
    description: 'Nobody wants to have a lot of competition, but when you do you can look at all of their websites and identify best practices. Normally you will find that each site has strengths and weaknesses. By selecting the best aspects of each site and combining them you can create an outstanding page.',
  },
];

export default function LaunchFinancialCaseStudy() {
  return (
    <CaseStudyLayout
      pageTitle="Launch Financial Case Study"
      liveLink="https://launch-financial.com"
      imagePath="/case-studies/launch-financial.png"
      challengeContent={challengeContent}
      solutionContent={solutionContent}
      results={results}
      tactics={tactics}
    />
  );
}

