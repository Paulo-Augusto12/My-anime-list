import React, { useState } from "react";

export function useHeader() {
  const [selectedElement, setSelectedElement] = useState(1);
  const headerNavItems = [
    {
      label: "Anime",
      id: 1,
      onClick: () => {},
    },
    {
      label: "Manga",
      id: 2,
      onClick: () => {},
    },
    {
      label: "Random Anime",
      id: 3,
      onClick: () => {},
    },
    {
      label: "Top Anime",
      id: 4,
      onClick: () => {},
    },
  ];

  return {
    headerNavItems,
    selectedElement,
    setSelectedElement,
  };
}
