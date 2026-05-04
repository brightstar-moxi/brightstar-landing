"use client";

import { forwardRef } from "react";
import { CVData } from "../cv-builder/types";

const MinimalCV = forwardRef<HTMLDivElement, { data: CVData }>(
  ({ data }, ref) => {
    const skills = data.skills
      ? data.skills.split(",").map((s) => s.trim())
      : [];

    return (
      <div
        ref={ref}
        className="w-full max-w-[800px] bg-white px-12 py-10"
        style={{ color: "#111827" }}
      >
        {/* HEADER */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold">
            {data.fullName || "Your Name"}
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            {data.email || "your@email.com"}
          </p>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-200 mb-8" />

        {/* SKILLS */}
        <section className="mb-8">
          <h2 className="text-xs uppercase tracking-widest text-gray-400 mb-3">
            Skills
          </h2>

          {skills.length > 0 ? (
            <p className="text-sm text-gray-800">
              {skills.join(" • ")}
            </p>
          ) : (
            <p className="text-sm text-gray-400">
              Your skills will appear here
            </p>
          )}
        </section>

        {/* DIVIDER */}
        <div className="border-t border-gray-200 mb-8" />

        {/* EXPERIENCE */}
        <section>
          <h2 className="text-xs uppercase tracking-widest text-gray-400 mb-3">
            Experience
          </h2>

          <p className="text-sm text-gray-800 leading-relaxed whitespace-pre-line">
            {data.experience || "Your experience will appear here..."}
          </p>
        </section>
      </div>
    );
  }
);

export default MinimalCV;