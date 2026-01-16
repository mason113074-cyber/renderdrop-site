export default function Privacy() {
  return (
    <main>
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-400 mb-12 italic">Last updated: December 2024</p>

          <div className="space-y-8 text-gray-300">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
              <p className="leading-relaxed">
                RenderDrop (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Information We Collect</h2>
              <p className="leading-relaxed mb-3">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Email address and account information</li>
                <li>Project metadata (project names, client information you provide)</li>
                <li>Files and content you upload through our service</li>
                <li>Communication data when you contact us</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">3. How We Use Your Information</h2>
              <p className="leading-relaxed mb-3">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices and support messages</li>
                <li>Respond to your comments and questions</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Data Sharing</h2>
              <p className="leading-relaxed">
                We do not sell your data. We may share your information only with service providers who help us operate our service, and only to the extent necessary to provide those services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Data Security</h2>
              <p className="leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Contact Us</h2>
              <p className="leading-relaxed">
                If you have questions about this Privacy Policy, please contact us at{" "}
                <a href="mailto:hello@renderdrop.app" className="text-[#6366f1] hover:underline">
                  hello@renderdrop.app
                </a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
