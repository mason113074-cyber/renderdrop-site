export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-b from-[#0a0a0a] to-[#141414]">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Stop chasing clients. Stop expired links.
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto">
            A persistent, branded upload portal for video teams—built for large files and busy clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@renderdrop.app?subject=RenderDrop%20Beta%20Request"
              className="px-8 py-3 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all transform hover:-translate-y-1"
            >
              Request beta
            </a>
            <a
              href="mailto:hello@renderdrop.app?subject=RenderDrop%20Demo%20Request"
              className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-black transition-colors"
            >
              Book a 10-min demo
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#141414]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Built for video professionals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#1a1a1a] p-8 rounded-xl border border-[#2a2a2a] hover:border-[#6366f1] transition-colors">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-2xl font-semibold mb-3">No expired links</h3>
              <p className="text-gray-400">
                Permanent project portals that never expire. No more chasing clients for expired links.
              </p>
            </div>
            <div className="bg-[#1a1a1a] p-8 rounded-xl border border-[#2a2a2a] hover:border-[#6366f1] transition-colors">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-2xl font-semibold mb-3">Branded client upload page</h3>
              <p className="text-gray-400">
                Your logo, your URL. Create a professional branded experience for your clients.
              </p>
            </div>
            <div className="bg-[#1a1a1a] p-8 rounded-xl border border-[#2a2a2a] hover:border-[#6366f1] transition-colors">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-2xl font-semibold mb-3">Automatic email reminders</h3>
              <p className="text-gray-400">
                Email reminders sent automatically. SMS reminders coming soon.
              </p>
            </div>
            <div className="bg-[#1a1a1a] p-8 rounded-xl border border-[#2a2a2a] hover:border-[#6366f1] transition-colors">
              <div className="text-4xl mb-4">🎬</div>
              <h3 className="text-2xl font-semibold mb-3">Built for large files</h3>
              <p className="text-gray-400">
                Optimized for 4K and 8K footage. No file size limits to worry about.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 text-center bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Ready to stop chasing clients?</h2>
          <p className="text-xl text-gray-400 mb-8">Join the beta and get early access to RenderDrop.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@renderdrop.app?subject=RenderDrop%20Beta%20Request"
              className="px-8 py-3 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all transform hover:-translate-y-1"
            >
              Request beta
            </a>
            <a
              href="mailto:hello@renderdrop.app?subject=RenderDrop%20Demo%20Request"
              className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-black transition-colors"
            >
              Book a 10-min demo
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
