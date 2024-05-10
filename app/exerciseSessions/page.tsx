import { getExercises } from "../actions/getExercises";
import { AddExerciseSession } from "../components/AddExerciseSession";
import { TabNavigation } from "../components/TabNavigation";

export default async function ExerciseSessions() {
  const exercises = await getExercises();

  return (
    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      <div className="w-full max-w-md px-2 py-4 sm:px-0">
        <TabNavigation
          items={[
            {
              title: "Add ExerciseSessions",
              content: <AddExerciseSession exercises={exercises} />,
            },
          ]}
        />
      </div>
    </div>
  );
}
