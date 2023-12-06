import Image from "next/image";

export default function Test() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <Image
          className="ms-10"
          src="/images/logo.png"
          alt="Maos Logo"
          width={120}
          height={120}
        />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="font-semibold text-lg text-blue-900">Kategori</a>
          </li>
          <li>
            <div className="form-control">
              <input
                type="text"
                placeholder="Cari Produk, Judul Buku, Penulis"
                className="input input-bordered"
              />
            </div>
          </li>

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
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="font-semibold text-3lg text-blue-950">
                  Wishlist Saya
                </a>
              </li>
              <li>
                <a className="font-semibold text-3lg text-red-500">Keluar</a>
              </li>
            </ul>
          </div>
        </ul>
      </div>
    </div>
  );
}
