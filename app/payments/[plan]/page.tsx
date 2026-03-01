import { notFound } from "next/navigation";
import { PLANS, PlanType } from "@/app/data/payment";

interface PaymentPageProps {
  params: Promise<{
    plan: string;
  }>;
}

export default async function PaymentPage({
  params,
}: PaymentPageProps) {
  const { plan } = await params;

  const planKey = plan.toLowerCase();

  if (!Object.keys(PLANS).includes(planKey)) {
    notFound();
  }

  const selectedPlan = PLANS[planKey as PlanType];

  const compulsoryAmount = Number(
    (selectedPlan.fullPrice * 0.7).toFixed(2)
  );

  const remainingAmount = Number(
    (selectedPlan.fullPrice - compulsoryAmount).toFixed(2)
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 p-6">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          {selectedPlan.name} Plan Payment
        </h1>

        <p className="text-gray-500 mb-6">
          Secure your subscription by paying 70% upfront.
        </p>

        <div className="space-y-4 border rounded-xl p-6 bg-gray-50">
          <div className="flex justify-between text-lg">
            <span>Full Price</span>
            <span>
              {selectedPlan.currency} {selectedPlan.fullPrice}
            </span>
          </div>

          <div className="flex justify-between text-lg font-semibold text-indigo-600">
            <span>Compulsory (70%)</span>
            <span>
              {selectedPlan.currency} {compulsoryAmount}
            </span>
          </div>

          <div className="flex justify-between text-sm text-gray-500">
            <span>Remaining (30%)</span>
            <span>
              {selectedPlan.currency} {remainingAmount}
            </span>
          </div>
        </div>

        <button className="w-full mt-8 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition">
          Proceed to Payment
        </button>
      </div>
    </div>
  );
}