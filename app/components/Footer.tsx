import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Trade Secrets */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold border-b-2 border-blue-600 pb-2 w-fit">Trade Secrets</h3>
          <ul className="space-y-2 text-gray-300 font-light">
            <li className="hover:text-white cursor-pointer">
              <Link href="/trade-secrets/google-ads">Google Ads</Link>
            </li>
            <li className="hover:text-white cursor-pointer">
              <Link href="/trade-secrets/facebook-ads">Facebook Ads</Link>
            </li>
            <li className="hover:text-white cursor-pointer">
              <Link href="/trade-secrets/tik-tok-ads">TikTok Ads</Link>
            </li>
            <li className="hover:text-white cursor-pointer">
              <Link href="/trade-secrets/cro">Conversion Rates</Link>
            </li>
          </ul>
        </div>

        {/* Case Studies */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold border-b-2 border-blue-600 pb-2 w-fit">Case Studies</h3>
          <ul className="space-y-2 text-gray-300 font-light">
            <li className="hover:text-white cursor-pointer">
              <Link href="/case-studies/launch-financial">Launch Financial</Link>
            </li>
            <li className="hover:text-white cursor-pointer">
              <Link href="/case-studies/hangover-iv">Hangover IV</Link>
            </li>
            <li className="hover:text-white cursor-pointer">
              <Link href="/case-studies/itrees">iTrees</Link>
            </li>
          </ul>
        </div>

        {/* About Me */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold border-b-2 border-blue-600 pb-2 w-fit">About Me</h3>
          <ul className="space-y-2 text-gray-300 font-light">
            <li className="hover:text-white cursor-pointer">
              <Link href="/about-me/background">My Background</Link>
            </li>
            <li className="hover:text-white cursor-pointer">
              <Link href="/about-me/my-process">My Process</Link>
            </li>
            <li className="hover:text-white cursor-pointer">
              <Link href="/about-me/my-ideal-client">My Ideal Client</Link>
            </li>
            <li className="hover:text-white cursor-pointer">
              <Link href="/about-me/pricing">Pricing</Link>
            </li>
            <li className="hover:text-white cursor-pointer">
              <Link href="/about-me/what-to-expect">What To Expect</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold border-b-2 border-blue-600 pb-2 w-fit">Contact</h3>
          <div className="space-y-4 text-gray-300 font-light">
            <p className="hover:text-white cursor-pointer">justin@adsbyjustin.com</p>
            <p>
              9801 Eschweiler Dr<br />
              Wauwatosa, WI 53226
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

