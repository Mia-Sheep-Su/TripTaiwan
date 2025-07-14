import { cn } from "@/lib/utils";

export function TaipeiPinIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("text-accent", className)}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="hsl(var(--accent))" />
      <circle cx="12" cy="10" r="2" fill="hsl(var(--primary-foreground))" stroke="hsl(var(--primary-foreground))" />
    </svg>
  );
}
