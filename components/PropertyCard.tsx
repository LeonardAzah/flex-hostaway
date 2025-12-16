"use client";

import Image from "next/image";
import { Bed, Bath, Users } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";

type PropertyCardProps = {
  id: string;
  image: string;
  title: string;
  location: string;
  pricePerNight: number;
  bedrooms: number;
  bathrooms: number;
  guests: number;
};

export function PropertyCard({ property }: { property: PropertyCardProps }) {
  const {
    image,
    title,
    location,
    pricePerNight,
    bedrooms,
    bathrooms,
    guests,
    id,
  } = property;
  const router = useRouter();
  return (
    <Card
      className="overflow-hidden rounded-xl shadow-sm hover:shadow-md transition cursor-pointer py-0"
      onClick={() => router.push(`/${id}`)}
    >
      {/* Image Section */}
      <div className="relative h-56 w-full">
        <Image src={image} alt={title} fill className="object-cover" priority />

        {/* Price Badge */}
        <div className="absolute p-2 right-1 top-2 bg-white text-foreground shadow rounded-sm">
          <span className="text-end font-semibold">£{pricePerNight}</span>
          <p className="text-xs font-normal text-muted-foreground">per night</p>
        </div>
      </div>

      {/* Content */}
      <CardContent className="space-y-3 p-4">
        <div>
          <h3 className="line-clamp-2 text-base font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">{location}</p>
        </div>

        {/* Meta */}
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Bed className="h-4 w-4" />
            <span>{bedrooms} Bedroom</span>
          </div>

          <div className="flex items-center gap-1">
            <Bath className="h-4 w-4" />
            <span>{bathrooms} Bathroom</span>
          </div>

          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>Up to {guests} guests</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
