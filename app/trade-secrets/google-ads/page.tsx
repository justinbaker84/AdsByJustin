import TradeSecretsLayout from '@/app/components/TradeSecretsLayout';

export const metadata = {
  title: 'Google Ads Trade Secrets - Ads By Justin',
  description: 'Top 5 things industry veterans do with Google Ads to maximize ROI and conversion rates',
};

const sections = [
  {
    title: 'Search Terms Report',
    content: `This is by far the #1 thing great google ads managers look at. It shows you the exact search terms that your ads showed up on.

Search terms are different from keywords in Google lingo. You enter keywords in your campaign but at this point Google pretty much takes them as guidelines and then runs your ads on whatever they think is relevant.

To see what you are actually getting you need to be looking at all the search terms on a regular basis. Then you need to do a lot of work to make sure you are paying a reasonable price for specific types of search terms.`,
    imagePath: '/trade-secrets/google/search terms.png',
  },
  {
    title: 'Manually Set Everything',
    content: `Google's automated settings almost never work out well for the advertisers. However, they are a fantastic way to help Google hit their quarterly goals.

The one exception is e-commerce sites in popular categories that have a lot of data for their AI algorithms to train on. I have seen that work well.

But for everybody else manual is the way to go.

I can't risk saying anything bad about Google in public, but I would be happy to have a more candid conversation about this over a Zoom call.`,
    imagePath: '/trade-secrets/google/manual.png',
  },
  {
    title: 'Device Bid Adjustments',
    content: `For most businesses conversion rates vary greatly depending on what type of device a user is on. Google breaks this down into 3 categories: Computers (which includes laptops), mobile phones, and tablets.

You can easily adjust the bids for each device up or down depending on how they perform.

You will also find that traffic from tablets is incredibly small.`,
    imagePath: '/trade-secrets/google/device-bid-adj.png',
  },
  {
    title: 'Demographic Bid Adjustments',
    content: `Google lets you adjust campaigns based on 3 demographic categories: Age, Gender, and household income.

These are estimates Google makes so they are not as good as self-reported data on Facebook, but they are pretty good.

The main one I use is household income. If sales disproportionately come from higher income households in your industry it makes sense to pay more for that traffic.

Some restrictions apply.`,
    imagePath: '/trade-secrets/google/demographics.png',
  },
  {
    title: 'Focus On ROI',
    content: `I know this sounds obvious, but two issues come up.

First Google has 100 ways to distract you from this goal to get you to spend more money.

Second, every human gets distracted by life, coworkers, a cool new idea you heard from an influencer.

Just like it is helpful for a dentist to remind you to brush and floss, I always remind people to focus on ROI.`,
    imagePath: '/trade-secrets/google/ROI.png',
  },
];

export default function GoogleAdsTradeSecrets() {
  return (
    <TradeSecretsLayout
      pageTitle="Google Ads Trade Secrets"
      subtitle="Top 5 Things Industry Veterans Do"
      sections={sections}
    />
  );
}

