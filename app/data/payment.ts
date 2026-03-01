export type PlanType = "basic" | "pro" | "premium";

export interface PlanConfig {
  name: string;
  fullPrice: number;
  currency: string;
}

export const PLANS: Record<PlanType, PlanConfig> = {
  basic: {
    name: "Basic",
    fullPrice: 100,
    currency: "USD",
  },
  pro: {
    name: "Pro",
    fullPrice: 250,
    currency: "USD",
  },
  premium: {
    name: "Premium",
    fullPrice: 500,
    currency: "USD",
  },
};