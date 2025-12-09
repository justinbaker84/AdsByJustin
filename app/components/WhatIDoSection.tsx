import Image from "next/image";

export default function WhatIDoSection() {
  const services = [
    {
      title: "Google",
      description: "The #1 ad platform for small and medium businesses. It is the best way to reach a niche audience when they want to buy.",
      linkText: "Trade Secrets",
      image: "/home/g-logo.png"
    },
    {
      title: "Facebook",
      description: "If Facebook has the ability to reach your audience you can get great results with elite ad creative and a little know-how.",
      linkText: "Trade Secrets",
      image: "/home/fb-logo.png"
    },
    {
      title: "Tik Tok",
      description: "The targeting is not as good as Facebook, but the traffic is a lot cheaper because there is less competition among advertisers.",
      linkText: "Trade Secrets",
      image: "/home/tik-tok-logo.jpg"
    },
    {
      title: "CRO",
      description: "Conversion Rate Optimization means getting more people to convert into sales. It is a LOT cheaper than buying more traffic.",
      linkText: "Trade Secrets",
      image: "/home/cro.png"
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-gray-900 mb-16">
          What I Do
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">{service.title}</h3>
              <div className="mb-6 flex items-center justify-center">
                <Image
                  src={service.image}
                  alt={`${service.title} logo`}
                  width={0}
                  height={0}
                  className="w-auto h-auto"
                  unoptimized
                />
              </div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">{service.description}</p>
              <button className="bg-blue-600 text-white font-medium px-8 py-3 rounded-lg hover:bg-blue-700 transition">
                {service.linkText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

