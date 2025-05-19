"use client";
import React from "react";
import { useState } from "react";

export default function SearchBar({}) {
  const [input, setInput] = useState<string>("");

  return (
    <div className="w-full flex justify-center  py-4 flex-col  border-b border-base-content">
      <h1 className="ml-15 font-bold text-2xl">Hashtag</h1>
      <div className="w-full flex justify-center items-center py-14 flex-col gap-6">
        <input
          type="text"
          placeholder="Type here"
          className="input  p-4 w-3/4"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </div>
    </div>
  );
}
