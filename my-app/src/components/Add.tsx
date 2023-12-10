"use client";

export default function Add({ id }: { id: string | undefined }) {
  const handleAdd = async () => {
    // const baseUrl = process.env.THE_URL || "http://localhost:3000";
    const url = `${process.env.NEXT_PUBLIC_THE_URL}/api/wishlist`;
    const data = await fetch(url, {
      cache: "no-store",
      method: "POST",
      body: JSON.stringify({
        productId: id,
      }),
    });

    if (data.ok) {
      alert("Added to wishlist successfully!");
    } else {
      alert("Failed to add to wishlist!");
    }

    return await data.json();
  };

  return (
    <div>
      <button
        onClick={() => handleAdd()}
        className="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-white"
      >
        <div className="flex w-full items-center justify-center bg-blue-800 text-xs uppercase transition group-hover:bg-blue-500 group-hover:text-white">
          Add to Wishlist
        </div>
      </button>
    </div>
  );
}
