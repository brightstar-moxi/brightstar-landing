export default function RecentActivity() {
  const activities = [
    {
      title: "New rating submitted",
      time: "2 mins ago",
    },
    {
      title: "New community post",
      time: "10 mins ago",
    },
    {
      title: "New newsletter subscriber",
      time: "25 mins ago",
    },
    {
      title: "New lesson uploaded",
      time: "1 hour ago",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h2 className="text-lg font-semibold mb-4">
        Recent Activity
      </h2>

      <div className="space-y-4">
        {activities.map((item, index) => (
          <div
            key={index}
            className="border-b pb-3 last:border-b-0"
          >
            <p className="font-medium">
              {item.title}
            </p>

            <p className="text-sm text-gray-500">
              {item.time}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}