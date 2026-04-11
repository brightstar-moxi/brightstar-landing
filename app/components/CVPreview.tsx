"use client";

import { CVData } from "../cv-builder/types";
import { forwardRef } from "react";

const CVPreview = forwardRef<HTMLDivElement, { data: CVData }>(
  ({ data }, ref) => {
    const skills = data.skills.split(",").map((s) => s.trim());

    return (
      <div
        ref={ref}
        style={{
          backgroundColor: "#ffffff",
          color: "#000000",
        }}
        className="p-8 rounded-xl shadow w-full max-w-[600px]"
      >
        <h1 className="text-2xl font-bold">
          {data.fullName || "Your Name"}
        </h1>

        <p style={{ color: "#6b7280" }}>
          {data.email || "your@email.com"}
        </p>

        <div className="mb-6">
          <h2 className="font-semibold border-b pb-1 mb-2">Skills</h2>
          <ul className="list-disc ml-5">
            {skills.map((skill, i) => (
              <li key={i}>{skill || "Skill"}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-semibold border-b pb-1 mb-2">Experience</h2>
          <p className="text-sm whitespace-pre-line">
            {data.experience || "Your experience will appear here..."}
          </p>
        </div>
      </div>
    );
  }
);

export default CVPreview;