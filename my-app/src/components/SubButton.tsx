"use client";

import { useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      aria-disabled={pending}
      className="flex w-full justify-center rounded-md bg-gray-300 px-3 py-1.5 text-sm 
    leading-6 text-blue-900 shadow-sm focus-visible:outline focus-visible:outline-offset-2 
    focus-visible:outline-indigo-600 hover:bg-blue-300"
    >
      {pending ? (
        <>
          Submit
          <span className="ml-3 loading loading-spinner text-primary"></span>
        </>
      ) : (
        "Submit"
      )}
    </button>
  );
}
