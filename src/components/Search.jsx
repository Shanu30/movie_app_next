"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${searchValue}`);
  };
  return (
    <form
      className="flex justify-end gap-x-4 max-w-6xl m-auto pt-4 px-5"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="w-full lg:w-1/3 bg-transparent outline-none"
        placeholder="Search movie..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button>Search</button>
    </form>
  );
};

export default Search;
