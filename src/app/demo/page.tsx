export default function Demo() {
  const demoUrl = process.env.NEXT_PUBLIC_DEMO_URL;

  return (
    <main>
      <section className="py-24 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">See RenderDrop in action</h1>
          <p className="text-xl text-gray-400 mb-10">
            A persistent, branded upload portal for video teams—built for large files and busy clients.
          </p>
          {demoUrl ? (
            <a
              href={demoUrl}
              className="inline-block px-8 py-3 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all transform hover:-translate-y-1"
            >
              Open Demo
            </a>
          ) : (
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 max-w-2xl mx-auto">
              <p className="text-gray-300">
                Set NEXT_PUBLIC_DEMO_URL in Vercel, then redeploy.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
