import React from "react";
import { useHome } from "./useHome";

export function Home() {
  const hook = useHome();
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
        {hook.animes.map(({ id, name, photo }) => (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "1.5rem",
              gap: "2rem",
              backgroundColor: "blue",
              borderRadius: "8px",
            }}
            key={id}
          >
            <h4>{name}</h4>

            <img src={photo} height={128} width={128} />
          </div>
        ))}
      </div>
    </div>
  );
}
