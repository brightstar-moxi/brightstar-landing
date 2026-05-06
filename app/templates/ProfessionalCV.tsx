"use client";

import { forwardRef } from "react";
import { CVData } from "@/app/cv-builder/types";

interface Props {
  data: CVData;
}

const ProfessionalCV = forwardRef<HTMLDivElement, Props>(
  ({ data }, ref) => {
    const skills = data.skills
      ? data.skills.split(",").map((s) => s.trim())
      : [];

    return (
      <div
        ref={ref}
        className="w-full max-w-[900px] bg-white shadow-2xl rounded-xl overflow-hidden grid grid-cols-3"
        style={{ fontFamily: "Inter, sans-serif", color: "#111827" }}
      >
        {/* SIDEBAR */}
        <div className="col-span-1 bg-gray-900 text-white p-6 space-y-8">
          <div>
            <h1 className="text-xl font-bold">
              {data.fullName || "Your Name"}
            </h1>

            {data.jobTitle && (
              <p className="text-sm text-gray-300 mt-1">
                {data.jobTitle}
              </p>
            )}
          </div>

          {/* CONTACT */}
          <div>
            <h2 className="text-xs uppercase tracking-widest text-gray-400 mb-2">
              Contact
            </h2>

            <div className="text-sm space-y-1">
              <p>{data.email || "your@email.com"}</p>
              {data.location && <p>{data.location}</p>}
            </div>
          </div>

          {/* SKILLS */}
          <div>
            <h2 className="text-xs uppercase tracking-widest text-gray-400 mb-2">
              Skills
            </h2>

            <div className="flex flex-col gap-2">
              {skills.length > 0 ? (
                skills.map((skill, i) => (
                  <div
                    key={i}
                    className="text-xs bg-gray-800 px-2 py-1 rounded"
                  >
                    {skill}
                  </div>
                ))
              ) : (
                <span className="text-xs text-gray-500">
                  Your skills will appear here
                </span>
              )}
            </div>
          </div>

          {/* EDUCATION */}
          {data.education && (
            <div>
              <h2 className="text-xs uppercase tracking-widest text-gray-400 mb-2">
                Education
              </h2>

              <p className="text-sm text-gray-300">
                {data.education}
              </p>
            </div>
          )}
        </div>

        {/* MAIN CONTENT */}
        <div className="col-span-2 p-8 space-y-8">

          {/* SUMMARY */}
          {data.summary && (
            <section>
              <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-2">
                Profile
              </h2>

              <p className="text-sm text-gray-700 leading-relaxed">
                {data.summary}
              </p>
            </section>
          )}

          {/* EXPERIENCE */}
          <section>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-3">
              Experience
            </h2>

            <p className="text-sm text-gray-700 whitespace-pre-line leading-relaxed">
              {data.experience ||
                "Your experience will appear here..."}
            </p>
          </section>

        </div>
      </div>
    );
  }
);

ProfessionalCV.displayName = "ProfessionalCV";

export default ProfessionalCV;