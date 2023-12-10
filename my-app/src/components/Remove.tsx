export default function Remove({
  id,
  onDelete,
}: {
  id: string;
  onDelete: () => void;
}) {
  const handleDelete = async () => {
    // const baseUrl = process.env.THE_URL || "http://localhost:3000";
    const url = `${process.env.NEXT_PUBLIC_THE_URL}/api/wishlist`;
    const data = await fetch(url, {
      cache: "no-store",
      method: "DELETE",
      body: JSON.stringify({
        productId: id,
      }),
    });

    onDelete();
  };

  return (
    <div>
      <button
        onClick={handleDelete}
        className="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-white"
      >
        <div className="flex w-full items-center justify-center bg-red-700 text-xs uppercase transition group-hover:bg-red-500 group-hover:text-white">
          Remove
        </div>
      </button>
    </div>
  );
}
