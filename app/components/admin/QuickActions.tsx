import Link from "next/link";

export default function QuickActions() {
  const actions = [
    {
      title: "View Ratings",
      href: "/admin/ratings",
    },
    {
      title: "Manage Community",
      href: "/admin/community",
    },
    {
      title: "Add Lesson",
      href: "/admin/learning",
    },
    {
      title: "Send Newsletter",
      href: "/admin/newsletter",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h2 className="text-lg font-semibold mb-4">
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 gap-3">
        {actions.map((action) => (
          <Link
            key={action.title}
            href={action.href}
            className="p-4 border rounded-xl hover:bg-indigo-50 hover:border-indigo-500 transition"
          >
            {action.title}
          </Link>
        ))}
      </div>
    </div>
  );
}