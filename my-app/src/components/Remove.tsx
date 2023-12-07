export default function Remove() {
  return (
    <div>
      <button className="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-white">
        <div className="flex w-full items-center justify-center bg-red-700 text-xs uppercase transition group-hover:bg-red-500 group-hover:text-white">
          Remove
        </div>
        {/* <div className="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-emerald-500 group-hover:text-white">
                  +
                </div> */}
      </button>
    </div>
  );
}