import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b border-gray-200 bg-white px-6 py-3">
      <Link href="/" className="text-lg font-bold text-gray-900">
        NexusHub
      </Link>
      <div className="flex gap-4 text-sm text-gray-600">
        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>
      </div>
    </nav>
  );
}
