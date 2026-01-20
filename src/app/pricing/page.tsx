export default function Pricing() {
  return (
    <main>
      <section className="py-24 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Simple, transparent pricing</h1>
          <p className="text-xl text-gray-400">Get started with our Setup Sprint</p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-4xl mx-auto">
          {/* Main Package */}
          <div className="bg-[#1a1a1a] p-8 rounded-xl border-2 border-[#6366f1] mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Setup Sprint</h2>
              <div className="mb-6">
                <span className="text-5xl font-bold">$499</span>
                <span className="text-gray-400 ml-2 text-xl">one-time</span>
              </div>
              <p className="text-gray-400 text-lg">Get your branded upload portal up and running in days, not weeks</p>
            </div>

            {/* Deliverables */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Deliverables</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-[#6366f1] mr-2">✓</span>
                  <span>Custom branded upload portal with your logo and colors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#6366f1] mr-2">✓</span>
                  <span>Dedicated subdomain setup (e.g., uploads.yourstudio.com)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#6366f1] mr-2">✓</span>
                  <span>Initial project portal configuration and testing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#6366f1] mr-2">✓</span>
                  <span>Team onboarding session and training materials</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#6366f1] mr-2">✓</span>
                  <span>Email reminder templates customized for your workflow</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#6366f1] mr-2">✓</span>
                  <span>Migration support for existing client files (if applicable)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#6366f1] mr-2">✓</span>
                  <span>30 days of priority support post-launch</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#6366f1] mr-2">✓</span>
                  <span>Documentation and best practices guide</span>
                </li>
              </ul>
            </div>

            {/* 60-second verification checklist */}
            <div className="mb-8 bg-[#0a0a0a] p-6 rounded-lg border border-[#2a2a2a]">
              <h3 className="text-xl font-semibold mb-4">60-Second Verification Checklist</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Portal loads with your branding</span>
                  <span className="text-green-400 font-semibold">PASS</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">File upload accepts large video files (4K+)</span>
                  <span className="text-green-400 font-semibold">PASS</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Email reminders configured and tested</span>
                  <span className="text-green-400 font-semibold">PASS</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Client-facing URL is permanent and branded</span>
                  <span className="text-green-400 font-semibold">PASS</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Team has access and understands workflow</span>
                  <span className="text-green-400 font-semibold">PASS</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">No expired links or file size limits</span>
                  <span className="text-green-400 font-semibold">PASS</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a
                href="/demo"
                className="inline-block px-8 py-3 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all transform hover:-translate-y-1"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#2a2a2a]">
                <h3 className="text-lg font-semibold mb-2">What&apos;s included in the Setup Sprint?</h3>
                <p className="text-gray-400">The Setup Sprint includes full portal configuration, branding, subdomain setup, team training, and 30 days of priority support. See the deliverables list above for complete details.</p>
              </div>
              <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#2a2a2a]">
                <h3 className="text-lg font-semibold mb-2">How long does the Setup Sprint take?</h3>
                <p className="text-gray-400">Typically 3-5 business days from start to completion, depending on your branding assets and team availability for the onboarding session.</p>
              </div>
              <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#2a2a2a]">
                <h3 className="text-lg font-semibold mb-2">What happens after the Setup Sprint?</h3>
                <p className="text-gray-400">You&apos;ll have a fully functional branded portal ready to use. Ongoing usage is included—no additional monthly fees for the Setup Sprint package.</p>
              </div>
              <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#2a2a2a]">
                <h3 className="text-lg font-semibold mb-2">Can I customize the portal after setup?</h3>
                <p className="text-gray-400">Yes, you can update branding, colors, and settings anytime through the dashboard. The Setup Sprint ensures everything is configured correctly from day one.</p>
              </div>
              <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#2a2a2a]">
                <h3 className="text-lg font-semibold mb-2">What file sizes are supported?</h3>
                <p className="text-gray-400">RenderDrop is optimized for large files. There are no file size limits—perfect for 4K, 8K, and raw footage uploads.</p>
              </div>
              <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#2a2a2a]">
                <h3 className="text-lg font-semibold mb-2">Do links expire?</h3>
                <p className="text-gray-400">No. Your portal URLs are permanent. Once set up, clients can use the same link indefinitely—no more expired links or chasing clients for new uploads.</p>
              </div>
              <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#2a2a2a]">
                <h3 className="text-lg font-semibold mb-2">What if I need help after the 30-day support period?</h3>
                <p className="text-gray-400">Standard support is always available. Priority support (faster response times) is included for the first 30 days post-launch.</p>
              </div>
              <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#2a2a2a]">
                <h3 className="text-lg font-semibold mb-2">Is there a refund if I&apos;m not satisfied?</h3>
                <p className="text-gray-400">We&apos;re confident you&apos;ll love RenderDrop. If you&apos;re not satisfied within the first 7 days after completion, we&apos;ll work with you to make it right or provide a full refund.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
