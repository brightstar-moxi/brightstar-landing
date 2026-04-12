"use client";

import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useParams } from "next/navigation";
import CVBuilderPage from "../page";

export default function EditCVPage() {
  const params = useParams();
  const id = params.id as string;

  const cv = useQuery(api.cv.getCV, { id });

  if (!cv) return <div>Loading...</div>;

  return <CVBuilderPage initialData={cv.data} />;
}