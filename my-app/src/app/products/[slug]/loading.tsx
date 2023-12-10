// mas fachri

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col gap-4 w-96 h-96 items-center justify-center">
        <div className="skeleton h-48 w-full"></div>
        <div className="skeleton h-10 w-36"></div>
        <div className="skeleton h-10 w-full"></div>
        <div className="skeleton h-10 w-full"></div>
      </div>
    </div>
  );
}
