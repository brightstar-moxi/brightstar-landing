import { CVData } from "../cv-builder/types";

export default function CVPreview({ data }: { data: CVData }) {
  const skills = data.skills.split(",").map((s) => s.trim());

  return (
    <div className="bg-white p-8 rounded-xl shadow">
      
      <h1 className="text-2xl font-bold">
        {data.fullName || "Your Name"}
      </h1>

      <p className="text-gray-500 mb-6">
        {data.email || "your@email.com"}
      </p>

      <div className="mb-6">
        <h2 className="font-semibold border-b pb-1 mb-2">Skills</h2>
        <ul className="list-disc ml-5">
          {skills.map((skill, i) => (
            <li key={i}>{skill || "Skill"}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="font-semibold border-b pb-1 mb-2">Experience</h2>
        <p className="text-sm whitespace-pre-line">
          {data.experience || "Your experience will appear here..."}
        </p>
      </div>
    </div>
  );
}