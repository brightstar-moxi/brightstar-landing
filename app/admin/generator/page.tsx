export default function GeneratorPage() {
  const generatedNames = [
    {
      id: 1,
      name: "BrightNova",
      category: "Technology",
      date: "2025-09-01",
    },
    {
      id: 2,
      name: "CodeForge",
      category: "Software",
      date: "2025-09-02",
    },
    {
      id: 3,
      name: "LaunchSpark",
      category: "Startup",
      date: "2025-09-03",
    },
  ];

  return (
    <div>

      <div className="mb-6">
        <h1 className="text-3xl font-bold">
          Name Generator
        </h1>

        <p className="text-gray-500">
          Track generated names and usage.
        </p>
      </div>

      {/* Stats */}

      <div className="grid md:grid-cols-3 gap-4 mb-6">

        <div className="bg-white p-6 rounded-2xl shadow">
          <p className="text-gray-500">Total Uses</p>
          <h2 className="text-3xl font-bold">4,732</h2>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <p className="text-gray-500">Generated Today</p>
          <h2 className="text-3xl font-bold">187</h2>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <p className="text-gray-500">Popular Category</p>
          <h2 className="text-3xl font-bold">Technology</h2>
        </div>

      </div>

      {/* Generated Names */}

      <div className="bg-white rounded-2xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-slate-100">
            <tr>
              <th className="text-left p-4">Name</th>
              <th className="text-left p-4">Category</th>
              <th className="text-left p-4">Date</th>
            </tr>
          </thead>

          <tbody>

            {generatedNames.map((item) => (
              <tr
                key={item.id}
                className="border-t"
              >
                <td className="p-4">
                  {item.name}
                </td>

                <td className="p-4">
                  {item.category}
                </td>

                <td className="p-4">
                  {item.date}
                </td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}