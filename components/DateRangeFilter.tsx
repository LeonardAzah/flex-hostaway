"use client";

import * as React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { format, parseISO, startOfDay } from "date-fns";
import { CalendarIcon, X } from "lucide-react";
import { DateRange } from "react-day-picker";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";

export function DateRangeFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const getInitialRange = React.useCallback((): DateRange | undefined => {
    const from = searchParams.get("from");
    const to = searchParams.get("to");

    if (!from && !to) return undefined;

    return {
      from: from ? parseISO(from) : undefined,
      to: to ? parseISO(to) : undefined,
    };
  }, [searchParams]);

  const [date, setDate] = React.useState<DateRange | undefined>(
    getInitialRange()
  );

  const today = startOfDay(new Date());

  const hasValue = Boolean(date?.from || date?.to);

  const updateUrl = (range?: DateRange) => {
    const params = new URLSearchParams(searchParams.toString());

    if (range?.from) {
      params.set("from", format(range.from, "yyyy-MM-dd"));
    } else {
      params.delete("from");
    }

    if (range?.to) {
      params.set("to", format(range.to, "yyyy-MM-dd"));
    } else {
      params.delete("to");
    }

    const query = params.toString();
    router.push(query ? `?${query}` : "?", { scroll: false });
  };

  const handleSelect = (range?: DateRange) => {
    setDate(range);
    updateUrl(range);
  };

  const handleClear = () => {
    setDate(undefined);
    updateUrl(undefined);
  };

  const handleReset = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    handleClear();
  };

  /** ------------------------------
   * Render helpers
   * ------------------------------*/
  const renderLabel = () => {
    if (!date?.from) return <span>Dates</span>;

    if (!date.to) {
      return format(date.from, "MMM dd, yyyy");
    }

    return (
      <>
        {format(date.from, "MMM dd, yyyy")} – {format(date.to, "MMM dd, yyyy")}
      </>
    );
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="w-[260px] justify-between font-normal rounded-sm  bg-white"
        >
          <div className="flex items-center gap-2">
            <CalendarIcon className="h-4 w-4" />
            {renderLabel()}
          </div>

          {hasValue && (
            <span onClick={handleReset}>
              <X className="size-3 text-muted-foreground hover:text-foreground" />
            </span>
          )}
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-auto p-0" align="start">
        <div className="flex items-center justify-between p-2">
          <p className="text-sm font-medium">Select dates</p>

          {hasValue && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClear}
              className="h-auto px-2"
            >
              Clear
            </Button>
          )}
        </div>

        <Separator />

        <Calendar
          initialFocus
          mode="range"
          numberOfMonths={2}
          selected={date}
          onSelect={handleSelect}
          disabled={{ before: today }}
        />
      </PopoverContent>
    </Popover>
  );
}
