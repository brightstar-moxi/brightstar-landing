export default function LearningPage() {
  const lessons = [
    {
      id: 1,
      title: "Learn Next.js",
      type: "Video",
      date: "2025-09-01",
    },
    {
      id: 2,
      title: "React Fundamentals PDF",
      type: "PDF",
      date: "2025-09-02",
    },
  ];

  return (
    <div>

      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">
            Learning Center
          </h1>

          <p className="text-gray-500">
            Manage learning resources.
          </p>
        </div>

        <button className="bg-indigo-600 text-white px-4 py-3 rounded-xl">
          Add Lesson
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-slate-100">
            <tr>
              <th className="text-left p-4">Title</th>
              <th className="text-left p-4">Type</th>
              <th className="text-left p-4">Date</th>
              <th className="text-left p-4">Action</th>
            </tr>
          </thead>

          <tbody>

            {lessons.map((lesson) => (
              <tr
                key={lesson.id}
                className="border-t"
              >
                <td className="p-4">
                  {lesson.title}
                </td>

                <td className="p-4">
                  {lesson.type}
                </td>

                <td className="p-4">
                  {lesson.date}
                </td>

                <td className="p-4">
                  <button className="bg-red-500 text-white px-3 py-2 rounded-lg">
                    Delete
                  </button>
                </td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}