"use client";

import { forwardRef } from "react";
import { CVData } from "../cv-builder/types";

const ProfessionalCV = forwardRef<HTMLDivElement, { data: CVData }>(
  ({ data }, ref) => {
    const skills = data.skills
      ? data.skills.split(",").map((s) => s.trim())
      : [];

    return (
      <div
        ref={ref}
        className="w-full max-w-[900px] bg-white shadow-xl rounded-xl overflow-hidden flex"
        style={{ color: "#111827" }}
      >
        {/* SIDEBAR */}
        <aside className="w-1/3 bg-gray-100 p-8 space-y-8">
          {/* NAME */}
          <div>
            <h1 className="text-xl font-bold">
              {data.fullName || "Your Name"}
            </h1>
            <p className="text-sm text-gray-600 mt-1">
              {data.email || "your@email.com"}
            </p>
          </div>

          {/* SKILLS */}
          <div>
            <h2 className="text-xs uppercase tracking-widest text-gray-500 mb-3">
              Skills
            </h2>

            <ul className="space-y-2">
              {skills.length > 0 ? (
                skills.map((skill, i) => (
                  <li key={i} className="text-sm text-gray-700">
                    • {skill}
                  </li>
                ))
              ) : (
                <li className="text-sm text-gray-400">
                  Your skills will appear here
                </li>
              )}
            </ul>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="w-2/3 p-10">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-4">
            Experience
          </h2>

          <p className="text-sm leading-relaxed text-gray-700 whitespace-pre-line">
            {data.experience || "Your experience will appear here..."}
          </p>
        </main>
      </div>
    );
  }
);

export default ProfessionalCV;