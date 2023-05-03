import React from "react";

// Material Ui

import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";

//

// Hook

import { useHeader } from "./useHeader";
import { MagnifyingGlass } from "@phosphor-icons/react";

//

export function Header() {
  const hook = useHeader();
  return (
    <Box
      sx={{
        padding: "2rem",
        display: "flex",
        flexDirection: "row",
        gap: "5rem",
        alignItems: "center",
        marginBottom: "2rem",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "5rem",
        }}
      >
        <Typography fontWeight={700} variant="h4">
          My Anime List
        </Typography>
        {hook.headerNavItems.map((element) => (
          <Button
            sx={{
              color: element.id === hook.selectedElement ? "black" : "#495057",
              border: "none",
              fontWeight:
                element.id === hook.selectedElement ? "bold" : "regular",
              outline: "none",
              textTransform: "none",
            }}
            onClick={() => {
              hook.setSelectedElement(element.id);
            }}
          >
            <Typography key={element.id}>{element.label}</Typography>
          </Button>
        ))}
      </Box>
      <Box sx={{ width: "35%" }}>
        <TextField
          fullWidth
          sx={{ borderRadius: 115 }}
          InputProps={{
            style: { borderRadius: "35px" },
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <MagnifyingGlass size={32} color="#495057" />
                </IconButton>
              </InputAdornment>
            ),
          }}
          label="Search a anime"
        />
      </Box>
    </Box>
  );
}
