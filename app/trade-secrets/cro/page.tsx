import TradeSecretsLayout from '@/app/components/TradeSecretsLayout';

export const metadata = {
  title: 'Conversion Rate Optimization Trade Secrets - Ads By Justin',
  description: 'Top 5 things industry veterans do with Conversion Rate Optimization to maximize sales',
};

const sections = [
  {
    title: 'Identify Top 3 Customer Problems',
    content: `For most businesses the customer only has 2-3 things that are top of mind when they are shopping.

If every aspect of your site addresses those concerns better than any competitor, you will win the business.

You can address other minor concerns on the site, but the focus should be on making it clear you are the best possible solution for their top 3 problems.`,
    imagePath: '/trade-secrets/cro/top-3-priorities.jpg',
  },
  {
    title: 'Review Competitor Sites',
    content: `Competitor sites are a great way to identify best practices. If you don't have many direct competitors then review sites that are relevant to what you do.

I reviewed about 200 agency websites when I was starting to build this site. It took me about 2 days, but by the end of it I had seen it all and I was able to identify the very best tactics.

By combining the best aspects of the best sites you can create a site that is better than anything else in the industry.`,
    imagePath: '/trade-secrets/cro/Competitors1.png',
  },
  {
    title: 'Keep It Simple',
    content: `Most business owners know so much about their business that they give other people information overload.

Your customers can only take in a limited amount of information in 30 seconds. You probably won't even have their attention for that long.

Strong visuals with minimal text are the best way to get people to want to learn more.`,
    imagePath: '/trade-secrets/cro/simplicity.jpg',
  },
  {
    title: 'Test The Conversion Process',
    content: `Test the process people take to convert on your website like your life depends on it.

Test it on multiple devices with different browsers. Go to Best Buy and see how it looks on 30 different devices. That is what I do.

Whether you have a checkout, a lead form, or a call button I cannot tell you how many times I have seen a clear problem that is reducing the conversion rate by 50% because nobody ever looked.`,
    imagePath: '/trade-secrets/cro/testing.jpg',
  },
  {
    title: 'Hotjar Is A Life Saver',
    content: `Hotjar is software that records a video for every visit to your website. You get to see exactly what the user sees during their visit to your site.

When you see exactly how people interact with your site you will be able to come up with 100 ideas on how to improve things that you never would have thought of before.`,
    imagePath: '/trade-secrets/cro/hotjar.png',
  },
];

export default function CROTradeSecrets() {
  return (
    <TradeSecretsLayout
      pageTitle="Conversion Rate Optimization Trade Secrets"
      subtitle="Top 5 Things Industry Veterans Do"
      sections={sections}
    />
  );
}

