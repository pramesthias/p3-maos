"use client";
import { useEffect, useState } from "react";

export default function Search({
  onSearch,
}: {
  onSearch: (searchTerm: string) => void;
}) {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    onSearch(searchTerm);
  }, [searchTerm, onSearch]);

  return (
    <div className="form-control">
      <input
        type="text"
        placeholder="Cari Judul Buku"
        className="input input-bordered"
        value={searchTerm} //
        onChange={(e) => setSearchTerm(e.target.value)} //
      />
    </div>
  );
}
