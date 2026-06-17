export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4ead8] text-[#262321]">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-start justify-center px-6 py-20">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#6f685f]">
          Andrea Turek
        </p>

        <h1 className="max-w-4xl text-5xl font-semibold tracking-tight sm:text-7xl">
          Software engineer drawn to the visual side of mathematics.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6f685f]">
          I build technical, creative software at the intersection of systems,
          data, optimization, and machine learning.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-[#262321] px-6 py-3 text-sm font-medium text-[#f4ead8] transition hover:opacity-85"
          >
            View Projects
          </a>

          <a
            href="mailto:turekam06@gmail.com"
            className="rounded-full border border-[#262321]/20 px-6 py-3 text-sm font-medium transition hover:bg-[#262321]/5"
          >
            Contact Me
          </a>
        </div>
      </section>
    </main>
  );
}
