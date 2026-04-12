"use client";

import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useParams } from "next/navigation";
import CVBuilderClient from "../CVBuilderClient";

export default function EditCVPage() {
  const params = useParams();
  const id = params.id as any;

  const cv = useQuery(api.cv.getCV, { id });

  if (!cv) return <div>Loading...</div>;

  if (cv === null) return <div>CV not found</div>;

  return <CVBuilderClient initialData={cv.data} />;
}