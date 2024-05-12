"use client";

import { Tab } from "@headlessui/react";
import { ReactNode } from "react";
import { classNames } from "../utils/classNames";

interface TabNavigationItem {
  title: string;
  content: ReactNode;
}

interface TabNavigationProps {
  items: TabNavigationItem[];
}

export const TabNavigation = ({ items }: TabNavigationProps) => {
  return (
    <Tab.Group>
      <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
        {items.map((item) => (
          <Tab
            key={item.title}
            className={({ selected }) =>
              classNames(
                "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                "ring-white/60 ring-offset-2 ring-offset-gray-600 focus:outline-none focus:ring-2",
                selected
                  ? "bg-white text-gray-900 shadow"
                  : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
              )
            }
          >
            {item.title}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels className="mt-2">
        {items.map((item) => (
          <Tab.Panel
            key={item.title}
            className={classNames(
              "rounded-xl bg-white p-3",
              "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
            )}
          >
            {item.content}
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};
