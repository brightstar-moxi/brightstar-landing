export default function TopFeatures() {
  const features = [
    {
      name: "Name Generator",
      usage: 4732,
      growth: "+27%",
    },
    {
      name: "Community",
      usage: 342,
      growth: "+18%",
    },
    {
      name: "Newsletter",
      usage: 2589,
      growth: "+21%",
    },
    {
      name: "Learning Center",
      usage: 126,
      growth: "+8%",
    },
    {
      name: "Ratings",
      usage: 1248,
      growth: "+12%",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow p-6 mt-6">
      <h2 className="text-lg font-semibold mb-4">
        Top Performing Features
      </h2>

      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left py-3">
              Feature
            </th>

            <th className="text-left py-3">
              Usage
            </th>

            <th className="text-left py-3">
              Growth
            </th>
          </tr>
        </thead>

        <tbody>
          {features.map((feature) => (
            <tr
              key={feature.name}
              className="border-b"
            >
              <td className="py-3">
                {feature.name}
              </td>

              <td className="py-3">
                {feature.usage.toLocaleString()}
              </td>

              <td className="py-3 text-green-600 font-medium">
                {feature.growth}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}