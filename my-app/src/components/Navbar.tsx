import Image from "next/image";
import Search from "./Search";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 flex shadow-xl">
      <div className="navbar-start flex-grow flex justify-center">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Kategori</a>
            </li>
            <li>
              <a>Wishlist Saya</a>
            </li>
            <li>
              <a>Keluar</a>
            </li>
          </ul>
        </div>
        {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
        <Image
          className="ms-10 "
          src="/images/logo.png"
          alt="Maos Logo"
          width={200}
          height={200}
        />
      </div>
      <div className="navbar-center hidden lg:flex flex-grow items-center">
        <ul className="menu menu-horizontal px-1 gap-15 ml-[-300px]">
          <li className="flex items-center">
            <a className="font-semibold text-lg text-blue-900 mt-2">Kategori</a>
          </li>
          <li>
            {/* <div className="form-control">
              <input
                type="text"
                placeholder="Cari Produk, Judul Buku, Penulis"
                className="input input-bordered"
              />
            </div> */}
            <Search />
          </li>
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
                  <a>Wishlist Saya</a>
                </li>
                <li className="flex items-center">
                  <a className="font-semibold text-3lg text-red-500">Keluar</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
