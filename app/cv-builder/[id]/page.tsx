"use client";

import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useParams } from "next/navigation";
import { Id } from "../../../convex/_generated/dataModel"; // ✅ IMPORT THIS
import CVBuilderClient from "../CVBuilderClient";

export default function EditCVPage() {
  const params = useParams<{ id: string }>();

  // ✅ CAST TO CONVEX ID TYPE
  const id = params.id as Id<"cvs">;

  const cv = useQuery(api.cv.getCV, { id });

  if (cv === undefined) return <div>Loading...</div>;
  if (cv === null) return <div>CV not found</div>;

  return <CVBuilderClient initialData={cv.data} />;
}