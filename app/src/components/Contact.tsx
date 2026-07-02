"use client";

import { type FormEvent, type HTMLInputTypeAttribute, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { socialLinks } from "../data/site";
import { SectionTransition, getRevealProps } from "./SectionTransition";

export function Contact() {
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const contentType = response.headers.get("content-type") || "";
      const data = contentType.includes("application/json")
        ? await response.json()
        : null;

      if (!response.ok) {
        throw new Error(
          data?.error ||
            "The contact request failed before the server returned JSON.",
        );
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  return (
    <section
      id="contact"
      className="relative min-h-screen overflow-hidden bg-[var(--paper)] py-0 text-[#202020]"
    >
      {/* subtle paper texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:radial-gradient(#202020_0.7px,transparent_0.7px)] [background-size:18px_18px]" />

      {/* dashed top postcard separator */}
      <div className="relative z-10 border-t-2 border-dashed border-[#e56a4e]" />

      {/* striped background band */}
      <div
        className="relative z-10 px-6 py-10 md:px-10 lg:px-20"
        style={{
          background:
            "repeating-linear-gradient(90deg, #c7bea0 0px, #c7bea0 54px, #c8e3e5 54px, #c8e3e5 108px)",
        }}
      >
        {/* texture overlay on striped area */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.22] [background-image:radial-gradient(#6d644e_0.8px,transparent_0.8px)] [background-size:16px_16px]" />

        {/* postcard */}
        <SectionTransition
          direction="up"
          accent="rgba(159, 197, 200, 0.26)"
          className="relative mx-auto max-w-5xl"
        >
          <div className="rounded-[10px] border-2 border-[#8c7d5f] bg-[var(--paper)] px-6 py-8 shadow-[0_18px_35px_rgba(52,45,32,0.28)] sm:px-10 sm:py-10 lg:px-14">
            {/* inner hand-drawn border */}

            <div className="pointer-events-none absolute inset-3 rounded-[6px] border border-[#9b8b68]" />

            <div className="relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
              {/* LEFT FORM SIDE */}
              <motion.div {...getRevealProps({ x: -26, y: 22, amount: 0.25 })}>
                <h2 className="text-center font-patrick-hand text-5xl leading-none tracking-wide sm:text-6xl lg:text-left">
                  let&apos;s connect!
                </h2>

                <div className="mx-auto mt-2 h-[5px] w-32 rounded-full bg-[#9fc5c8] lg:mx-28" />

                <form onSubmit={handleSubmit} className="mt-6 space-y-3">
                  <ContactInput
                    label="Name"
                    name="name"
                    placeholder="your name"
                  />

                  <ContactInput
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                  />

                  <ContactInput
                    label="Subject"
                    name="subject"
                    placeholder="what’s this about?"
                  />

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block font-jetbrains-mono text-sm font-bold"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      placeholder="your message"
                      className="w-full resize-none rounded-[4px] border-2 border-[#8c7d5f] bg-[var(--paper)] px-4 py-3 font-jetbrains-mono text-sm outline-none transition placeholder:text-[#9b9287] focus:border-[#5f8ea8] focus:shadow-[3px_3px_0_#c8e3e5]"
                    />
                  </div>

                  <div className="flex flex-col items-center gap-3 pt-2">
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="rounded-[6px] border-2 border-[#202020] bg-[#c9be84] px-8 py-3 font-patrick-hand text-2xl shadow-[3px_3px_0_rgba(32,32,32,0.25)] transition hover:-translate-y-1 hover:shadow-[5px_5px_0_rgba(32,32,32,0.25)] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {status === "loading" ? "Sending..." : "Send Message "}
                    </button>

                    {status === "success" && (
                      <p className="font-patrick-hand text-2xl text-[#4d8a53]">
                        Message sent - thank you!
                      </p>
                    )}

                    {status === "error" && (
                      <p className="font-patrick-hand text-2xl text-[#d25b4c]">
                        {errorMessage}
                      </p>
                    )}
                  </div>
                </form>
              </motion.div>

              {/* dashed middle divider */}
              <div className="absolute bottom-0 left-54/100 top-0 hidden border-l-2 border-dashed border-[#9fc5c8] lg:block" />

              {/* RIGHT CONTACT SIDE */}
              <motion.aside
                {...getRevealProps({
                  delay: 0.08,
                  x: 26,
                  y: 22,
                  amount: 0.25,
                })}
                className="relative border-t-2 border-dashed border-[#9fc5c8] pt-10 lg:border-t-0 lg:pl-12 lg:pt-0"
              >
                {/* postmark lines */}
                <div className="absolute right-43 top-8 hidden md:block">
                  <div className="space-y-3">
                    <div className="h-[2px] w-30 rounded-full bg-[#8c7d5f]" />
                    <div className="h-[2px] w-42 rounded-full bg-[#8c7d5f]" />
                    <div className="h-[2px] w-38 rounded-full bg-[#8c7d5f]" />
                    <div className="h-[2px] w-32 rounded-full bg-[#8c7d5f]" />
                  </div>
                </div>

                {/* stamp */}
                <div className="ml-auto hidden w-fit md:block">
                  <div className="relative h-40 w-36 rotate-[5deg] overflow-visible">
                    <Image
                      src="/global_pictures/postcard.png"
                      alt="Decorative postcard stamp"
                      fill
                      sizes="128px"
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="font-jetbrains-mono text-base font-bold">
                    Other ways to reach me
                  </h3>

                  <div className="mt-2 h-[5px] w-44 rounded-full bg-[#9fc5c8]" />

                  <div className="mt-8 space-y-6">
                    <ContactLink
                      iconSrc="/global_pictures/mail.png"
                      iconAlt="Email"
                      label={socialLinks.email.label}
                      value={socialLinks.email.address}
                      href={socialLinks.email.href}
                      color="#b7d2d8"
                    />

                    <ContactLink
                      iconSrc="/global_pictures/linkedin.png"
                      iconAlt="LinkedIn"
                      label={socialLinks.linkedin.label}
                      value={socialLinks.linkedin.value}
                      href={socialLinks.linkedin.href}
                      color="#c9be84"
                    />

                    <ContactLink
                      iconSrc="/global_pictures/github.png"
                      iconAlt="GitHub"
                      label={socialLinks.github.label}
                      value={socialLinks.github.value}
                      href={socialLinks.github.href}
                      color="#b7d2d8"
                    />
                  </div>

                  <p className="mt-5 font-patrick-hand text-3xl">
                    I&apos;ll get back to you soon!
                  </p>

                  <div className="mt-1 h-[4px] w-28 rounded-full bg-[#9fc5c8]" />
                </div>
              </motion.aside>
            </div>
          </div>
        </SectionTransition>
      </div>
      {/* dashed bottom separator */}
      <div className="relative z-10 border-t-2 border-dashed border-[#e56a4e]" />

      <footer className="relative z-10 px-2 py-5 text-center md:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 pt-0 md:flex-row md:text-left">
          <div>
            <p className="font-patrick-hand text-2xl">
              Thanks for stopping by!
              <span className="ml-2 text-[#e56a4e]">♡</span>
            </p>

            <p className="font-jetbrains-mono text-xs text-[#5f5a4d]">
              © {new Date().getFullYear()} Andrea Turek · Built with Next.js,
              React, and Tailwind CSS.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <FooterLink
              href={socialLinks.email.href}
              label={socialLinks.email.label}
              iconSrc="/global_pictures/mail.png"
              iconAlt="Email"
            />

            <FooterLink
              href={socialLinks.linkedin.href}
              label={socialLinks.linkedin.label}
              iconSrc="/global_pictures/linkedin.png"
              iconAlt="LinkedIn"
            />

            <FooterLink
              href={socialLinks.github.href}
              label={socialLinks.github.label}
              iconSrc="/global_pictures/github.png"
              iconAlt="GitHub"
            />
          </div>
        </div>
      </footer>
      {/* dashed bottom separator */}
    </section>
  );
}

type ContactInputProps = {
  label: string;
  name: string;
  placeholder: string;
  type?: HTMLInputTypeAttribute;
};

type FooterLinkProps = {
  href: string;
  label: string;
  iconSrc: string;
  iconAlt: string;
};

type ContactLinkProps = {
  iconSrc: string;
  iconAlt: string;
  label: string;
  value: string;
  href: string;
  color: string;
};

function ContactInput({
  label,
  name,
  placeholder,
  type = "text",
}: ContactInputProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block font-jetbrains-mono text-sm font-bold"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-[4px] border-2 border-[#8c7d5f] bg-[var(--paper)] px-3 py-2 font-jetbrains-mono text-sm outline-none transition placeholder:text-[#9b9287] focus:border-[#5f8ea8] focus:shadow-[3px_3px_0_#c8e3e5]"
      />
    </div>
  );
}

function FooterLink({ href, label, iconSrc, iconAlt }: FooterLinkProps) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-full border border-[#8c7d5f] bg-[var(--paper)] font-jetbrains-mono text-xs font-black text-[#18324f] shadow-[2px_2px_0_rgba(32,32,32,0.18)] transition hover:-translate-y-1 hover:rotate-[-4deg] hover:bg-[#d7e8df]"
    >
      <Image src={iconSrc} alt={iconAlt} width={300} height={300} />
    </a>
  );
}

function ContactLink({
  iconSrc,
  iconAlt,
  label,
  value,
  href,
  color,
}: ContactLinkProps) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="group flex items-center gap-5 border-b border-[#8c7d5f]/35 pb-4"
    >
      <span
        className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#8c7d5f] font-jetbrains-mono text-sm font-black transition group-hover:-rotate-6"
        style={{ backgroundColor: color }}
      >
        <Image src={iconSrc} alt={iconAlt} width={300} height={300} />
      </span>

      <span>
        <span className="block font-jetbrains-mono text-sm font-bold">
          {label}
        </span>
        <span className="block break-all font-jetbrains-mono text-sm text-[#4e4637]">
          {value}
        </span>
      </span>
    </a>
  );
}
