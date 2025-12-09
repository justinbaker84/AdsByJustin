import TradeSecretsLayout from '@/app/components/TradeSecretsLayout';

export const metadata = {
  title: 'TikTok Ads Trade Secrets - Ads By Justin',
  description: 'Top 5 things industry veterans do with TikTok Ads to maximize ROI and conversion rates',
};

const sections = [
  {
    title: 'TTCM Is A Secret Weapon',
    content: `The Tik Tok Creator Marketplace (TTCM) is a place to find content creators that want to create ads for brands.

These are people who have already had success on Tik Tok building their own audience and now they want to get paid for the skills they have developed.

You can filter creators by location, language, audience demographics, categories they create content for and more. You also get to see detailed statistics about how their videos perform. The level of detail that Tik Tok provides here is shocking. You basically get 5 pages of detailed stats for every metric you could want.`,
    imagePath: '/trade-secrets/tik-tok/ttcm.png',
  },
  {
    title: 'Top Ads Library',
    content: `Tik Tok is the only ad platform that shows you all the top performing ads on the platform with detailed statistics about each of them.

You can pick any country, industry, advertising objective etc. and Tik Tok will show you the top performing ads over any time period you want. They even show you statistics on how the ads performed.

By reviewing the best ads, you can quickly learn how to make elite ads. It is shocking to see how much information Tik Tok will share about how other ads are performing.`,
    imagePath: '/trade-secrets/tik-tok/tt-top-ads.webp',
  },
  {
    title: 'Use TT Videos On Any Platform',
    content: `When you get a video ad that works well on Tik Tok it usually works well on every other social media platform also.

Tik Tok has taken off because it has unleashed a lot of creativity that was not expressed on other platforms.

Many advertisers go to Tik Tok to make social media style video ads every if they don't run them on Tik Tok. It is often the cheapest and best way to make great video ads.`,
    imagePath: '/trade-secrets/tik-tok/logos.png',
  },
  {
    title: 'Do Not Use The External Networks',
    content: `Only run ads on Tik Tok. The other placements that I have unchecked in this screenshot do not convert.

Most advertisers do not measure any conversion event; they measure the performance of their ads by clicks and impressions. These two other placements exist to inflate those metrics at low cost.

Facebook does the same thing with their external network.

They are a waste of money for any company that wants their ads to result in sales.`,
    imagePath: '/trade-secrets/tik-tok/tt-placements.png',
  },
  {
    title: 'FYI Broad Targeting Only',
    content: `Tik Tok's ad targeting capabilities are nowhere near the sophistication that Facebook has. They have a list of interest groups you can target, but most are ineffective.

The only interest targeting that is effective has to do with the type of videos people watch. For example, many women watch videos about makeup. If you sell makeup Tik Tok is great for helping you reach women interested in makeup.`,
    imagePath: null,
  },
];

export default function TikTokAdsTradeSecrets() {
  return (
    <TradeSecretsLayout
      pageTitle="TikTok Ads Trade Secrets"
      subtitle="Top 5 Things Industry Veterans Do"
      sections={sections}
    />
  );
}

