"use client";

import { forwardRef } from "react";
import { CVData } from "@/app/cv-builder/types";

interface Props {
  data: CVData;
}

const ModernCV = forwardRef<HTMLDivElement, Props>(({ data }, ref) => {
  const skills = data.skills
    ? data.skills.split(",").map((s) => s.trim())
    : [];

  return (
    <div
      ref={ref}
      className="w-full max-w-[800px] bg-white shadow-2xl rounded-xl overflow-hidden"
      style={{ fontFamily: "Inter, sans-serif", color: "#111827" }}
    >
      {/* HEADER */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8">
        <h1 className="text-3xl font-bold tracking-tight">
          {data.fullName || "Your Name"}
        </h1>

        <p className="text-sm opacity-90 mt-1">
          {data.jobTitle || "Your Job Title"}
        </p>

        <div className="mt-3 text-sm flex flex-wrap gap-4 opacity-90">
          <span>{data.email || "your@email.com"}</span>
          {data.location && <span>{data.location}</span>}
        </div>
      </div>

      {/* BODY */}
      <div className="p-8 space-y-8">

        {/* SUMMARY */}
        {data.summary && (
          <section>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-2">
              Summary
            </h2>
            <p className="text-sm leading-relaxed text-gray-700">
              {data.summary}
            </p>
          </section>
        )}

        {/* SKILLS */}
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-3">
            Skills
          </h2>

          <div className="flex flex-wrap gap-2">
            {skills.length > 0 ? (
              skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs font-medium bg-indigo-50 text-indigo-700 rounded-full border border-indigo-100"
                >
                  {skill}
                </span>
              ))
            ) : (
              <span className="text-sm text-gray-400">
                Your skills will appear here
              </span>
            )}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-3">
            Experience
          </h2>

          <p className="text-sm leading-relaxed whitespace-pre-line text-gray-700">
            {data.experience ||
              "Your experience will appear here..."}
          </p>
        </section>

        {/* EDUCATION */}
        {data.education && (
          <section>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-3">
              Education
            </h2>

            <p className="text-sm text-gray-700">
              {data.education}
            </p>
          </section>
        )}

      </div>
    </div>
  );
});

ModernCV.displayName = "ModernCV";

export default ModernCV;