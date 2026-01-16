import { BETA_FORM_URL, DEMO_MAILTO } from "@/lib/links";

export default function Demo() {
  return (
    <main>
      <section className="py-24 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">See RenderDrop in action</h1>
          <p className="text-xl text-gray-400">Book a 10-minute demo to see how RenderDrop can transform your video workflow</p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-6xl mx-auto">
          {/* How it works */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">How it works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-3">Create a project</h3>
                <p className="text-gray-400">Set up your branded upload portal in seconds. Customize with your logo and colors.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-3">Send the client a branded upload link</h3>
                <p className="text-gray-400">Share your custom URL. No expired links, no confusion—just a permanent portal.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-3">Receive files instantly + reminders keep things moving</h3>
                <p className="text-gray-400">Files arrive immediately. Automatic reminders ensure nothing falls through the cracks.</p>
              </div>
            </div>
          </div>

          {/* Screenshots placeholder */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Screenshots</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-8 aspect-video flex items-center justify-center">
                <p className="text-gray-500">Portal Preview</p>
              </div>
              <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-8 aspect-video flex items-center justify-center">
                <p className="text-gray-500">Upload Interface</p>
              </div>
              <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-8 aspect-video flex items-center justify-center">
                <p className="text-gray-500">Dashboard View</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Click below to book your demo. We&apos;ll send you a calendar link to choose a time that works for you.
            </p>
            <a
              href={DEMO_MAILTO}
              className="inline-block px-8 py-3 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all transform hover:-translate-y-1"
            >
              Book a 10-min demo
            </a>
            <p className="text-gray-400 mt-6 text-sm">
              Or <a href={BETA_FORM_URL} className="text-[#6366f1] hover:underline">request beta access</a> to try it yourself
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
