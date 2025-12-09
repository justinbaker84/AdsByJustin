import CaseStudyLayout from '@/app/components/CaseStudyLayout';

export const metadata = {
  title: 'Hangover IV Case Study - Ads By Justin',
  description: 'IV hangover treatment business increases ROI 190% through targeted digital marketing',
};

const challengeContent = `The business was started by a father and son that learned how to cure hangovers the hard way. They had a very innovative business model, but they did not have any digital marketing experience.

As new competitors copied their business model the cost of their best keywords shot up. They needed a solution that would improve profits fast if they were to maintain their lead in the market.`;

const solutionContent = `Basically I just got them up to speed on all the best practices in digital marketing.

They needed professional search ads management, a website optimized for conversions, and they needed to stop spending money on things that were not getting a good ROI.

By getting Google Analytics working properly it became easy to move their ads dollars to the things that were producing sales.`;

const results = [
  {
    number: '190%',
    label: 'ROI Increase',
    color: 'green' as const,
  },
  {
    number: '35%',
    label: 'Ad Waste Cut',
    color: 'red' as const,
  },
  {
    number: '35%',
    label: 'Conversion Rate Increase',
    color: 'orange' as const,
  },
  {
    number: '40%',
    label: 'Higher CTR',
    color: 'purple' as const,
  },
];

const tactics = [
  {
    title: 'Removing Waste',
    description: 'People were only converting if they were specifically looking for IV hangover treatment. Keywords for other forms of hangover treatments were a total waste of money.',
  },
  {
    title: 'Website Fixes',
    description: 'The website was fairly new and still had some issues. Several of the pages were loading too slow and were easily sped up by reformating the images to reasonable sizes in optimized file types. The checkout process was not intuitive because after you added an item to your cart you could only continue to checkout by clicking a button that was very out of place.',
  },
  {
    title: 'Geographic Segmentation',
    description: 'Hangover IV operates out of Las Vegas and while most people search for their service when they are already messed up, some people search ahead of time before they even fly into Sin City. Before we started working together they only ran ads locally, but I tested out the idea of running a national campaign for people who want to line up the the service before they get to town. That traffic was about 70% cheaper because none of their competitors were bidding on it and it still converted really well.',
  },
];

export default function HangoverIVCaseStudy() {
  return (
    <CaseStudyLayout
      pageTitle="Hangover IV Case Study"
      liveLink="https://hangover4.com"
      imagePath="/case-studies/hangoveriv-stats_updated.png"
      challengeContent={challengeContent}
      solutionContent={solutionContent}
      results={results}
      tactics={tactics}
    />
  );
}

