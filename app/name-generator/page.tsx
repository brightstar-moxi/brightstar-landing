"use client";

import { useState } from "react";

export default function NameGeneratorPage() {
    const [keyword, setKeyword] = useState("");
    const [category, setCategory] = useState("Technology");
    const [results, setResults] = useState<string[]>([]);
    const [copied, setCopied] = useState("");
const [savedNames, setSavedNames] = useState<string[]>([]);

    //   const generateNames = () => {
    //   const prefixes = [
    //     "Nova",
    //     "Prime",
    //     "Ultra",
    //     "Smart",
    //     "Next",
    //   ];VictorMedia

    //   const suffixes = [
    //     "Tech",
    //     "Labs",
    //     "Hub",
    //     "Works",
    //     "Flow",
    //     "Forge",
    //     "Sphere",
    //     "Start",
    //   ];

    //   const generated = [
    //     ...suffixes.map((suffix) => `${keyword}${suffix}`),
    //     ...prefixes.map((prefix) => `${prefix}${keyword}`),
    //   ];

    //   setResults(generated);
    // };

    const generateNames = () => {
        if (!keyword.trim()) return;

        const categoryWords: Record<string, string[]> = {
            Technology: ["Tech", "Labs", "AI", "Cloud", "Systems"],
            Software: ["Code", "Apps", "Stack", "Works", "Solutions"],
            Ecommerce: ["Store", "Market", "Shop", "Cart", "Commerce"],
            Finance: ["Capital", "Pay", "Funds", "Invest", "Money"],
            Healthcare: ["Health", "Care", "Med", "Clinic", "Life"],
            Education: ["Learn", "Academy", "School", "Tutor", "Skills"],
            Fashion: ["Style", "Wear", "Trend", "Mode", "Fashion"],
            Restaurant: ["Kitchen", "Bites", "Food", "Taste", "Meals"],
            "Real Estate": ["Homes", "Property", "Realty", "Estate", "Land"],
            Marketing: ["Media", "Growth", "Reach", "Boost", "Digital"],
        };

        const words = categoryWords[category] || [];

        const generated = words.map(
            (word) => `${keyword}${word}`
        );

        setResults(generated);
    };

    const saveName = (name: string) => {
  if (savedNames.includes(name)) return;

  setSavedNames((prev) => [...prev, name]);
};

    return (
        <div className="min-h-screen bg-slate-50 py-20">
            <div className="max-w-4xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold mb-4">
                        Business Name Generator
                    </h1>

                    <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                        Generate unique and memorable names for your startup,
                        business, company, or brand.
                    </p>
                </div>

                {/* Generator Form */}
                <div className="bg-white rounded-3xl shadow-lg p-8">

                    <div className="space-y-6">

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Business Keyword
                            </label>

                            <input
                                type="text"
                                placeholder="Enter keyword e.g. Bright"
                                value={keyword}
                                onChange={(e) => setKeyword(e.target.value)}
                                className="w-full border border-gray-300 p-4 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Category
                            </label>

                            <select
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="w-full border border-gray-300 p-4 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
                            >
                                <option>Technology</option>
                                <option>Software</option>
                                <option>Ecommerce</option>
                                <option>Finance</option>
                                <option>Healthcare</option>
                                <option>Education</option>
                                <option>Fashion</option>
                                <option>Restaurant</option>
                                <option>Real Estate</option>
                                <option>Marketing</option>
                            </select>
                        </div>

                        <button
                            onClick={generateNames}
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-xl font-semibold transition"
                        >
                            Generate Names
                        </button>

                    </div>

                </div>

                {/* Results */}
                {results.length > 0 && (
                    <div className="mt-10">

                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-bold">
                                Generated Names
                            </h2>

                            <button
                                onClick={generateNames}
                                className="bg-black text-white px-5 py-3 rounded-xl"
                            >
                                Generate More
                            </button>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">

                            {results.map((name) => (
                                <div
                                    key={name}
                                    className="bg-white rounded-2xl shadow p-5 border"
                                >
                                    <h3 className="text-xl font-semibold mb-2">
                                        {name}
                                    </h3>

                                    <p className="text-sm text-gray-500 mb-4">
                                        Perfect for a {category.toLowerCase()} business.
                                    </p>

                                    <div className="flex gap-3">

                                        <button
                                            onClick={async () => {
                                                await navigator.clipboard.writeText(name);
                                                setCopied(name);

                                                setTimeout(() => {
                                                    setCopied("");
                                                }, 2000);
                                            }}
                                            className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
                                        >
                                            {copied === name ? "Copied!" : "Copy"}
                                        </button>

                                        <button
                                            onClick={() => {
                                                navigator.share?.({
                                                    title: "Business Name",
                                                    text: name,
                                                });
                                            }}
                                            className="border px-4 py-2 rounded-lg"
                                        >
                                            Share
                                        </button>
<button
  onClick={() => saveName(name)}
  className="border px-4 py-2 rounded-lg"
>
  ❤️ Save
</button>
                                    </div>
                                </div>
                            ))}

                        </div>

                    </div>
                )}

            </div>
        </div>
    );
}