"use client";

import { useFormState } from "react-dom";
import { addExercise } from "../actions/addExercise";
import { useEffect, useRef, useState } from "react";
import { AlertMessage } from "./AlertMessage";

function isErrorState(
  state:
    | {
        id: string;
        name: string;
        muscle: string;
        equipment: string;
      }
    | {
        message: string;
      }
): state is { message: string } {
  return state.hasOwnProperty("message");
}

export const AddExercise = () => {
  const [state, formAction] = useFormState(addExercise, null);
  const [showAlert, setShowAlert] = useState(false);
  const ref = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state) {
      if (!isErrorState(state)) {
        ref.current?.reset();
      }
      setShowAlert(true);
      const timeout = setTimeout(() => {
        setShowAlert(false);
        clearTimeout(timeout);
      }, 3000);
    }
  }, [state]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-32 lg:px-8">
      <h2>Add Exercise</h2>
      <form action={formAction}>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Exercise Name
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="name"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div className="sm:col-span-4">
            <label
              htmlFor="muscle"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Muscle
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="text"
                  id="muscle"
                  name="muscle"
                  placeholder="muscle"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>{" "}
            </div>{" "}
          </div>

          <div className="sm:col-span-4">
            <label
              htmlFor="equipment"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Equipment
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="text"
                  id="equipment"
                  name="equipment"
                  placeholder="equipment"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Add Exercise
          </button>
        </div>
      </form>
      {showAlert && state && (
        <AlertMessage
          type={isErrorState(state) ? "error" : "success"}
          message={
            isErrorState(state) ? state.message : "New exercise session create"
          }
        />
      )}
    </div>
  );
};
