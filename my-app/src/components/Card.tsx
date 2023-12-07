import { Product } from "@/types"; // mas fachri
import Link from "next/link";

// mas fachri
type Props = {
  product: Product;
};

export default function Card({ product }: Props) {
  // export default function Card({ product }: { product: Product }) { mas iam
  return (
    <div>
      {/* IMPORT */}
      <div className="aspect-square overflow-hidden">
        <img
          className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
          src="/images/3.png"
          alt={product.name}
        />
      </div>
      <div className="absolute top-0 m-2">
        <Link
          href={`/products/${product.slug}`} // mas fachri
          className="rounded-md  bg-blue-800 p-1 text-[10px] font-bold uppercase tracking-wide text-white lg:py-2 lg:px-2"
        >
          detail
        </Link>
      </div>
      <div className="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
        <div className="mb-2 flex">
          <p className="mr-3 text-sm font-semibold">$79.00</p>
          <del className="text-xs text-gray-400"> $99.00 </del>
        </div>
        <h3 className="mb-2 text-sm text-gray-400">Fresh Apples</h3>
      </div>
      {/*  */}
    </div>
  );
}
