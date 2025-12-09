import AboutMeLayout from '@/app/components/AboutMeLayout';

export const metadata = {
  title: 'My Process - Ads By Justin',
  description: 'How I work with clients to improve their digital marketing',
};

const processContent = [
  {
    title: "Let's Talk",
    description: "I like to do a 30 minute zoom call where I learn more about your business and your goals. Then I like to review your google ads with you and I will let you know the good and the bad of what I am seeing.\n\nAs long as you are spending $4,000 a month or more on your ads then I am interested.",
  },
  {
    title: "Let's Work Together",
    description: "If that goes well and you want to work with me I am ready to go. I will just need access to your account and then I will probably start that day. Normally it only takes me a week to get things really dialed in.\n\nI don't use contracts but I would be happy to sign one if you want me to.",
  },
  {
    title: "Long Term",
    description: "Usually we will see within 2 weeks how much I can improve your ROI. After that we can meet as much or as little as you want. I can create any kind of reporting you want.\n\nNormally at that point people are really happy and they just want me to send them a monthly update and keep it all working.",
  },
];

export default function MyProcess() {
  return (
    <AboutMeLayout
      pageTitle="My Process"
      content={processContent}
      videoId="https://player.vimeo.com/video/947181252?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
      largeVideo={true}
    />
  );
}

