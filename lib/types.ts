import { ReactNode } from "react";

export interface Review {
  id: string;
  propertyId: string;
  propertyName: string;

  channel: "hostaway" | "google" | "airbnb" | "booking";
  reviewType: "guest" | "host";

  rating: number;
  categories?: {
    cleanliness?: number;
    communication?: number;
    location?: number;
    value?: number;
  };

  comment: string;
  reviewerName?: string;
  reviewDate: string;

  approved: boolean;
  createdAt: string;
}
export interface RowProps {
  children: React.ReactNode;
  onClick?: () => void;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  active?: boolean;
  className?: string;
  textClass?: string;
}

export interface HeaderIconButtonProps {
  icon: ReactNode;
  label: string; // Tooltip text
  popoverContent?: ReactNode;
  className?: string;

  // For normal clickable buttons
  handleClick?: () => void;

  // For popover buttons

  side?: "top" | "right" | "bottom" | "left";
  buttonRef?: React.RefObject<HTMLButtonElement>;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}
