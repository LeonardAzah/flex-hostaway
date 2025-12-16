import { DateRangeFilter } from "@/components/DateRangeFilter";
import { RatingsTrendChart } from "@/components/RatingsTrendChart";
import React, { Suspense } from "react";

const page = async () => {
  const BASE_URL = process.env.NEXT_ENV_BASE_URL;
  const res = await fetch(`${BASE_URL}/api/reviews/hostaway`, {
    cache: "no-store",
  });
  const { data } = await res.json();
  return (
    <div className="flex flex-col gap-2">
      <div>
        <Suspense fallback={null}>
          <DateRangeFilter />
        </Suspense>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-2">
        <RatingsTrendChart reviews={data} />
      </div>
    </div>
  );
};

export default page;
