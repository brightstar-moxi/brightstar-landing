"use client";

import { useState, useRef } from "react";
import FormSection from "../components/FormSection";
import CVPreview from "../components/CVPreview";
import { CVData } from "./types";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";



export default function CVBuilderPage() {
  const [data, setData] = useState<CVData>({
    fullName: "",
    email: "",
    skills: "",
    experience: "",
  });

  const cvRef = useRef<HTMLDivElement>(null);
 const saveCV = useMutation(api.cv.saveCV);
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

  const handleSave = async () => {
  const email = prompt("Enter your email to save your CV:");
  if (!email) return;

  // next: send to Convex
  console.log("Saving CV for:", email);
};

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* LEFT: FORM */}
        <FormSection
          data={data}
          setData={setData}
          onDownload={handleDownload}
          onSave={handleSave}
        />

        {/* RIGHT: PREVIEW */}
        <div className="flex justify-center">
          <CVPreview ref={cvRef} data={data} />
        </div>

      </div>
    </div>
  );
}



