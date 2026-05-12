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
        id="cv-download"
        ref={ref}
        style={{
          width: "100%",
          maxWidth: "900px",
          backgroundColor: "#ffffff",
          color: "#111827",
          fontFamily: "Arial, sans-serif",
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
        }}
      >
        {/* SIDEBAR */}
        <div
          style={{
            backgroundColor: "#111827",
            color: "#ffffff",
            padding: "32px 24px",
            minHeight: "100%",
          }}
        >
          {/* NAME */}
          <div
            style={{
              marginBottom: "40px",
            }}
          >
            <h1
              style={{
                fontSize: "28px",
                fontWeight: "700",
                margin: 0,
              }}
            >
              {data.fullName || "Your Name"}
            </h1>

            {data.jobTitle && (
              <p
                style={{
                  marginTop: "8px",
                  fontSize: "15px",
                  color: "#d1d5db",
                }}
              >
                {data.jobTitle}
              </p>
            )}
          </div>

          {/* CONTACT */}
          <div
            style={{
              marginBottom: "36px",
            }}
          >
            <h2
              style={{
                fontSize: "12px",
                fontWeight: "700",
                textTransform: "uppercase",
                letterSpacing: "2px",
                color: "#9ca3af",
                marginBottom: "12px",
              }}
            >
              Contact
            </h2>

            <div
              style={{
                fontSize: "14px",
                lineHeight: 1.8,
                color: "#f3f4f6",
              }}
            >
              <p
                style={{
                  margin: 0,
                }}
              >
                {data.email || "your@email.com"}
              </p>

              {data.location && (
                <p
                  style={{
                    marginTop: "6px",
                  }}
                >
                  {data.location}
                </p>
              )}
            </div>
          </div>

          {/* SKILLS */}
          <div
            style={{
              marginBottom: "36px",
            }}
          >
            <h2
              style={{
                fontSize: "12px",
                fontWeight: "700",
                textTransform: "uppercase",
                letterSpacing: "2px",
                color: "#9ca3af",
                marginBottom: "12px",
              }}
            >
              Skills
            </h2>

            {skills.length > 0 ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {skills.map((skill, i) => (
                  <div
                    key={i}
                    style={{
                      backgroundColor: "#1f2937",
                      padding: "8px 12px",
                      borderRadius: "8px",
                      fontSize: "13px",
                      color: "#f9fafb",
                      border: "1px solid #374151",
                    }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            ) : (
              <span
                style={{
                  fontSize: "13px",
                  color: "#6b7280",
                }}
              >
                Your skills will appear here
              </span>
            )}
          </div>

          {/* EDUCATION */}
          {data.education && (
            <div>
              <h2
                style={{
                  fontSize: "12px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  color: "#9ca3af",
                  marginBottom: "12px",
                }}
              >
                Education
              </h2>

              <p
                style={{
                  fontSize: "14px",
                  lineHeight: 1.7,
                  color: "#e5e7eb",
                  margin: 0,
                }}
              >
                {data.education}
              </p>
            </div>
          )}
        </div>

        {/* MAIN CONTENT */}
        <div
          style={{
            padding: "40px",
          }}
        >
          {/* PROFILE */}
          {data.summary && (
            <section
              style={{
                marginBottom: "40px",
              }}
            >
              <h2
                style={{
                  fontSize: "14px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  color: "#6b7280",
                  marginBottom: "14px",
                }}
              >
                Profile
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
          <section>
            <h2
              style={{
                fontSize: "14px",
                fontWeight: "700",
                textTransform: "uppercase",
                letterSpacing: "2px",
                color: "#6b7280",
                marginBottom: "14px",
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
        </div>
      </div>
    );
  }
);

ProfessionalCV.displayName = "ProfessionalCV";

export default ProfessionalCV;