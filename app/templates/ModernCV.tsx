"use client";

import { forwardRef } from "react";
import { CVData } from "../cv-builder/types";

const ModernCV = forwardRef<HTMLDivElement, { data: CVData }>(
  ({ data }, ref) => {
    const skills = data.skills
      ? data.skills.split(",").map((s) => s.trim())
      : [];

    return (
      <div
        ref={ref}
        className="w-full max-w-[800px] bg-white shadow-2xl rounded-2xl overflow-hidden"
      >
        {/* HEADER */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-10">
          <h1 className="text-4xl font-bold tracking-tight">
            {data.fullName || "Your Name"}
          </h1>
          <p className="mt-2 text-indigo-100 text-sm">
            {data.email || "your@email.com"}
          </p>
        </div>

        {/* BODY */}
        <div className="p-10 space-y-10">

          {/* SKILLS */}
          <section>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-4">
              Skills
            </h2>

            <div className="flex flex-wrap gap-3">
              {skills.length > 0 ? (
                skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-1.5 text-sm bg-indigo-50 text-indigo-700 rounded-full border border-indigo-100"
                  >
                    {skill}
                  </span>
                ))
              ) : (
                <span className="text-gray-400 text-sm">
                  Your skills will appear here
                </span>
              )}
            </div>
          </section>

          {/* EXPERIENCE */}
          <section>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-4">
              Experience
            </h2>

            <p className="text-sm leading-relaxed text-gray-700 whitespace-pre-line">
              {data.experience || "Your experience will appear here..."}
            </p>
          </section>

        </div>
      </div>
    );
  }
);

export default ModernCV;