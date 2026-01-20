import Link from "next/link";

export default function Pricing() {
  return (
    <main>
      <section className="py-24 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Simple, transparent pricing</h1>
          <p className="text-xl text-gray-400">Choose the plan that fits your workflow</p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Free Plan */}
            <div className="bg-[#1a1a1a] p-8 rounded-xl border border-[#2a2a2a]">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold mb-2">Free (Beta)</h2>
                <div className="mb-4">
                  <span className="text-4xl font-bold">$0</span>
                </div>
                <p className="text-gray-400 text-sm">Try RenderDrop risk-free</p>
              </div>
              <ul className="space-y-3 mb-8 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-[#6366f1] mr-2">✓</span>
                  <span>1 active project</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#6366f1] mr-2">✓</span>
                  <span>Basic branded upload portal</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#6366f1] mr-2">✓</span>
                  <span>Email reminders</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#6366f1] mr-2">✓</span>
                  <span>Fair-use storage limits</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#6366f1] mr-2">✓</span>
                  <span>7-day file retention</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#6366f1] mr-2">✓</span>
                  <span>Community support</span>
                </li>
              </ul>
              <Link
                href="/get-started"
                className="block w-full px-6 py-3 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white rounded-lg font-semibold text-center hover:shadow-lg hover:shadow-purple-500/30 transition-all"
              >
                Get Started
              </Link>
            </div>

            {/* Setup Sprint - Most Popular */}
            <div className="bg-[#1a1a1a] p-8 rounded-xl border-2 border-[#6366f1] relative transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold mb-2">Setup Sprint</h2>
                <div className="mb-4">
                  <span className="text-4xl font-bold">$499</span>
                  <span className="text-gray-400 ml-2">one-time</span>
                </div>
                <p className="text-gray-400 text-sm">Get up and running in days</p>
              </div>
              <ul className="space-y-3 mb-8 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-[#6366f1] mr-2">✓</span>
                  <span>Custom branded portal with logo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#6366f1] mr-2">✓</span>
                  <span>Dedicated subdomain setup</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#6366f1] mr-2">✓</span>
                  <span>Project portal configuration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#6366f1] mr-2">✓</span>
                  <span>Team onboarding session</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#6366f1] mr-2">✓</span>
                  <span>Custom email templates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#6366f1] mr-2">✓</span>
                  <span>Migration support included</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#6366f1] mr-2">✓</span>
                  <span>30 days priority support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#6366f1] mr-2">✓</span>
                  <span>Documentation & best practices</span>
                </li>
              </ul>
              <Link
                href="/get-started"
                className="block w-full px-6 py-3 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white rounded-lg font-semibold text-center hover:shadow-lg hover:shadow-purple-500/30 transition-all"
              >
                Get Started
              </Link>
            </div>

            {/* Concierge+ */}
            <div className="bg-[#1a1a1a] p-8 rounded-xl border border-[#2a2a2a]">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold mb-2">Concierge+</h2>
                <div className="mb-4">
                  <span className="text-4xl font-bold">$999</span>
                  <span className="text-gray-400 ml-2">one-time</span>
                </div>
                <p className="text-gray-400 text-sm">White-glove setup & support</p>
              </div>
              <ul className="space-y-3 mb-8 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-[#6366f1] mr-2">✓</span>
                  <span>Everything in Setup Sprint</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#6366f1] mr-2">✓</span>
                  <span>Custom portal design & branding</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#6366f1] mr-2">✓</span>
                  <span>Dedicated account manager</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#6366f1] mr-2">✓</span>
                  <span>Extended team training (2 sessions)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#6366f1] mr-2">✓</span>
                  <span>Priority migration & data transfer</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#6366f1] mr-2">✓</span>
                  <span>90 days priority support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#6366f1] mr-2">✓</span>
                  <span>Custom workflow integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#6366f1] mr-2">✓</span>
                  <span>SLA guarantee</span>
                </li>
              </ul>
              <a
                href="mailto:hello@renderdrop.app?subject=Concierge+ Inquiry"
                className="block w-full px-6 py-3 border-2 border-white text-white rounded-lg font-semibold text-center hover:bg-white hover:text-black transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          {/* 60-second verification checklist (under Setup Sprint) */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-[#1a1a1a] p-8 rounded-xl border border-[#2a2a2a]">
              <h3 className="text-2xl font-semibold mb-6 text-center">60-Second Verification Checklist</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
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
