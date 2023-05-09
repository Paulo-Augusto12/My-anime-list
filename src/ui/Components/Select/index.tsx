import { Autocomplete, Box, TextField } from "@mui/material";
import React from "react";

interface ISelectProps {
  options: [];
  selectLabel: string;
  onSelectChange: (newValue: any) => void;
  getOptionLabel: (option: any) => string;
}
export function Select({
  options,
  selectLabel,
  onSelectChange,
  getOptionLabel,
}: ISelectProps) {
  return (
    <Box sx={{ width: "100%" }}>
      <Autocomplete
        options={options}
        getOptionLabel={(option) => getOptionLabel(option)}
        renderInput={(params) => (
          <TextField
            {...params}
            label={selectLabel}
            inputProps={{
              style: {
                width: "100%",
              },
            }}
          />
        )}
        onChange={(e, newValue) => {
          if (newValue) {
            onSelectChange(newValue);
          }
        }}
        sx={{ width: "100%", backgroundColor: "#d7d7d7", borderRadius: "32px", outline: 'none' }}
        size="medium"
      />
    </Box>
  );
}
