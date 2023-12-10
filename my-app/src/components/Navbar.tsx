"use client"; // => onClick

import Search from "./Search";
import Link from "next/link";
import LogoutAction from "@/actions/logout"; // import logout.tsx here

export default function Navbar({ loginState }: { loginState: boolean }) {
  return (
    <div className="navbar bg-base-100 flex shadow-xl">
      <div className="navbar-start flex-grow flex justify-center">
        <Link href="/">
          <img
            className="ms-10 "
            src="/images/logo.png"
            alt="Maos Logo"
            width={200}
            height={200}
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex flex-grow items-center">
        <ul className="menu menu-horizontal px-1 gap-15 ml-[-300px]">
          <li className="flex items-center">
            <Link
              href="/products"
              className="font-semibold text-lg text-blue-900 mt-2"
            >
              Semua Produk
            </Link>
          </li>

          {/* MASUK */}
          {!loginState && (
            <li className="flex items-center">
              <Link
                href="/login"
                className="font-semibold text-lg text-blue-900 mt-2"
              >
                Masuk
              </Link>
            </li>
          )}

          {/* NOT IN */}
          {loginState && (
            <li>
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button">
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src="/images/user.png"
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 absolute top-full right-0"
                >
                  <li className="flex items-center">
                    <Link href="/wishlist">Wishlist Saya</Link>
                  </li>
                  <li className="flex items-center">
                    {/* LOGOUT BUTTON */}
                    <button
                      onClick={() => LogoutAction()}
                      className="font-semibold text-3lg text-red-500"
                    >
                      Keluar
                    </button>
                  </li>
                </ul>
              </div>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
