"use client";

import { useState, useRef } from "react";
import FormSection from "../components/FormSection";
import CVPreview from "../components/CVPreview";
import { CVData } from "./types";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";

import { TEMPLATES } from "../constants/templates";

export default function CVBuilderClient({
  initialData,
}: {
  initialData?: CVData;
}) {
  const [data, setData] = useState<CVData>(
    initialData || {
      fullName: "",
      email: "",
      skills: "",
      experience: "",
    }
  );

  const [copied, setCopied] = useState(false);

  const cvRef = useRef<HTMLDivElement>(null);

  const saveCV = useMutation(api.cv.saveCV);

  const [previewTemplate, setPreviewTemplate] =
    useState<string | null>(null);

  const [step, setStep] =
    useState<"template" | "builder">("template");

  const [selectedTemplate, setSelectedTemplate] =
    useState("modern");

  const [showModal, setShowModal] = useState(false);

  const [email, setEmail] = useState("");

  const [loading, setLoading] = useState(false);

  const [generatedLink, setGeneratedLink] = useState("");

  const [showSuccess, setShowSuccess] = useState(false);

  // =========================
  // DOWNLOAD PDF
  // =========================
  // const handleDownload = async () => {
  //   if (!cvRef.current) return;

  //   try {
  //     const canvas = await html2canvas(cvRef.current, {
  //       scale: 2,
  //       useCORS: true,
  //       backgroundColor: "#ffffff",
  //     });

  //     const imgData = canvas.toDataURL("image/png");

  //     const pdf = new jsPDF("p", "mm", "a4");

  //     const pdfWidth = pdf.internal.pageSize.getWidth();

  //     const pdfHeight =
  //       (canvas.height * pdfWidth) / canvas.width;

  //     pdf.addImage(
  //       imgData,
  //       "PNG",
  //       0,
  //       0,
  //       pdfWidth,
  //       pdfHeight
  //     );

  //     pdf.save("cv.pdf");
  //   } catch (error) {
  //     console.error("PDF download failed:", error);
  //     alert("Failed to download CV");
  //   }
  // };

  const handleDownload = async () => {
  try {
    if (!cvRef.current) return;

    const canvas = await html2canvas(cvRef.current, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff",
    });

    const imgData = canvas.toDataURL("image/jpeg", 1.0);

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    pdf.addImage(
      imgData,
      "JPEG",
      0,
      0,
      210,
      297
    );

    pdf.save("cv.pdf");
  } catch (error) {
    console.error(error);
    alert("Failed to download PDF");
  }
};

  // =========================
  // OPEN SAVE MODAL
  // =========================
  const handleSaveClick = () => {
    setShowModal(true);
  };

  // =========================
  // SAVE CV
  // =========================
  const handleConfirmSave = async () => {
    if (!email) return;

    setLoading(true);

    try {
      const id = await saveCV({
        email,
        data,
      });

      const link =
        `${window.location.origin}/cv-builder/${id}`;

      setGeneratedLink(link);

      setShowSuccess(true);

      try {
        await fetch("/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            link,
          }),
        });
      } catch (error) {
        console.error("Email failed:", error);
      }

      setShowModal(false);

      setEmail("");
    } catch (error) {
      console.error(error);

      alert("Failed to save CV");
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // TEMPLATE SCREEN
  // =========================
  if (step === "template") {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
        <div className="max-w-5xl w-full">
          <h1 className="text-3xl text-black font-bold text-center mb-3">
            Choose Your CV Template
          </h1>

          <p className="text-center text-gray-500 mb-8">
            Select a design before filling your details.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-12">
  {TEMPLATES.map((group) => (
    <div key={group.category}>
      <h2 className="text-2xl font-bold mb-6 capitalize">
        {group.category} Templates
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {group.designs.map((tpl) => (
          <div
            key={tpl.id}
            onClick={() => {
              setSelectedTemplate(tpl.id);
              setStep("builder");
            }}
            className="bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition"
          >
            <img
              src={tpl.preview}
              alt={tpl.name}
              className="w-full h-[420px] object-cover"
            />

            <div className="p-4">
              <h3 className="font-semibold text-lg">
                {tpl.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  ))}
</div>

          </div>
        </div>
 {/* {TEMPLATES.map((group) => (
  <div key={group.category} className="mb-10">

    <h2 className="text-2xl font-bold mb-4 capitalize">
      {group.category}
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      {group.designs.map((tpl) => (
        <div
          key={tpl.id}
          onClick={() => {
            setSelectedTemplate(tpl.id);
            setStep("builder");
          }}
          className="bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition"
        >

          <img
            src={tpl.preview}
            alt={tpl.name}
            className="w-full h-[320px] object-cover"
          />

          <div className="p-4">
            <h3 className="font-semibold">
              {tpl.name}
            </h3>
          </div>

        </div>
      ))}

    </div>
  </div>
))} */}
        {/* TEMPLATE PREVIEW */}
        {previewTemplate && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
            <div className="bg-white w-full max-w-4xl rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4">
                Preview Template
              </h2>

              <div className="border rounded-lg p-4 max-h-[500px] overflow-auto mb-6">
                <CVPreview
                  data={data}
                  template={previewTemplate}
                />
              </div>
{/* 
<div className="overflow-auto w-full flex justify-center">
  <div
    style={{
      transform:
        typeof window !== "undefined" && window.innerWidth < 768
          ? "scale(0.45)"
          : "scale(1)",
      transformOrigin: "top center",
      width: "794px",
      margin: "0 auto",
    }}
  >
    <CVPreview
      ref={cvRef}
      data={data}
      template={selectedTemplate}
    />
  </div>
</div> */}

              <div className="flex justify-end gap-3">
                <button
                  onClick={() =>
                    setPreviewTemplate(null)
                  }
                  className="px-4 py-2 border rounded"
                >
                  Cancel
                </button>

                <button
                  onClick={() => {
                    setSelectedTemplate(
                      previewTemplate
                    );

                    setPreviewTemplate(null);

                    setStep("builder");
                  }}
                  className="px-4 py-2 bg-indigo-600 text-white rounded"
                >
                  Use This Template
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // =========================
  // BUILDER SCREEN
  // =========================
  return (
    <div className="min-h-screen bg-slate-100 p-6">

      {/* SUCCESS */}
      {showSuccess && (
        <div className="max-w-7xl mx-auto mb-4 p-4 bg-green-100 rounded">
          <p className="text-sm mb-2">
            Your CV link:
          </p>

          <input
            value={generatedLink}
            readOnly
            className="w-full p-2 border rounded"
          />

          <button
            onClick={() => {
              navigator.clipboard.writeText(
                generatedLink
              );

              setCopied(true);

              setTimeout(() => {
                setCopied(false);
              }, 2000);
            }}
            className="mt-2 bg-black text-white px-4 py-2 rounded"
          >
            {copied ? "Copied!" : "Copy Link"}
          </button>
        </div>
      )}

      {/* MAIN */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        <FormSection
          data={data}
          setData={setData}
          onDownload={handleDownload}
          onSave={handleSaveClick}
        />

        <div className="flex justify-center">
          <CVPreview
            ref={cvRef}
            data={data}
            template={selectedTemplate}
          />
        </div>
      </div>

      {/* SAVE MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 relative">

            <button
              onClick={() =>
                setShowModal(false)
              }
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl"
            >
              ×
            </button>

            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Save your CV
            </h2>

            <p className="text-sm text-gray-500 mb-5">
              Enter your email to receive a link.
            </p>

            <input
              type="email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              placeholder="you@example.com"
              className="w-full px-4 py-3 border rounded-lg mb-4"
            />

            <button
              onClick={handleConfirmSave}
              disabled={loading}
              className="w-full py-3 bg-indigo-600 text-white rounded-lg"
            >
              {loading
                ? "Saving..."
                : "Save & Get Link"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}