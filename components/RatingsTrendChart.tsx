"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card } from "@/components/ui/card";

type Review = {
  date: string;
  rating: number | null;
};

export function RatingsTrendChart({ reviews }: { reviews: Review[] }) {
  // Aggregate average rating per day
  const grouped = reviews.reduce<
    Record<string, { total: number; count: number }>
  >((acc, r) => {
    const date = r.date.slice(0, 10);

    if (!acc[date]) {
      acc[date] = { total: 0, count: 0 };
    }

    if (r.rating !== null) {
      acc[date].total += r.rating;
      acc[date].count += 1;
    }

    return acc;
  }, {});

  const data = Object.entries(grouped).map(([date, value]) => ({
    date,
    rating: value.count ? value.total / value.count : 0,
  }));

  return (
    <Card className="p-4">
      <h3 className="mb-2 font-medium">Average Rating by Day</h3>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="date" />
          <YAxis domain={[0, 10]} />
          <Tooltip />
          <Bar dataKey="rating" />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}
