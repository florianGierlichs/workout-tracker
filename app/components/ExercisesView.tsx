import { Exercise } from "@prisma/client";

export const ExercisesView = ({ exercises }: { exercises?: Exercise[] }) => {
  return (
    <div>
      {exercises?.map((exercise) => (
        <div key={exercise.id} className="p-4 max-w-sm">
          <div className="flex rounded-lg h-full  bg-gray-600 p-4 flex-col">
            <div className="flex items-center mb-3">
              <h2 className="text-white dark:text-white text-lg font-medium">
                {exercise.name}
              </h2>
            </div>
            <div className="flex flex-col justify-between flex-grow">
              <p className="leading-relaxed text-base text-white dark:text-gray-300">
                <span className="inline-block w-24">muscle:</span>
                {exercise.muscle}
              </p>
              <p className="leading-relaxed text-base text-white dark:text-gray-300">
                <span className="inline-block w-24">equipment:</span>
                {exercise.equipment}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
