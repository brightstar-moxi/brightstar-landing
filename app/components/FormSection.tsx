import { CVData } from "../cv-builder/types";

interface Props {
  data: CVData;
  setData: (data: CVData) => void;
  onDownload: () => void;
   onSave: () => void;
}

export default function FormSection({ data, setData, onDownload, onSave  }: Props) {
  const updateField = (field: keyof CVData, value: string) => {
    setData({ ...data, [field]: value });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">Fill Your Details</h2>

      <input
        className="w-full mb-4 p-3 border rounded"
        placeholder="Full Name"
        value={data.fullName}
        onChange={(e) => updateField("fullName", e.target.value)}
      />

      <input
        className="w-full mb-4 p-3 border rounded"
        placeholder="Email"
        value={data.email}
        onChange={(e) => updateField("email", e.target.value)}
      />

      <textarea
        className="w-full mb-4 p-3 border rounded"
        placeholder="Skills (comma separated)"
        value={data.skills}
        onChange={(e) => updateField("skills", e.target.value)}
      />

      <textarea
        className="w-full mb-4 p-3 border rounded"
        placeholder="Experience"
        value={data.experience}
        onChange={(e) => updateField("experience", e.target.value)}
      />

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