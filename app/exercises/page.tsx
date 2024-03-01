import { getExercises } from "../actions/getExercises";
import { TabNavigation } from "./TabNavigation";

export default async function Exercises() {
  const exercises = await getExercises();

  return (
    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      <div className="w-full max-w-md px-2 py-4 sm:px-0">
        <TabNavigation exercises={exercises} />
      </div>
    </div>
  );
}
