"use client";

import { useState } from "react";
import FormSection from "../components/FormSection";
import CVPreview from "../components/CVPreview";
import { CVData } from "./types";

export default function CVBuilderPage() {
  const [data, setData] = useState<CVData>({
    fullName: "",
    email: "",
    skills: "",
    experience: "",
  });

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* LEFT: FORM */}
        <FormSection data={data} setData={setData} />

        {/* RIGHT: PREVIEW */}
        <CVPreview data={data} />

      </div>
    </div>
  );
}