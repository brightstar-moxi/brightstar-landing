"use client";

import { forwardRef } from "react";
import { CVData } from "@/app/cv-builder/types";

interface Props {
  data: CVData;
}

const MinimalCV = forwardRef<HTMLDivElement, Props>(
  ({ data }, ref) => {
    const skills = data.skills
      ? data.skills.split(",").map((s) => s.trim())
      : [];

    return (
     <div
  id="cv-download"
  ref={ref}
  style={{
    width: "794px",
    height: "1123px", // exact A4 height
    backgroundColor: "#ffffff",
    color: "#111827",
    fontFamily: "Arial, sans-serif",
    padding: "40px",
    boxSizing: "border-box",
    overflow: "hidden",
  }}
>
        {/* HEADER */}
        <div
          style={{
            marginBottom: "40px",
            borderBottom: "1px solid #e5e7eb",
            paddingBottom: "24px",
          }}
        >
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "700",
              margin: 0,
              color: "#111827",
            }}
          >
            {data.fullName || "Your Name"}
          </h1>

          <div
            style={{
              marginTop: "12px",
              display: "flex",
              flexWrap: "wrap",
              gap: "16px",
              fontSize: "14px",
              color: "#6b7280",
            }}
          >
            <span>
              {data.email || "your@email.com"}
            </span>

            {data.location && (
              <span>{data.location}</span>
            )}
          </div>

          {data.jobTitle && (
            <p
              style={{
                marginTop: "12px",
                fontSize: "15px",
                color: "#374151",
              }}
            >
              {data.jobTitle}
            </p>
          )}
        </div>

        {/* SUMMARY */}
        {data.summary && (
          <section
            style={{
              marginBottom: "32px",
            }}
          >
            <h2
              style={{
                fontSize: "12px",
                fontWeight: "700",
                textTransform: "uppercase",
                letterSpacing: "2px",
                color: "#9ca3af",
                marginBottom: "10px",
              }}
            >
              Summary
            </h2>

            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.8,
                color: "#374151",
                margin: 0,
              }}
            >
              {data.summary}
            </p>
          </section>
        )}

        {/* EXPERIENCE */}
        <section
          style={{
            marginBottom: "32px",
          }}
        >
          <h2
            style={{
              fontSize: "12px",
              fontWeight: "700",
              textTransform: "uppercase",
              letterSpacing: "2px",
              color: "#9ca3af",
              marginBottom: "10px",
            }}
          >
            Experience
          </h2>

          <p
            style={{
              fontSize: "15px",
              lineHeight: 1.8,
              color: "#374151",
              whiteSpace: "pre-line",
              margin: 0,
            }}
          >
            {data.experience ||
              "Your experience will appear here..."}
          </p>
        </section>

        {/* SKILLS */}
        <section
          style={{
            marginBottom: "32px",
          }}
        >
          <h2
            style={{
              fontSize: "12px",
              fontWeight: "700",
              textTransform: "uppercase",
              letterSpacing: "2px",
              color: "#9ca3af",
              marginBottom: "10px",
            }}
          >
            Skills
          </h2>

          {skills.length > 0 ? (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
              }}
            >
              {skills.map((skill, i) => (
                <span
                  key={i}
                  style={{
                    padding: "8px 14px",
                    fontSize: "13px",
                    backgroundColor: "#f3f4f6",
                    color: "#111827",
                    borderRadius: "9999px",
                    border: "1px solid #d1d5db",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          ) : (
            <span
              style={{
                fontSize: "14px",
                color: "#9ca3af",
              }}
            >
              Your skills will appear here
            </span>
          )}
        </section>

        {/* EDUCATION */}
        {data.education && (
          <section>
            <h2
              style={{
                fontSize: "12px",
                fontWeight: "700",
                textTransform: "uppercase",
                letterSpacing: "2px",
                color: "#9ca3af",
                marginBottom: "10px",
              }}
            >
              Education
            </h2>

            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.7,
                color: "#374151",
                margin: 0,
              }}
            >
              {data.education}
            </p>
          </section>
        )}
      </div>
    );
  }
);

MinimalCV.displayName = "MinimalCV";

export default MinimalCV;