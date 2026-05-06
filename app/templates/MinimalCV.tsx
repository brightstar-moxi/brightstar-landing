"use client";

import { forwardRef } from "react";
import { CVData } from "@/app/cv-builder/types";

interface Props {
  data: CVData;
}

const MinimalCV = forwardRef<HTMLDivElement, Props>(({ data }, ref) => {
  const skills = data.skills
    ? data.skills.split(",").map((s) => s.trim())
    : [];

  return (
    <div
      ref={ref}
      className="w-full max-w-[800px] bg-white shadow-xl rounded-xl p-10"
      style={{ fontFamily: "Inter, sans-serif", color: "#111827" }}
    >
      {/* HEADER */}
      <div className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight">
          {data.fullName || "Your Name"}
        </h1>

        <div className="mt-2 text-sm text-gray-500 flex flex-wrap gap-4">
          <span>{data.email || "your@email.com"}</span>
          {data.location && <span>{data.location}</span>}
        </div>

        {data.jobTitle && (
          <p className="mt-2 text-sm text-gray-600">
            {data.jobTitle}
          </p>
        )}
      </div>

      {/* SUMMARY */}
      {data.summary && (
        <section className="mb-8">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
            Summary
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            {data.summary}
          </p>
        </section>
      )}

      {/* EXPERIENCE */}
      <section className="mb-8">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
          Experience
        </h2>

        <p className="text-sm text-gray-700 whitespace-pre-line leading-relaxed">
          {data.experience || "Your experience will appear here..."}
        </p>
      </section>

      {/* SKILLS */}
      <section className="mb-8">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
          Skills
        </h2>

        {skills.length > 0 ? (
          <div className="flex flex-wrap gap-6 text-sm text-gray-700">
            {skills.map((skill, i) => (
              <span key={i}>{skill}</span>
            ))}
          </div>
        ) : (
          <span className="text-sm text-gray-400">
            Your skills will appear here
          </span>
        )}
      </section>

      {/* EDUCATION */}
      {data.education && (
        <section>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
            Education
          </h2>

          <p className="text-sm text-gray-700">
            {data.education}
          </p>
        </section>
      )}
    </div>
  );
});

MinimalCV.displayName = "MinimalCV";

export default MinimalCV;