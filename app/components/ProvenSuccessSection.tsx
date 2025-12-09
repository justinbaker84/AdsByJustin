import Image from "next/image";

export default function ProvenSuccessSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left: Content */}
          <div className="flex flex-col gap-8">
            <h2 className="text-5xl font-bold text-gray-900">
              Proven Success
            </h2>

            <p className="text-xl text-gray-700 leading-relaxed">
              Over the last 5 years my clients have done well. This chart shows annual sales driven by the ads I manage.
            </p>

            <p className="text-xl text-gray-700 leading-relaxed">
              Before I started my own company I was at a big agency in Chicago where I ran a team that spent 10MM a year for a Fortune 100 company.
            </p>

            <p className="text-xl text-gray-700 leading-relaxed">
              Before that I helped a startup grow from 3 to 23 employees in just 2 years.
            </p>
          </div>

          {/* Right: Image */}
          <div className="flex flex-col gap-6 items-center justify-center w-full">
            <h3 className="text-5xl font-bold text-gray-900 text-center">
              Client Sales (MM)
            </h3>
            <Image
              src="/client-sales.jpg"
              alt="Client sales chart"
              width={450}
              height={360}
              className="rounded-lg w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

