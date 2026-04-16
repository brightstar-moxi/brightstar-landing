"use client";

import { useState, useRef } from "react";
import FormSection from "../components/FormSection";
import CVPreview from "../components/CVPreview";
import { CVData } from "./types";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function CVBuilderClient({ initialData }: { initialData?: CVData }) {
  const [data, setData] = useState<CVData>(
    initialData || {
      fullName: "",
      email: "",
      skills: "",
      experience: "",
    }
  );

  const cvRef = useRef<HTMLDivElement>(null);
  const saveCV = useMutation(api.cv.saveCV);

  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

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

  const handleSaveClick = () => setShowModal(true);

 const handleConfirmSave = async () => {
  if (!email) return;

  setLoading(true);

  try {
    const id = await saveCV({ email, data });

    const link = `${window.location.origin}/cv-builder/${id}`;

    await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, link }),
    });

    alert("Check your email for your CV link");

    setShowModal(false);
    setEmail("");
  } catch (err) {
    console.error(err);
    alert("Failed to save");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen bg-slate-100 p-6">
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

      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl w-full max-w-md">
            <h2 className="text-lg font-semibold mb-4">Save your CV</h2>

            <input
              type="email"
              className="w-full p-3 border rounded mb-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />

            <button
              onClick={handleConfirmSave}
              disabled={loading}
              className="w-full bg-indigo-600 text-white py-3 rounded"
            >
              {loading ? "Saving..." : "Save & Send Link"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}