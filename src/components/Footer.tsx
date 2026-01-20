import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#141414] border-t border-[#2a2a2a] mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-bold text-white">RenderDrop</div>
          <div className="flex gap-6 flex-wrap justify-center">
            <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">
              Pricing
            </Link>
            <Link href="/get-started" className="text-gray-400 hover:text-white transition-colors">
              Get Started
            </Link>
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
              Terms
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[#2a2a2a] text-center text-gray-400 text-sm">
          <p>&copy; 2024 RenderDrop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
