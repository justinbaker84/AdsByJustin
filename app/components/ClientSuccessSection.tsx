import Image from "next/image";

export default function ClientSuccessSection() {
  const clients = [
    {
      name: "Launch Financial",
      result: "+350% Sales and +45% Conversion Rate",
      image: "/home/launch-financial.png"
    },
    {
      name: "Hangover IV",
      result: "+190% ROI and+35% Conversion Rate",
      image: "/home/hangover2.png"
    },
    {
      name: "iTrees",
      result: "+225% ROI and +25% Conversion Rate",
      image: "/home/itrees.png"
    }
  ];

  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-[1400px] mx-auto px-4">
        <h2 className="text-5xl font-bold text-center text-gray-900 mb-16">
          Client Success
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {clients.map((client, index) => (
            <div key={index} className="text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{client.name}</h3>
              <p className="text-xl text-gray-700 font-semibold mb-8">
                {client.result}
              </p>
              <div className="w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={client.image}
                  alt={`${client.name} website`}
                  width={0}
                  height={0}
                  className="w-full h-auto"
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
