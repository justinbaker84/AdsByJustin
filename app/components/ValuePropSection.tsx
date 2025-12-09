import Image from "next/image";

export default function ValuePropSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: No Contract Image */}
          <div className="flex justify-center md:justify-start">
            <Image
              src="/home/no-contract.webp"
              alt="No Contract stamp"
              width={0}
              height={0}
              className="w-auto h-auto max-w-full"
              unoptimized
            />
          </div>

          {/* Right: Text Content */}
          <div className="flex flex-col gap-8">
            <p className="text-xl text-gray-700 leading-relaxed">
              I don&apos;t lock people into contracts. People stay with me for years because I deliver exceptional results.
            </p>
            
            <p className="text-xl text-gray-900 font-bold">
              It is a handshake deal.
            </p>
            
            <p className="text-xl text-gray-700 leading-relaxed">
              I can deliver better service at lower prices than an agency because I don&apos;t have the overhead costs they do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
