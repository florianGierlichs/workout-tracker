import { getExercises } from "../actions/getExercises";
import { getExerciseSessions } from "../actions/getExerciseSessions";
import { AddExerciseSession } from "../components/AddExerciseSession";
import { ExerciseSessionsView } from "../components/ExerciseSessionsView";
import { TabNavigation } from "../components/TabNavigation";

export default async function ExerciseSessions() {
  const exercises = await getExercises();
  const exerciseSessions = await getExerciseSessions();

  if (!exercises || !exerciseSessions) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      <div className="w-full max-w-md px-2 py-4 sm:px-0">
        <TabNavigation
          items={[
            {
              title: "Show Exercises",
              content: (
                <ExerciseSessionsView
                  exercises={exercises}
                  exerciseSessions={exerciseSessions}
                />
              ),
            },
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
