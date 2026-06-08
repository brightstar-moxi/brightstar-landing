export default function StatsCards() {
  const stats = [
    { title: "Total Ratings", value: "0" },
    { title: "Community Posts", value: "0" },
    { title: "Subscribers", value: "0" },
    { title: "Resources", value: "0" },
    { title: "Generator Uses", value: "0" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4">
      {stats.map((item) => (
        <div
          key={item.title}
          className="bg-white rounded-2xl p-6 shadow"
        >
          <p className="text-gray-500 text-sm">
            {item.title}
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {item.value}
          </h2>
        </div>
      ))}
    </div>
  );
}