export default function NavbarSkeleton() {
  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6 animate-pulse">
        {/* Left: hamburger (mobile) + logo */}
        <div className="flex items-center gap-4">
          <div className="h-6 w-6 rounded bg-gray-700/60 md:hidden" />
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-gray-700/60" />
            <div className="h-4 w-20 rounded bg-gray-700/60" />
          </div>
        </div>

        {/* Center: nav links (desktop only) */}
        <ul className="hidden items-center gap-4 md:flex">
          <li className="h-4 w-14 rounded bg-gray-700/60" />
          <li className="h-4 w-16 rounded bg-gray-700/60" />
          <li className="h-4 w-12 rounded bg-gray-700/60" />
          <li className="h-4 w-16 rounded bg-gray-700/60" />
        </ul>

        {/* Right: auth buttons (desktop only) */}
        <div className="hidden items-center gap-3 md:flex">
          <div className="h-8 w-16 rounded-full bg-gray-700/60" />
          <div className="h-8 w-20 rounded-full bg-gray-700/60" />
        </div>
      </header>
    </nav>
  );
}