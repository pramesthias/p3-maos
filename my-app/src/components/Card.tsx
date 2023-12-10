import { Product } from "@/types";
import Link from "next/link";

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
          src={product.thumbnail}
          alt={product.name}
        />
      </div>
      <div className="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
        <div className="mb-2 flex">
          <p className="mr-3 text-sm font-semibold text-blue-800">
            {(
              product.price -
              (product.price * Math.floor(Math.random() * 51)) / 100
            ).toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
              minimumFractionDigits: 0,
            })}
          </p>

          <del className="text-xs text-gray-400">
            {product.price.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
              minimumFractionDigits: 0,
            })}
          </del>
        </div>
        <Link href={`/products/${product.slug}`}>
          <h3 className="mb-2 text-sm text-black-500 hover:text-blue-500 hover:underline cursor-pointer">
            {product.name.length > 30
              ? product.name.substring(0, 30) + "..."
              : product.name}
          </h3>
        </Link>
      </div>
      {/*  */}
    </div>
  );
}
