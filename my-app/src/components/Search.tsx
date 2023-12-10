"use client";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export default function Search({
  search,
  setSearch,
}: {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}) {
  const handleSearch = async (e: any) => {
    setSearch(e.target.value);
    console.log(search);
  };

  return (
    <div className="form-control">
      <input
        type="text"
        placeholder="Cari Judul Buku"
        className="input input-bordered mb-8"
        value={search} //
        onChange={handleSearch} //
      />
    </div>
  );
}
