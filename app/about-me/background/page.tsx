import AboutMeLayout from '@/app/components/AboutMeLayout';

export const metadata = {
  title: 'My Background - Ads By Justin',
  description: 'Learn about my digital marketing experience since 2007',
};

export default function MyBackground() {
  const backgroundContent = (
    <>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        I have been doing digital marketing since 2007. I started consulting with small and medium businesses in 2014 and have been doing it ever since.
      </p>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Before I created AdsByJustin.com I worked at a big agency in Chicago called Resolution Media where I managed a team that ran all the US search ads for a Fortune 100 tech company. There I learned about managing teams and coordinating efforts with large organizations. I also got to learn how many of the other Fortune 500 clients at the agency ran their marketing campaigns.
      </p>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Before that I joined a 3 person startup called ParkWhiz.com and helped them grow to 25 employees in just 2 years. I learned the marketing tactics that make small companies grow quickly. We were so successful that we raised $12 million from investors in a $2 million and a $10 million capital injection.
      </p>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Before that I worked at ForSaleByOwner.com where I learned how to jumpstart sales at a stagnant company.
      </p>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Before that I worked at Monster.com for 3 years where I learned the basics of how to run a website from one of the original big internet companies. While Monster has fallen behind companies like LinkedIn and Indeed.com it was a $5 billion behemoth and one of the most successful internet companies when I worked there.
      </p>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Before that I got a bachelor&apos;s in business administration from The University of Wisconsin-Madison school of business in 3.5 years. US News & World Reports ranked the business school 12th in the US when I was there.
      </p>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        You can see the rest of my experience on my{' '}
        <a 
          href="https://www.linkedin.com/in/justin-baker-7aa7554/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-600 hover:text-blue-700 font-semibold"
        >
          LinkedIn profile
        </a>.
      </p>
    </>
  );

  return (
    <AboutMeLayout
      pageTitle="My Background"
      content={backgroundContent}
      videoId="https://player.vimeo.com/video/916075893?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
      videoFirst={true}
    />
  );
}

