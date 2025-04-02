import { Jost } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Jost({
  subsets: ["latin"],
  weight: ["400", "700"],
});

interface HeaderProps {
  label: string;
  className?: string;
}

const Header = ({
  label,
  className
}: HeaderProps) => {
  return (
    <div className={cn("w-full flex flex-col gap-y-4 items-center", className)}>
      <h1 className="text-3xl font-semibold">
        <span className="text-[#1e2c51]">RN</span>
        <span>Student</span>
      </h1>
      <p className="text-muted-foreground text-sm">
        {label}
      </p>
    </div>
  );
};

export default Header;
