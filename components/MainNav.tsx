"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function MainNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 h-[57px] bg-white border-b z-50">
      <div className="flex items-center justify-between h-full px-6">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-semibold text-xl text-[#1e2c51]">
            RN Resources
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/admin">
            <Button variant="ghost">Admin</Button>
          </Link>
          <Link href="/dashboard">
            <Button>Dashboard</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
} 