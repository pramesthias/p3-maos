"use-client";
import { Product } from "@/types";

// =>

export default function Add({ id }: { id: Product._id }) {
  return (
    <div>
      <button
        // mas iam
        // onClick=(() = {
        //   const modalElement = document.getElementById("id") as HTMLDialogElement | null

        // if(modalElement){
        //   modalElement.showModal()
        // }

        // })
        className="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-white"
      >
        <div className="flex w-full items-center justify-center bg-blue-800 text-xs uppercase transition group-hover:bg-blue-500 group-hover:text-white">
          Add to Wishlist
        </div>
      </button>
    </div>
  );
}
