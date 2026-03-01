import { notFound } from "next/navigation";
// import { PLANS, PlanType } from "../data/payment";
import { PLANS,  PlanType } from "@/app/data/payment";

interface PaymentPageProps {
  params: {
    plan: string;
  };
}

export default function PaymentPage({ params }: PaymentPageProps) {
  const planKey = params.plan as PlanType;
  const plan = PLANS[planKey];

  if (!plan) return notFound();

  const compulsoryAmount = plan.fullPrice * 0.7;
  const remainingAmount = plan.fullPrice - compulsoryAmount;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 p-6">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-2xl p-8">
        
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          {plan.name} Plan Payment
        </h1>

        <p className="text-gray-500 mb-6">
          Secure your subscription by paying 70% upfront.
        </p>

        <div className="space-y-4 border rounded-xl p-6 bg-gray-50">
          <div className="flex justify-between text-lg">
            <span>Full Price</span>
            <span>
              {plan.currency} {plan.fullPrice}
            </span>
          </div>

          <div className="flex justify-between text-lg font-semibold text-indigo-600">
            <span>Compulsory (70%)</span>
            <span>
              {plan.currency} {compulsoryAmount}
            </span>
          </div>

          <div className="flex justify-between text-sm text-gray-500">
            <span>Remaining (30%)</span>
            <span>
              {plan.currency} {remainingAmount}
            </span>
          </div>
        </div>

        <button
          className="w-full mt-8 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition"
          onClick={() => {
            console.log("Proceed to payment");
          }}
        >
          Proceed to Payment
        </button>

      </div>
    </div>
  );
}