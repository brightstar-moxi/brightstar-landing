export default function NewsletterPage() {
  const subscribers = [
    {
      id: 1,
      email: "john@example.com",
      date: "2025-09-01",
    },
    {
      id: 2,
      email: "mary@example.com",
      date: "2025-09-02",
    },
  ];

  return (
    <div>

      <div className="mb-6">
        <h1 className="text-3xl font-bold">
          Newsletter
        </h1>

        <p className="text-gray-500">
          Manage subscribers and send updates.
        </p>
      </div>

      {/* Send Newsletter */}

      <div className="bg-white rounded-2xl shadow p-6 mb-6">

        <h2 className="text-lg font-semibold mb-4">
          Send Newsletter
        </h2>

        <input
          placeholder="Subject"
          className="w-full border rounded-lg p-3 mb-4"
        />

        <textarea
          placeholder="Write your newsletter..."
          rows={6}
          className="w-full border rounded-lg p-3 mb-4"
        />

        <button className="bg-indigo-600 text-white px-5 py-3 rounded-xl">
          Send Newsletter
        </button>

      </div>

      {/* Subscribers */}

      <div className="bg-white rounded-2xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-slate-100">
            <tr>
              <th className="text-left p-4">
                Email
              </th>

              <th className="text-left p-4">
                Date Joined
              </th>
            </tr>
          </thead>

          <tbody>

            {subscribers.map((subscriber) => (
              <tr
                key={subscriber.id}
                className="border-t"
              >
                <td className="p-4">
                  {subscriber.email}
                </td>

                <td className="p-4">
                  {subscriber.date}
                </td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}