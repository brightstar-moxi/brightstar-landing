"use client";

import {
  Code2,
  PenTool,
  Bot,
  Headphones,
  Sparkles,
  ArrowRight,
  Monitor,
  Palette,
  Brain,
} from "lucide-react";

const services = [
  {
    title: "Software Development",
    description:
      "Custom web applications, websites and systems built with modern technologies.",
    icon: Code2,
    color: "blue",
  },
  {
    title: "Graphic Design",
    description:
      "Creative designs that communicate your brand and attract your audience.",
    icon: PenTool,
    color: "pink",
  },
  {
    title: "AI Prompt Engineering",
    description:
      "Helping businesses leverage AI tools to automate and scale their operations.",
    icon: Bot,
    color: "purple",
  },
  {
    title: "Technical Troubleshooting",
    description:
      "Fixing issues, optimizing performance and providing reliable tech support.",
    icon: Headphones,
    color: "cyan",
  },
];

const learningResources = [
  {
    title: "Web Development",
    description: "Learn to build modern websites and applications.",
    icon: Monitor,
    color: "blue",
  },
  {
    title: "Graphic Design",
    description: "Master design principles and creative tools.",
    icon: Palette,
    color: "pink",
  },
  {
    title: "AI Prompt Engineering",
    description: "Learn how AI works and how to prompt it effectively.",
    icon: Brain,
    color: "cyan",
  },
];

const generatedNames = [
  "BrightNest",
  "NovaEdge",
  "TechVault",
  "Skyline Pro",
  "EliteWave",
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#030817] py-24 text-white"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-purple-600/10 blur-[120px]" />
        <div className="absolute right-1/4 bottom-0 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Section heading */}
        <div className="mb-10 text-center">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-purple-400">
            What I Do
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Services That Drive Real Results
          </h2>

          <div className="mx-auto mt-4 h-px w-72 bg-gradient-to-r from-transparent via-purple-500/60 to-transparent" />
        </div>

        {/* Services */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-xl border border-white/[0.07] bg-[#081226]/80 p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-[#0b1730]"
              >
                {/* Icon */}
                <div
                  className={`mb-4 flex h-10 w-10 items-center justify-center rounded-lg ${
                    service.color === "blue"
                      ? "bg-blue-500/15 text-blue-400"
                      : service.color === "pink"
                        ? "bg-pink-500/15 text-pink-400"
                        : service.color === "purple"
                          ? "bg-purple-500/15 text-purple-400"
                          : "bg-cyan-500/15 text-cyan-400"
                  }`}
                >
                  <Icon size={20} />
                </div>

                <h3 className="mb-2 text-sm font-bold">
                  {service.title}
                </h3>

                <p className="min-h-[48px] text-[11px] leading-5 text-slate-500">
                  {service.description}
                </p>

                <a
                  href="#contact"
                  className="mt-3 inline-flex items-center gap-1 text-[10px] font-medium text-blue-400 hover:text-blue-300"
                >
                  Learn More
                  <ArrowRight size={11} />
                </a>
              </div>
            );
          })}
        </div>

        {/* Bottom section */}
        <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_1fr]">

          {/* Business Name Generator */}
          <div className="relative overflow-hidden rounded-2xl border border-purple-500/40 bg-gradient-to-br from-[#101239] to-[#071329] p-5">

            {/* Glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-purple-600/20 blur-[80px]" />

            <div className="relative">

              <div className="mb-5 flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles size={14} className="text-blue-400" />

                  <h3 className="text-sm font-bold">
                    Business Name Generator
                  </h3>
                </div>

                <span className="rounded-full bg-purple-500/20 px-2 py-1 text-[8px] font-bold uppercase text-purple-300">
                  Popular
                </span>
              </div>

              <p className="mb-4 max-w-sm text-[10px] leading-4 text-slate-500">
                Enter a keyword and get unique business names instantly.
              </p>

              {/* Generator input */}
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="e.g. Fashion Store, Tech, Fitness..."
                  className="min-w-0 flex-1 rounded-lg border border-white/10 bg-black/20 px-3 py-2.5 text-[10px] text-white outline-none placeholder:text-slate-600 focus:border-purple-500/50"
                />

                <a
                  href="/name-generator"
                  className="flex shrink-0 items-center gap-1 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 text-[10px] font-semibold text-white transition hover:opacity-90"
                >
                  <Sparkles size={11} />
                  Generate Name
                </a>
              </div>

              {/* Example names */}
              <div className="mt-4 flex flex-wrap gap-2">
                {generatedNames.map((name) => (
                  <span
                    key={name}
                    className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-[9px] text-slate-300"
                  >
                    {name}
                  </span>
                ))}
              </div>

              <a
                href="/name-generator"
                className="mx-auto mt-4 flex w-fit items-center gap-2 rounded-lg border border-purple-500/30 px-5 py-2 text-[10px] font-medium text-slate-300 transition hover:bg-purple-500/10"
              >
                Learn Naming Strategy
                <ArrowRight size={11} />
              </a>

            </div>
          </div>

          {/* Learning Hub */}
          <div className="rounded-2xl border border-white/[0.08] bg-[#081226]/80 p-5 backdrop-blur-xl">

            <div className="mb-5 flex items-start justify-between">

              <div>
                <h3 className="text-sm font-bold">
                  Learning Hub
                </h3>

                <p className="mt-1 text-[10px] text-slate-500">
                  Learn in-demand skills and grow your career.
                </p>
              </div>

              <a
                href="/learn"
                className="flex items-center gap-1 text-[10px] text-blue-400 hover:text-blue-300"
              >
                View All Courses
                <ArrowRight size={11} />
              </a>

            </div>

            {/* Learning cards */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {learningResources.map((resource) => {
                const Icon = resource.icon;

                return (
                  <div
                    key={resource.title}
                    className="rounded-xl border border-white/[0.07] bg-[#0b162c] p-4 transition hover:border-blue-500/30"
                  >
                    <div
                      className={`mb-4 flex h-9 w-9 items-center justify-center rounded-lg ${
                        resource.color === "blue"
                          ? "bg-blue-500/15 text-blue-400"
                          : resource.color === "pink"
                            ? "bg-pink-500/15 text-pink-400"
                            : "bg-cyan-500/15 text-cyan-400"
                      }`}
                    >
                      <Icon size={17} />
                    </div>

                    <h4 className="text-[10px] font-bold">
                      {resource.title}
                    </h4>

                    <p className="mt-2 text-[9px] leading-4 text-slate-500">
                      {resource.description}
                    </p>

                    <a
                      href="/learn"
                      className="mt-3 inline-flex items-center gap-1 text-[9px] font-medium text-blue-400"
                    >
                      Start Learning
                      <ArrowRight size={10} />
                    </a>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}