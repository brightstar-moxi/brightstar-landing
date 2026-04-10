import { CVData } from "../types";

interface Props {
  data: CVData;
  setData: (data: CVData) => void;
}

export default function FormSection({ data, setData }: Props) {
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
    </div>
  );
}