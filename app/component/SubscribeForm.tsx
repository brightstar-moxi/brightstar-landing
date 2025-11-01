import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useState } from "react";

export default function SubscribeForm() {
  // ✅ Now this works
  const addSubscriber = useMutation(api.addSubscriber.addSubscriber);
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await addSubscriber({ email });

    if (result.status === "already_subscribed") {
      alert("You're already subscribed!");
    } else {
      alert("Subscribed successfully!");
    }

    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="border p-3 rounded-md w-64"
      />
      <button
        type="submit"
        className="bg-teal-500 text-white px-6 py-3 rounded-md hover:bg-teal-400 transition"
      >
        Subscribe
      </button>
    </form>
  );
}
