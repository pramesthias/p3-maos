// MAS FACHRI

"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  console.log(error);
  return (
    <div className="mx-auto max-w-md text-center">
      <h2 className="font-serif text-blue-800 text-2xl font-bold sm:text-3xl m-10">
        Something went wrong!
      </h2>
      <button
        className="font-bold font-serif text-red-800"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
