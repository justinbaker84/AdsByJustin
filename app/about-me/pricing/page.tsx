import AboutMeLayout from '@/app/components/AboutMeLayout';

export const metadata = {
  title: 'Pricing - Ads By Justin',
  description: 'My pricing structure for digital marketing services',
};

const pricingContent = `I charge 10% of what you spend each month.

I send an invoice via paypal after the month is over.

If you get over $50K a month I can bring that percentage down.`;

export default function Pricing() {
  return (
    <AboutMeLayout
      pageTitle="Pricing"
      content={pricingContent}
    />
  );
}

