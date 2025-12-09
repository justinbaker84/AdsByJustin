import TradeSecretsLayout from '@/app/components/TradeSecretsLayout';

export const metadata = {
  title: 'Facebook Ads Trade Secrets - Ads By Justin',
  description: 'Top 5 things industry veterans do with Facebook Ads to maximize ROI and conversion rates',
};

const sections = [
  {
    title: 'Crisp Messaging',
    content: `One of the most common mistakes businesses make is trying to communicate too many concepts in their ads.

Over 90% of Facebook/Instagram usage happens on mobile devices. Ads that look great on desktop computers often look way too complicated on mobile.

Mobile ads need to be both simple and compelling. Ads need to compete for attention with professional content creators and top celebrities. That is hard to do, and it is why people like me exist.`,
    imagePath: '/trade-secrets/facebook/crisp-messaging.png',
  },
  {
    title: 'Household Income Targeting',
    content: `Most companies find their sales follow the 80/20 rule where 80% of the sales come from 20% of the customers. Usually, those people are disproportionately high income.

If that is the case in your business, then it makes sense to target your ads more toward higher income households.

The top 20% of households in the US get about 52% of all income and an even higher percentage of disposable income.`,
    imagePath: '/trade-secrets/facebook/fb-income.png',
  },
  {
    title: 'Layer Targeting Requirements',
    content: `Facebook has pre-defined categories of targeting that advertisers can use to find their ideal audience. These categories do not work as well as they used to so many advertisers need to set more than one requirement.

For example if you sell high tech equipment to a certain industry you can build an audience of people who work in that industry and are also interested in high tech gear.`,
    imagePath: '/trade-secrets/facebook/Two-Circle-Diagram-2-Circles-Diagrams.jpg',
  },
  {
    title: 'Only Use The Best Placements',
    content: `Never use Facebook's off platform audience network because the traffic never converts.

The two placements that convert traffic by far the best are the feed options for Facebook and Instagram. Those are the two placements that are most targeted to people when they are in browse mode.

Other placements target people when they are in the middle of something, and nobody likes being interrupted.

The conversion data always backs up the idea of polite ad placement.`,
    imagePath: '/trade-secrets/facebook/fb-placements.png',
  },
  {
    title: 'Measure Conversion Steps',
    content: `Usually e-commerce sites have a conversion rate of 1% or less so it can take a long time to get enough data to make decisions.

By measuring conversion steps like people adding items to a cart you can get actionable data faster.

If you collect leads instead of selling items you can still measure site engagement metrics like time on site or pages visited as an early indicator.`,
    imagePath: '/trade-secrets/facebook/Conversion-Funnel (1).png',
  },
];

export default function FacebookAdsTradeSecrets() {
  return (
    <TradeSecretsLayout
      pageTitle="Facebook Ads Trade Secrets"
      subtitle="Top 5 Things Industry Veterans Do"
      sections={sections}
    />
  );
}

