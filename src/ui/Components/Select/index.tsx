import { Autocomplete, Box, TextField } from "@mui/material";
import React from "react";

interface ISelectProps {
  options: any[];
  selectLabel: string;
  onSelectChange: (newValue: any) => void;
}
export function Select({ options, selectLabel, onSelectChange }: ISelectProps) {
  return (
    <Box>
      <Autocomplete
        options={options}
        renderInput={(params) => <TextField {...params} label={selectLabel} />}
        onChange={(e, newValue) => {
          if (newValue) {
            onSelectChange(newValue);
          }
        }}
      />
    </Box>
  );
}
