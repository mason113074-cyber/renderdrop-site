import Link from "next/link";

export default function Nav() {
  return (
    <nav className="bg-[#141414] border-b border-[#2a2a2a] sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-white">
            RenderDrop
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">
              Pricing
            </Link>
            <Link
              href="/get-started"
              className="px-4 py-2 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white rounded-md hover:shadow-lg hover:shadow-purple-500/30 transition-all"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
