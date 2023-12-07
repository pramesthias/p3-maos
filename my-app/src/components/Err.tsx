"use client";

import { useSearchParams } from "next/navigation";

const ErrMessage = () => {
  const searchParams = useSearchParams();
  const errorMessage = searchParams.get("error");

  return (
    <>
      {errorMessage && (
        <p className="font-bold text-red-500 text-center">{errorMessage}</p>
      )}
    </>
  );
};

export default ErrMessage;
