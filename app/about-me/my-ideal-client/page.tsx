import AboutMeLayout from '@/app/components/AboutMeLayout';

export const metadata = {
  title: 'My Ideal Client - Ads By Justin',
  description: 'The type of business I work best with',
};

const idealClientContent = [
  {
    title: "Entrepreneurial",
    description: "I work best with other entrepreneurs or the people a founder put in charge.\n\nBig companies move too slow.",
  },
  {
    title: "Ambitious",
    description: "I want to work with people who want to win.\n\nI like go getters who are really trying to make something happen in the world.",
  },
  {
    title: "Can Scale",
    description: "Ideally I want to work with companies that have the potential for growth. I want operators who can scale up operations as long as I can bring them more customers.",
  },
];

export default function MyIdealClient() {
  return (
    <AboutMeLayout
      pageTitle="My Ideal Client"
      content={idealClientContent}
      videoId="https://player.vimeo.com/video/947486228?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
      largeVideo={true}
    />
  );
}

