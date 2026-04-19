"use client";

import { useState, useRef } from "react";
import FormSection from "../components/FormSection";
import CVPreview from "../components/CVPreview";
import { CVData } from "./types";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";

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

  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const [generatedLink, setGeneratedLink] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  // 📄 DOWNLOAD
  const handleDownload = async () => {
    if (!cvRef.current) return;

    const canvas = await html2canvas(cvRef.current, {
      scale: 2,
      backgroundColor: "#ffffff",
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const imgWidth = 210;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    pdf.save("cv.pdf");
  };

  // OPEN MODAL
  const handleSaveClick = () => setShowModal(true);

  // SAVE
  const handleConfirmSave = async () => {
    if (!email) return;

    setLoading(true);

    try {
      const id = await saveCV({ email, data });

      const link = `${window.location.origin}/cv-builder/${id}`;

      // ✅ SHOW SUCCESS UI
      setGeneratedLink(link);
      setShowSuccess(true);

      // OPTIONAL EMAIL (won’t break UI if it fails)
      try {
        await fetch("/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, link }),
        });
      } catch {
        console.warn("Email failed");
      }

      setShowModal(false);
      setEmail("");
    } catch (error) {
      console.error(error);
      alert("Failed to save");
    } finally {
      setLoading(false);
    }
   
  };

  return (
    <div className="min-h-screen bg-slate-100 p-6">

      {/* ✅ SUCCESS UI */}
      {showSuccess && (
        <div className="max-w-7xl mx-auto mb-4 p-4 bg-green-100 rounded">
          <p className="text-sm mb-2">Your CV link:</p>

          <input
            value={generatedLink}
            readOnly
            className="w-full p-2 border rounded"
          />

          <button
           onClick={() => {
  navigator.clipboard.writeText(generatedLink);
  setCopied(true);

  setTimeout(() => {
    setCopied(false);
  }, 2000); // reset after 2s
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
          <CVPreview ref={cvRef} data={data} />
        </div>

      </div>

      {/* ✅ MODAL */}
      {showModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">

    <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 relative">

      {/* CLOSE BUTTON */}
      <button
        onClick={() => setShowModal(false)}
        className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl"
      >
        ×
      </button>

      {/* HEADER */}
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Save your CV
      </h2>

      <p className="text-sm text-gray-500 mb-5">
        Enter your email to receive a link and continue editing anytime.
      </p>

      {/* INPUT */}
      <input
        type="email"
        name="email"
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 mb-4"
      />

      {/* ACTION BUTTON */}
      <button
        onClick={handleConfirmSave}
        disabled={loading}
        className={`w-full py-3 rounded-lg font-medium text-white transition ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-indigo-600 hover:bg-indigo-700"
        }`}
      >
        {loading ? "Saving..." : "Save & Get Link"}
      </button>

    </div>
  </div>
)}
    </div>
  );
}