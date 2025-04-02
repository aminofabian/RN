"use client";

import { useAdmin } from "@/contexts/AdminContext";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Search, Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FilterOption {
  label: string;
  value: string;
  count: number;
}

interface FilterGroup {
  title: string;
  options: FilterOption[];
}

const filterGroups: Record<string, FilterGroup[]> = {
  Products: [
    {
      title: "Type",
      options: [
        { label: "Study Guides", value: "study-guides", count: 8 },
        { label: "Practice Tests", value: "practice-tests", count: 12 },
        { label: "Video Courses", value: "video-courses", count: 4 },
      ]
    },
    {
      title: "Status",
      options: [
        { label: "Published", value: "published", count: 18 },
        { label: "Draft", value: "draft", count: 6 },
      ]
    },
    {
      title: "Price Range",
      options: [
        { label: "Free", value: "free", count: 3 },
        { label: "$1 - $50", value: "low", count: 8 },
        { label: "$51 - $100", value: "medium", count: 10 },
        { label: "$100+", value: "high", count: 3 },
      ]
    }
  ],
  Users: [
    {
      title: "Role",
      options: [
        { label: "Student", value: "student", count: 1845 },
        { label: "Premium", value: "premium", count: 842 },
        { label: "Trial", value: "trial", count: 156 },
      ]
    },
    {
      title: "Status",
      options: [
        { label: "Active", value: "active", count: 2647 },
        { label: "Inactive", value: "inactive", count: 156 },
        { label: "Pending", value: "pending", count: 44 },
      ]
    }
  ]
};

export function FilterSidebar() {
  const { activeMenu, sidebarFilter, setSidebarFilter } = useAdmin();
  const groups = filterGroups[activeMenu || ""] || [];

  return (
    <div className="w-64 bg-white border-r p-4">
      <div className="space-y-6">
        {/* Search */}
        <div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Filter..."
              value={sidebarFilter}
              onChange={(e) => setSidebarFilter(e.target.value)}
              className="pl-9"
            />
          </div>
        </div>

        {/* Filter Groups */}
        {groups.map((group) => (
          <div key={group.title}>
            <h3 className="text-sm font-medium text-gray-900 mb-3">
              {group.title}
            </h3>
            <div className="space-y-2">
              {group.options.map((option) => (
                <button
                  key={option.value}
                  className={cn(
                    "flex items-center justify-between w-full px-2 py-1.5 text-sm rounded-md",
                    "transition-colors duration-200",
                    "hover:bg-gray-100"
                  )}
                >
                  <span className="text-gray-700">{option.label}</span>
                  <span className="text-xs text-gray-500">{option.count}</span>
                </button>
              ))}
            </div>
          </div>
        ))}

        {/* Active Filters */}
        <div className="pt-4 border-t">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-gray-900">Active Filters</h3>
            <Button variant="ghost" size="sm" className="h-auto p-0 text-gray-500">
              Clear all
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-md">
              Published
              <button className="ml-1 text-gray-500 hover:text-gray-700">
                <X className="w-3 h-3" />
              </button>
            </span>
            {/* Add more active filters */}
          </div>
        </div>
      </div>
    </div>
  );
} 