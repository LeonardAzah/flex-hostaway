interface HostawayReview {
  id: number;
  listingName: string;
  type: string;
  rating: number;
  reviewCategory?: Array<{ category: string; rating: number }>;
  submittedAt: string;
  guestName: string;
  publicReview: string;
}

export function normalizeHostawayReviews(reviews: HostawayReview[]) {
  return reviews.map((r) => ({
    id: r.id,
    property: {
      id: r.listingName.toLowerCase().replace(/\s+/g, "-"),
      name: r.listingName,
    },
    channel: "hostaway",
    type: r.type,
    rating: r.rating,
    categories: Object.fromEntries(
      r.reviewCategory?.map((c) => [c.category, c.rating]) ?? []
    ),
    date: r.submittedAt,
    guestName: r.guestName,
    comment: r.publicReview,
    approved: false,
  }));
}
