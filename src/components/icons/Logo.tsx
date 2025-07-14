import { cn } from "@/lib/utils";
import Image from 'next/image';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("relative", className)}>
      <Image
        src="/Logo.svg"
        alt="Tour Guide Taiwan Logo"
        fill
        sizes="45px"
        style={{ objectFit: 'contain' }}
      />
    </div>
  );
}
