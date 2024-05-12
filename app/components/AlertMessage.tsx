import { classNames } from "../utils/classNames";

export const AlertMessage = ({
  type,
  message,
}: {
  type: "error" | "success";
  message: string;
}) => {
  return (
    <div
      className={classNames(
        type === "error" ? "bg-red-100" : "bg-green-100",
        "rounded-md p-3 flex"
      )}
    >
      <svg
        className={classNames(
          type === "error" ? "text-red-600" : "text-green-600",
          "stroke-2 stroke-current h-8 w-8 mr-2 flex-shrink-0"
        )}
        viewBox="0 0 24 24"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M0 0h24v24H0z" stroke="none" />
        <circle cx="12" cy="12" r="9" />
        <path d="M9 12l2 2 4-4" />
      </svg>

      <div
        className={classNames(
          type === "error" ? "text-red-700" : "text-green-700"
        )}
      >
        {message}
      </div>
    </div>
  );
};
