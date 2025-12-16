import { NextResponse } from "next/server";
import { normalizeHostawayReviews } from "@/lib/normalize-reviews";
import { data } from "@/lib/data";

export async function GET() {
  const filtered = data.result.filter((review) => review.rating !== null);
  const normalized = normalizeHostawayReviews(filtered as any);

  return NextResponse.json({
    status: "success",
    count: normalized.length,
    data: normalized,
  });
}
