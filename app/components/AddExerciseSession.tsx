import { addExerciseSession } from "../actions/addExerciseSession";
import { SelectExercises } from "./SelectExercises";
import { Exercise } from "@prisma/client";
// 5 - 7;
// 8 - 11;
// 12 - 15;
// 16 - 20;

export const AddExerciseSession = ({
  exercises,
}: {
  exercises?: Exercise[];
}) => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-32 lg:px-8">
      <h2>Add ExerciseSession</h2>
      <form action={addExerciseSession}>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          {/*  */}
          {/* Exercise */}
          {/* */}
          <div className="sm:col-span-4">
            <label
              htmlFor="exerciseId"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Exercise
            </label>
            <div className="mt-2">
              <div className="rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <SelectExercises exercises={exercises} />
              </div>
            </div>
          </div>

          {/*  */}
          {/* sets */}
          {/* */}
          <div className="sm:col-span-4">
            <label
              htmlFor="sets"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Sets
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="number"
                  id="sets"
                  name="sets"
                  placeholder="sets"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>{" "}
            </div>{" "}
          </div>

          {/*  */}
          {/* reps */}
          {/* */}
          <div className="sm:col-span-4">
            <label
              htmlFor="reps"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Reps
              {/* TODO change to dropdown with rep ranges */}
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="text"
                  id="reps"
                  name="reps"
                  placeholder="reps"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          {/*  */}
          {/* weight */}
          {/* */}
          <div className="sm:col-span-4">
            <label
              htmlFor="weight"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Weight
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="number"
                  id="weight"
                  name="weight"
                  placeholder="weight"
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
    </div>
  );
};
