import { CVData } from "../cv-builder/types";

interface Props {
  data: CVData;
  setData: (data: CVData) => void;
  onDownload: () => void;
  onSave: () => void;
}

export default function FormSection({
  data,
  setData,
  onDownload,
  onSave,
}: Props) {
  const updateField = (field: keyof CVData, value: string) => {
    setData({ ...data, [field]: value });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-black text-xl font-semibold mb-4">
        Fill Your Details
      </h2>

      {/* FULL NAME */}
      <input
        className="w-full mb-4 p-3 border rounded border-black text-gray-700"
        placeholder="Full Name"
        value={data.fullName}
        onChange={(e) => updateField("fullName", e.target.value)}
      />

      {/* EMAIL */}
      <input
        type="email"
        className="w-full mb-4 p-3 border rounded border-black text-gray-700"
        placeholder="Email"
        value={data.email}
        onChange={(e) => updateField("email", e.target.value)}
      />

      {/* JOB TITLE */}
      <input
        className="w-full mb-4 p-3 border rounded border-black text-gray-700"
        placeholder="Job Title"
        value={data.jobTitle || ""}
        onChange={(e) => updateField("jobTitle", e.target.value)}
      />

      {/* LOCATION */}
      <input
        className="w-full mb-4 p-3 border rounded border-black text-gray-700"
        placeholder="Location"
        value={data.location || ""}
        onChange={(e) => updateField("location", e.target.value)}
      />

      {/* SUMMARY */}
      <textarea
        className="w-full mb-4 p-3 border rounded border-black text-gray-700"
        placeholder="Professional Summary"
        value={data.summary || ""}
        onChange={(e) => updateField("summary", e.target.value)}
      />

      {/* SKILLS */}
      <textarea
        className="w-full mb-4 p-3 border rounded border-black text-gray-700"
        placeholder="Skills (comma separated)"
        value={data.skills}
        onChange={(e) => updateField("skills", e.target.value)}
      />

      {/* EXPERIENCE */}
      <textarea
        className="w-full mb-4 p-3 border rounded border-black text-gray-700"
        placeholder="Experience"
        value={data.experience}
        onChange={(e) => updateField("experience", e.target.value)}
      />

      {/* EDUCATION */}
      <textarea
        className="w-full mb-4 p-3 border rounded border-black text-gray-700"
        placeholder="Education"
        value={data.education || ""}
        onChange={(e) => updateField("education", e.target.value)}
      />

      {/* ACTIONS */}
      <button
        onClick={onDownload}
        className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition"
      >
        Download CV
      </button>

      <button
        onClick={onSave}
        className="w-full mt-3 bg-black text-white py-3 rounded-xl"
      >
        Save CV
      </button>
    </div>
  );
}