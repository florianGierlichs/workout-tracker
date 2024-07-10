import { getExercises } from "../actions/getExercises";
import { AddExercise } from "../components/AddExercise";
import { ExercisesView } from "../components/ExercisesView";
import { TabNavigation } from "../components/TabNavigation";

export default async function Exercises() {
  const exercises = await getExercises();

  if (!exercises) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      <div className="w-full max-w-md px-2 py-4 sm:px-0">
        <TabNavigation
          items={[
            {
              title: "Show Exercises",
              content: <ExercisesView exercises={exercises} />,
            },
            { title: "Add Exercises", content: <AddExercise /> },
          ]}
        />
      </div>
    </div>
  );
}
