import { DateRangeFilter } from "@/components/DateRangeFilter";
import { PropertyCard } from "@/components/PropertyCard";
import { properties } from "@/lib/data";
import React, { Suspense } from "react";

const page = () => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <Suspense fallback={null}>
          <DateRangeFilter />
        </Suspense>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default page;
