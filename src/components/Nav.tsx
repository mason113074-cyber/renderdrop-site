import Link from "next/link";
import { BETA_FORM_URL } from "@/lib/links";

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
            <Link href="/demo" className="text-gray-400 hover:text-white transition-colors">
              Demo
            </Link>
            <a
              href={BETA_FORM_URL}
              className="px-4 py-2 bg-[#1a1a1a] border border-[#2a2a2a] rounded-md text-white hover:bg-[#2a2a2a] transition-colors"
            >
              Request Beta
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
