import { BETA_FORM_URL } from "@/lib/links";

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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Freelancer Plan */}
            <div className="bg-[#1a1a1a] p-8 rounded-xl border border-[#2a2a2a]">
              <h3 className="text-2xl font-semibold mb-4">Freelancer</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">$49</span>
                <span className="text-gray-400 ml-2">/mo</span>
              </div>
              <p className="text-gray-400 mb-6">For solo editors</p>
              <ul className="space-y-3 mb-8 text-gray-300">
                <li className="flex items-start">
                  <span className="text-[#6366f1] mr-2">✓</span>
                  <span>3 active projects</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#6366f1] mr-2">✓</span>
                  <span>Unlimited file uploads</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#6366f1] mr-2">✓</span>
                  <span>Email reminders</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#6366f1] mr-2">✓</span>
                  <span>Basic customization</span>
                </li>
              </ul>
              <a
                href={BETA_FORM_URL}
                className="block w-full px-6 py-3 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white rounded-lg font-semibold text-center hover:shadow-lg hover:shadow-purple-500/30 transition-all"
              >
                Request beta
              </a>
            </div>

            {/* Studio Plan */}
            <div className="bg-[#1a1a1a] p-8 rounded-xl border-2 border-[#6366f1] relative transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white px-4 py-1 rounded-full text-sm font-semibold">
                Popular
              </div>
              <h3 className="text-2xl font-semibold mb-4">Studio</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">$99</span>
                <span className="text-gray-400 ml-2">/mo</span>
              </div>
              <p className="text-gray-400 mb-6">For small teams</p>
              <ul className="space-y-3 mb-8 text-gray-300">
                <li className="flex items-start">
                  <span className="text-[#6366f1] mr-2">✓</span>
                  <span>10 active projects</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#6366f1] mr-2">✓</span>
                  <span>Unlimited file uploads</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#6366f1] mr-2">✓</span>
                  <span>Email + SMS reminders</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#6366f1] mr-2">✓</span>
                  <span>Advanced customization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#6366f1] mr-2">✓</span>
                  <span>Priority support</span>
                </li>
              </ul>
              <a
                href={BETA_FORM_URL}
                className="block w-full px-6 py-3 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white rounded-lg font-semibold text-center hover:shadow-lg hover:shadow-purple-500/30 transition-all"
              >
                Request beta
              </a>
            </div>

            {/* Concierge Setup */}
            <div className="bg-[#1a1a1a] p-8 rounded-xl border border-[#2a2a2a]">
              <h3 className="text-2xl font-semibold mb-4">Concierge Setup</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">$299</span>
                <span className="text-gray-400 ml-2">one-time</span>
              </div>
              <p className="text-gray-400 mb-6">We set it up for you</p>
              <ul className="space-y-3 mb-8 text-gray-300">
                <li className="flex items-start">
                  <span className="text-[#6366f1] mr-2">✓</span>
                  <span>Custom portal design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#6366f1] mr-2">✓</span>
                  <span>Dedicated onboarding</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#6366f1] mr-2">✓</span>
                  <span>Team training session</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#6366f1] mr-2">✓</span>
                  <span>Priority migration support</span>
                </li>
              </ul>
              <a
                href={BETA_FORM_URL}
                className="block w-full px-6 py-3 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white rounded-lg font-semibold text-center hover:shadow-lg hover:shadow-purple-500/30 transition-all"
              >
                Request beta
              </a>
            </div>
          </div>
          <p className="text-center text-gray-400 mt-8 text-sm">
            Billing will be enabled after beta.
          </p>
        </div>
      </section>
    </main>
  );
}
