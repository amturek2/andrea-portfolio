import { caveat, jetBrainsMono } from "../lib/fonts";
import { resumePath } from "../data/site";

export function Navbar() {
  return (
    <header className="paper-texture fixed left-0 right-0 top-0 z-50 border-b-2 border-[#202020] bg-[var(--paper)] backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 lg:px-20">
        <a
          href="#"
          className={`${caveat.className} text-3xl font-bold tracking-wide`}
        >
          Andrea Turek
          <span className="ml-1 text-[#2259bd]">✶</span>
        </a>

        <div
          className={`${jetBrainsMono.className} hidden items-center gap-10 text-sm font-bold uppercase md:flex`}
        >
          <a href="#about" className="transition hover:text-[#ff75a7]">
            About
          </a>
          <a href="#experience" className="transition hover:text-[#ff75a7]">
            Experience
          </a>
          <a href="#projects" className="transition hover:text-[#ff75a7]">
            Projects
          </a>
          <a href="#skills" className="transition hover:text-[#ff75a7]">
            Skills
          </a>
          <a href="#contact" className="transition hover:text-[#ff75a7]">
            Contact
          </a>
        </div>

        <a
          href={resumePath}
          className={`${jetBrainsMono.className} rounded-lg border-[1.5px] border-[#202020] bg-[#cddaf6] px-5 py-2 text-sm font-bold uppercase 
             shadow-[3px_3px_0_#202020] transition 
             hover:-translate-y-0.5 hover:shadow-[5px_5px_0_#202020]`}
        >
          RESUME →
        </a>
      </nav>
    </header>
  );
}
