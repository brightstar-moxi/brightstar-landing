"use client";

import { forwardRef } from "react";
import { CVData } from "@/app/cv-builder/types";

interface Props {
  data: CVData;
}

const ModernCV = forwardRef<HTMLDivElement, Props>(
  ({ data }, ref) => {
    const skills = data.skills
      ? data.skills.split(",").map((s) => s.trim())
      : [];

    return (
      <div
  id="cv-download"
  ref={ref}
  style={{
    width: "794px", // A4 width in px
    minHeight: "1123px", // A4 height in px
    backgroundColor: "#ffffff",
    color: "#111827",
    fontFamily: "Arial, sans-serif",
    margin: "0 auto",
    padding: "40px",
    boxSizing: "border-box",
    overflow: "hidden",
  }}
>
        {/* HEADER */}
        <div
          style={{
            backgroundColor: "#4f46e5",
            padding: "32px",
            color: "#ffffff",
          }}
        >
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "700",
              margin: 0,
            }}
          >
            {data.fullName || "Your Name"}
          </h1>

          <p
            style={{
              marginTop: "8px",
              fontSize: "16px",
              opacity: 0.9,
            }}
          >
            {data.jobTitle || "Your Job Title"}
          </p>

          <div
            style={{
              marginTop: "16px",
              display: "flex",
              flexWrap: "wrap",
              gap: "16px",
              fontSize: "14px",
            }}
          >
            <span>
              {data.email || "your@email.com"}
            </span>

            {data.location && (
              <span>{data.location}</span>
            )}
          </div>
        </div>

        {/* BODY */}
        <div
          style={{
            padding: "32px",
          }}
        >
          {/* SUMMARY */}
          {data.summary && (
            <section
              style={{
                marginBottom: "32px",
              }}
            >
              <h2
                style={{
                  fontSize: "14px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  color: "#6b7280",
                  marginBottom: "12px",
                }}
              >
                Summary
              </h2>

              <p
                style={{
                  fontSize: "15px",
                  lineHeight: 1.7,
                  color: "#374151",
                  margin: 0,
                }}
              >
                {data.summary}
              </p>
            </section>
          )}

          {/* SKILLS */}
          <section
            style={{
              marginBottom: "32px",
            }}
          >
            <h2
              style={{
                fontSize: "14px",
                fontWeight: "700",
                textTransform: "uppercase",
                letterSpacing: "2px",
                color: "#6b7280",
                marginBottom: "12px",
              }}
            >
              Skills
            </h2>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
              }}
            >
              {skills.length > 0 ? (
                skills.map((skill, i) => (
                  <span
                    key={i}
                    style={{
                      padding: "8px 14px",
                      fontSize: "12px",
                      fontWeight: "600",
                      backgroundColor: "#eef2ff",
                      color: "#4338ca",
                      border: "1px solid #c7d2fe",
                      borderRadius: "9999px",
                    }}
                  >
                    {skill}
                  </span>
                ))
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
            </div>
          </section>

          {/* EXPERIENCE */}
          <section
            style={{
              marginBottom: "32px",
            }}
          >
            <h2
              style={{
                fontSize: "14px",
                fontWeight: "700",
                textTransform: "uppercase",
                letterSpacing: "2px",
                color: "#6b7280",
                marginBottom: "12px",
              }}
            >
              Experience
            </h2>

            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.7,
                color: "#374151",
                whiteSpace: "pre-line",
                margin: 0,
              }}
            >
              {data.experience ||
                "Your experience will appear here..."}
            </p>
          </section>

          {/* EDUCATION */}
          {data.education && (
            <section>
              <h2
                style={{
                  fontSize: "14px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  color: "#6b7280",
                  marginBottom: "12px",
                }}
              >
                Education
              </h2>

              <p
                style={{
                  fontSize: "15px",
                  color: "#374151",
                  margin: 0,
                }}
              >
                {data.education}
              </p>
            </section>
          )}
        </div>
      </div>
    );
  }
);

ModernCV.displayName = "ModernCV";

export default ModernCV;