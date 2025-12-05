// app/payments/[plan]/page.tsx

import PaymentPageClient from "./PaymentPageClient";

export default function PaymentPage({ params }: { params: { plan: string } }) {
  return <PaymentPageClient plan={params.plan} />;
}
