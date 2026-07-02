export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#242424] px-5 py-6 text-xs text-white/65 lg:px-10">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>(c) {new Date().getFullYear()} Contel Africa. All rights reserved.</div>
        <div className="flex gap-5">
          <a href="#" className="transition-colors hover:text-white">
            Privacy
          </a>
          <a href="#" className="transition-colors hover:text-white">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
