import React, { useState } from "react";

export function useAnime() {
  const [query, setQuery] = useState("");

  return {
    query,
    setQuery,
  };
}
