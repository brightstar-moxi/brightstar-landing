"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Plan = { id: string; name: string; usd: number };

const PLANS: Plan[] = [
  { id: "basic", name: "Basic", usd: 45 },
  { id: "pro", name: "Pro", usd: 99 },
  { id: "premium", name: "Premium", usd: 199 },
  { id: "silver", name: "Silver", usd: 299 },
];

function detectCurrencyByCountry(countryCode: string) {
  if (countryCode === "NG") return "NGN";
  if (countryCode === "US") return "USD";
  if (countryCode === "GB") return "GBP";
  return "NGN";
}

export default function PaymentPageClient({ plan }: { plan: string }) {
  const selected = PLANS.find((p) => p.id === plan) ?? PLANS[0];

  const [country, setCountry] = useState("NG");
  const [currency, setCurrency] = useState("NGN");
  const [localAmount, setLocalAmount] = useState<number | null>(null);
  const [rate, setRate] = useState<number | null>(null);
  const [loadingRate, setLoadingRate] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const router = useRouter();

  useEffect(() => {
    try {
      const guess = navigator.language.split("-")[1] || "NG";
      setCountry(guess);
      setCurrency(detectCurrencyByCountry(guess));
    } catch {
      setCountry("NG");
      setCurrency("NGN");
    }
  }, []);

  // currency conversion
  useEffect(() => {
    if (!currency) return;
    setLoadingRate(true);

    (async () => {
      try {
        const res = await fetch(
          `https://api.exchangerate.host/convert?from=USD&to=${currency}&amount=${selected.usd}`
        );
        const json = await res.json();

        if (json && typeof json.result === "number") {
          setLocalAmount(Number(json.result.toFixed(2)));
          setRate(json.info?.rate ?? null);
        }
      } catch (err) {
        setLocalAmount(null);
      } finally {
        setLoadingRate(false);
      }
      console.log("Fetching rate for:", currency, selected.usd);
    })();
  }, [currency, selected.usd]);

  const startPay = async () => {
    if (!email || !name) return alert("Enter name + email");

    const body = {
      name,
      email,
      planId: selected.id,
      planName: selected.name,
      usdAmount: selected.usd,
      currency,
      localAmount: localAmount ?? selected.usd,
    };

    const res = await fetch("/api/flutterwave/initialize", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const json = await res.json();

    if (!res.ok || !json?.data?.link) {
      return alert("Could not initialize payment");
    }

    window.location.href = json.data.link;
  };

  return (
    <main className="min-h-screen bg-gray-900 text-white flex justify-center p-8">
      <div className="max-w-3xl w-full space-y-6">
        <h1 className="text-3xl font-bold">Pay for {selected.name} Plan</h1>

        <div className="bg-gray-800 p-6 rounded-lg space-y-4">
          <p className="text-xl">
            Price: <span className="font-extrabold">${selected.usd}</span>
          </p>

          <p className="text-sm text-gray-300">
            Local Amount:
            {loadingRate ? (
              " Loading..."
            ) : (
              <span className="font-semibold">
                {currency} {localAmount ?? "—"}{" "}
                {rate ? `(1 USD = ${rate.toFixed(4)} ${currency})` : ""}
              </span>
            )}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
            <input
              className="p-3 rounded bg-gray-700"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="p-3 rounded bg-gray-700"
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-3 mt-4">
            <button
              className="bg-teal-400 text-black px-6 py-3 rounded font-bold"
              onClick={startPay}
            >
              Pay {currency} {localAmount ?? selected.usd}
            </button>

            <button
              onClick={() => router.push("/hire")}
              className="text-sm text-gray-300 underline"
            >
              Back to Plans
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
