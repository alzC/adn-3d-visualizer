"use client";
import React from "react";

type Tab = {
  id: string;
  label: string;
};

type TabsProps = {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (id: string) => void;
};

export const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onTabChange }) => (
  <div className="flex space-x-1 mb-6">
    {tabs.map((tab) => (
      <button
        key={tab.id}
        onClick={() => onTabChange(tab.id)}
        className={`px-3 py-2 rounded-md inter text-xs font-medium transition-all ${
          activeTab === tab.id
            ? "gradient-btn text-white"
            : "text-gray-400 hover:text-white hover:bg-gray-700"
        }`}
      >
        {tab.label}
      </button>
    ))}
  </div>
); 