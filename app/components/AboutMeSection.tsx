export default function AboutMeSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-gray-900 mb-12">
          About Me
        </h2>

        <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
          <iframe 
            src="https://player.vimeo.com/video/916075893?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479" 
            frameBorder="0" 
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
            title="About Me"
          />
        </div>
      </div>
    </section>
  );
}

