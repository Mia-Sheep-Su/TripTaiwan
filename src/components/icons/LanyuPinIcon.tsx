import { cn } from "@/lib/utils";

export function LanyuPinIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("text-primary", className)}
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" fill="hsl(var(--accent))" />
      <circle cx="12" cy="10" r="3" fill="hsl(var(--primary-foreground))" stroke="hsl(var(--primary-foreground))" />
    </svg>
  );
}
