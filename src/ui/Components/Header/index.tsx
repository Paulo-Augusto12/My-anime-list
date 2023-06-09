import React from "react";

// Material Ui

import {
  Box,
  Button,
  Card,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";

//

// Hook

import { useHeader } from "./useHeader";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

//

interface IHeaderProps {
  animeQueryValue: string;
  setSearchBarAnimeQueryValue: (value: React.SetStateAction<string>) => void;
  handleSubmit: () => void;
  scrollTo: string;
}
export function Header({
  animeQueryValue,
  setSearchBarAnimeQueryValue,
  handleSubmit,
  scrollTo,
}: IHeaderProps) {
  const hook = useHeader();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: "3rem",
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
          gap: "3rem",
        }}
      >
        <Typography fontWeight={700} variant="h4">
          MyAnimeList
        </Typography>
        {hook.headerNavItems.map((element) => (
          <Link to={element.path}>
            <Button
              sx={{
                color:
                  element.id === hook.selectedElement ? "black" : "#495057",
                border: "none",
                fontWeight:
                  element.id === hook.selectedElement ? "bold" : "regular",
                outline: "none",
                textTransform: "none",
              }}
              onClick={() => {
                hook.setSelectedElement(element.id);
              }}
              key={element.id}
            >
              <Typography key={element.id}>{element.label}</Typography>
            </Button>
          </Link>
        ))}
      </Box>
      <Box sx={{ width: "25%" }}>
        <TextField
          fullWidth
          sx={{ borderRadius: 115 }}
          InputProps={{
            style: { borderRadius: "50px" },
            endAdornment: (
              <InputAdornment position="end">
                <a href={scrollTo}>
                  <IconButton
                    onClick={() => {
                      handleSubmit();
                    }}
                  >
                    <MagnifyingGlass size={32} color="#495057" />
                  </IconButton>
                </a>
              </InputAdornment>
            ),
          }}
          onChange={(e) => {
            setSearchBarAnimeQueryValue(e.target.value);
          }}
          label="Search a anime"
          value={animeQueryValue}
        />
      </Box>
    </Box>
  );
}
