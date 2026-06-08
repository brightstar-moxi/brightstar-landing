export default function RatingsPage() {
  const ratings = [
    {
      id: 1,
      name: "Anonymous",
      rating: 5,
      comment: "Great website",
      date: "2025-09-01",
    },
    {
      id: 2,
      name: "Anonymous",
      rating: 4,
      comment: "Very useful tools",
      date: "2025-09-02",
    },
  ];

  return (
    <div>

      <div className="mb-6">
        <h1 className="text-3xl font-bold">
          Ratings Management
        </h1>

        <p className="text-gray-500">
          View and manage user ratings.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-slate-100">
            <tr>
              <th className="text-left p-4">User</th>
              <th className="text-left p-4">Rating</th>
              <th className="text-left p-4">Comment</th>
              <th className="text-left p-4">Date</th>
              <th className="text-left p-4">Action</th>
            </tr>
          </thead>

          <tbody>

            {ratings.map((rating) => (
              <tr
                key={rating.id}
                className="border-t"
              >
                <td className="p-4">
                  {rating.name}
                </td>

                <td className="p-4">
                  ⭐ {rating.rating}
                </td>

                <td className="p-4">
                  {rating.comment}
                </td>

                <td className="p-4">
                  {rating.date}
                </td>

                <td className="p-4">

                  <button
                    className="bg-red-500 text-white px-3 py-2 rounded-lg"
                  >
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