"use client";

import { cn } from "@/lib/utils";
import { 
  LayoutGrid,
  Package,
  Users2,
  FileText,
  BarChart3,
  Settings,
  Search,
  Plus,
  Tags,
  ChevronRight,
  ShoppingCart,
  Clock,
  AlertCircle,
  Filter,
} from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useAdmin } from "@/contexts/AdminContext";
import { FilterSidebar } from "./FilterSidebar";

const mainMenuItems = [
  {
    title: "Products",
    icon: Package,
    href: "/admin/products",
    badge: "24",
    subItems: [
      { title: "All Products", count: 24 },
      { title: "Study Guides", count: 8 },
      { title: "Practice Tests", count: 12 },
      { title: "Video Courses", count: 4 },
    ]
  },
  {
    title: "Overview",
    icon: LayoutGrid,
    href: "/admin",
    badge: "",
  },
  {
    title: "Users",
    icon: Users2,
    href: "/admin/users",
    badge: "2.8k",
    subItems: [
      { title: "All Users", count: 2847 },
      { title: "Premium", count: 842 },
      { title: "Trial", count: 156 },
      { title: "Pending", count: 23 },
    ]
  },
  {
    title: "Orders",
    icon: ShoppingCart,
    href: "/admin/orders",
    badge: "12",
    subItems: [
      { title: "All Orders", count: 385 },
      { title: "Pending", count: 12 },
      { title: "Completed", count: 364 },
      { title: "Refunded", count: 9 },
    ]
  },
  {
    title: "Content",
    icon: FileText,
    href: "/admin/content",
    badge: "",
  },
  {
    title: "Analytics",
    icon: BarChart3,
    href: "/admin/analytics",
    badge: "",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/admin/settings",
    badge: "",
  }
];

interface SubMenuItem {
  id: string;
  title: string;
  status?: string;
  lastUpdated?: string;
  price?: string;
  sales?: number;
}

const productItems: SubMenuItem[] = [
  {
    id: "1",
    title: "NCLEX-RN Complete Guide",
    status: "Published",
    lastUpdated: "2h ago",
    price: "$99.99",
    sales: 234
  },
  {
    id: "2",
    title: "Med-Surg Practice Tests",
    status: "Draft",
    lastUpdated: "1d ago",
    price: "$49.99",
    sales: 0
  },
  // Add more products...
];

export default function AdminSidebar() {
  const { 
    activeMenu, 
    setActiveMenu,
    selectedItem,
    setSelectedItem,
    sidebarFilter
  } = useAdmin();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex h-[calc(100vh-57px)]">
      {/* Main Sidebar */}
      <div className="w-64 bg-white border-r">
        {/* Quick Actions */}
        <div className="p-4 space-y-3 border-b">
          <Button 
            className="w-full bg-[#1e2c51] hover:bg-[#1e2c51]/90 gap-2"
            onClick={() => setActiveMenu("Products")}
          >
            <Package className="w-4 h-4" />
            Manage Products
          </Button>
          <Button 
            variant="outline"
            className="w-full gap-2"
            onClick={() => setActiveMenu("create")}
          >
            <Plus className="w-4 h-4" />
            Add New Product
          </Button>
        </div>
        
        {/* Main Navigation */}
        <nav className="p-2">
          {mainMenuItems.map((item) => (
            <button
              key={item.title}
              onClick={() => setActiveMenu(item.title)}
              className={cn(
                "flex items-center gap-3 w-full px-3 py-2 text-sm font-medium rounded-md",
                "transition-colors duration-200",
                activeMenu === item.title
                  ? "bg-[#1e2c51] text-white"
                  : "text-gray-700 hover:bg-gray-100"
              )}
            >
              <item.icon className="w-5 h-5" />
              <span className="flex-1 text-left">{item.title}</span>
              {item.badge && (
                <span className={cn(
                  "px-2 py-0.5 text-xs rounded-full",
                  activeMenu === item.title
                    ? "bg-white/20 text-white"
                    : "bg-gray-100 text-gray-600"
                )}>
                  {item.badge}
                </span>
              )}
              {item.subItems && (
                <ChevronRight className={cn(
                  "w-4 h-4 transition-transform",
                  activeMenu === item.title && "rotate-90"
                )} />
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Secondary Sidebar */}
      <AnimatePresence>
        {activeMenu && (
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 320, opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            className="bg-gray-50 border-r overflow-hidden"
          >
            <div className="p-4 border-b bg-white">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9"
                />
              </div>
            </div>

            <div className="p-2">
              {activeMenu === "Products" && (
                <div className="space-y-1">
                  {productItems
                    .filter(item => 
                      item.title.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map((product) => (
                      <button
                        key={product.id}
                        onClick={() => setSelectedItem(product)}
                        className={cn(
                          "w-full p-3 rounded-lg text-left",
                          "transition-colors duration-200",
                          selectedItem?.id === product.id
                            ? "bg-white shadow-sm border"
                            : "hover:bg-white/60"
                        )}
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium text-gray-900">
                            {product.title}
                          </h3>
                          <span className={cn(
                            "px-2 py-1 text-xs rounded-full",
                            product.status === "Published" 
                              ? "bg-green-50 text-green-700"
                              : "bg-gray-100 text-gray-700"
                          )}>
                            {product.status}
                          </span>
                        </div>
                        <div className="mt-1 flex items-center gap-4 text-sm text-gray-500">
                          <span>{product.price}</span>
                          <span>•</span>
                          <span>{product.lastUpdated}</span>
                        </div>
                      </button>
                    ))
                  }
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 