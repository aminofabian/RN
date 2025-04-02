"use client";

import { createContext, useContext, useState } from "react";

interface AdminContextType {
  activeMenu: string | null;
  setActiveMenu: (menu: string | null) => void;
  selectedItem: any | null;
  setSelectedItem: (item: any | null) => void;
  sidebarFilter: string;
  setSidebarFilter: (filter: string) => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export function AdminProvider({ children }: { children: React.ReactNode }) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<any | null>(null);
  const [sidebarFilter, setSidebarFilter] = useState("");

  return (
    <AdminContext.Provider value={{
      activeMenu,
      setActiveMenu,
      selectedItem,
      setSelectedItem,
      sidebarFilter,
      setSidebarFilter,
    }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
} 