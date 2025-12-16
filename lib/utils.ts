import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Review } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface HostawayReviewRaw {
  id: string;
  listingId: string;
  listingName: string;
  type: string;
  rating: number;
  subRatings: Record<string, number>;
  comment: string;
  guestName: string;
  submittedAt: string;
}

export function normalizeHostawayReview(raw: HostawayReviewRaw): Review {
  return {
    id: raw.id,
    propertyId: raw.listingId,
    propertyName: raw.listingName,
    channel: "hostaway",
    reviewType: raw.type as "guest" | "host",
    rating: raw.rating / 0,
    categories: raw.subRatings,
    comment: raw.comment,
    reviewerName: raw.guestName,
    reviewDate: raw.submittedAt,
    approved: false,
    createdAt: new Date().toISOString(),
  };
}
