"use client";

import { Tab } from "@headlessui/react";
import { ExercisesView } from "../components/ExercisesView";
import { AddExercise } from "../components/AddExercise";
import { Exercise } from "@prisma/client";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const TabNavigation = ({ exercises }: { exercises?: Exercise[] }) => {
  return (
    <Tab.Group>
      <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
        <Tab
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
          Show Exercises
        </Tab>
        <Tab
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
          Add Exercises
        </Tab>
      </Tab.List>
      <Tab.Panels className="mt-2">
        <Tab.Panel
          className={classNames(
            "rounded-xl bg-white p-3",
            "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
          )}
        >
          <ExercisesView exercises={exercises} />
        </Tab.Panel>
        <Tab.Panel
          className={classNames(
            "rounded-xl bg-white p-3",
            "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
          )}
        >
          <AddExercise />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};
