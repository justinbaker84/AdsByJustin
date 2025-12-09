import AboutMeLayout from '@/app/components/AboutMeLayout';

export const metadata = {
  title: 'What To Expect - Ads By Justin',
  description: 'What you can expect when working with me',
};

const whatToExpectContent = [
  {
    title: "Speed",
    description: "If I think we are a good match I usually respond within an hour. I like to meet over zoom to review your ads and I like to do it today.",
  },
  {
    title: "Detail",
    description: "As we review your ads I will tell you exactly what I am thinking. I will show you all the important parts of your account and I will explain exactly how they are working.",
  },
  {
    title: "Owner Mindset",
    description: "I am going to treat your business like it is my own. I will be think about how the ads interact with the other parts of your business and how we can get the best results ASAP.",
  },
];

export default function WhatToExpect() {
  return (
    <AboutMeLayout
      pageTitle="What To Expect"
      content={whatToExpectContent}
      videoId="https://player.vimeo.com/video/947530316?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
      largeVideo={true}
    />
  );
}

