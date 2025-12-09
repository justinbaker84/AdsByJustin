import Image from "next/image";

export default function AboutExpertSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Headshot */}
          <div className="flex justify-center md:justify-start">
            <Image
              src="/headshot2.png"
              alt="Justin Baker headshot"
              width={500}
              height={650}
              className="rounded-lg"
            />
          </div>

          {/* Right: Content */}
          <div className="flex flex-col gap-8">
            <h2 className="text-5xl font-bold text-gray-900">
              Get A Real Expert
            </h2>

            <p className="text-xl text-gray-700 leading-relaxed">
              My name is Justin Baker and I have been managing digital ads full time for 13 years. My first job out of college was at Monster.com in 2007.
            </p>

            <p className="text-xl text-gray-700 leading-relaxed">
              I am a one person shop. There are no junior employees.
            </p>

            <p className="text-xl text-gray-700 leading-relaxed">
              I think like an owner because I am one.
            </p>

            <button className="bg-blue-600 text-white font-medium px-8 py-3 rounded-lg hover:bg-blue-700 transition w-fit">
              About Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

