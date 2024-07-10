import { Exercise, ExerciseSession } from "@prisma/client";

export const ExerciseSessionsView = ({
  exerciseSessions,
  exercises,
}: {
  exerciseSessions: ExerciseSession[];
  exercises: Exercise[];
}) => {
  return (
    <div>
      {exerciseSessions.map((exerciseSession) => (
        <div key={exerciseSession.id} className="p-4 max-w-sm">
          <div className="flex rounded-lg h-full  bg-gray-600 p-4 flex-col">
            <div className="flex items-center mb-3">
              <h2 className="text-white dark:text-white text-lg font-medium">
                {
                  exercises.find(
                    (exercise) => exercise.id === exerciseSession.exerciseId
                  )?.name
                }
              </h2>
            </div>
            <div className="flex flex-col justify-between flex-grow">
              <p className="leading-relaxed text-base text-white dark:text-gray-300">
                <span className="inline-block w-24">date:</span>
                {exerciseSession.date.toLocaleDateString("de-DE", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })}
              </p>
              <p className="leading-relaxed text-base text-white dark:text-gray-300">
                <span className="inline-block w-24">sets:</span>
                {exerciseSession.sets}
              </p>
              <p className="leading-relaxed text-base text-white dark:text-gray-300">
                <span className="inline-block w-24">reps:</span>
                {exerciseSession.reps}
              </p>
              <p className="leading-relaxed text-base text-white dark:text-gray-300">
                <span className="inline-block w-24">weight:</span>
                {exerciseSession.weight}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
