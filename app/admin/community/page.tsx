export default function CommunityPage() {
  const posts = [
    {
      id: 1,
      message: "I love Brightstar.tech!",
      date: "2025-09-01",
      pinned: false,
    },
    {
      id: 2,
      message: "Please add more tutorials.",
      date: "2025-09-02",
      pinned: true,
    },
  ];

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">
          Community Management
        </h1>

        <p className="text-gray-500">
          Moderate community posts.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow overflow-hidden">
        <table className="w-full">

          <thead className="bg-slate-100">
            <tr>
              <th className="text-left p-4">Message</th>
              <th className="text-left p-4">Date</th>
              <th className="text-left p-4">Status</th>
              <th className="text-left p-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {posts.map((post) => (
              <tr
                key={post.id}
                className="border-t"
              >
                <td className="p-4">
                  {post.message}
                </td>

                <td className="p-4">
                  {post.date}
                </td>

                <td className="p-4">
                  {post.pinned ? (
                    <span className="text-green-600">
                      Pinned
                    </span>
                  ) : (
                    <span className="text-gray-500">
                      Normal
                    </span>
                  )}
                </td>

                <td className="p-4 flex gap-2">
                  <button className="bg-indigo-600 text-white px-3 py-2 rounded-lg">
                    Pin
                  </button>

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