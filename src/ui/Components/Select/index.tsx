import { Autocomplete, Box, TextField } from "@mui/material";
import React from "react";

interface ISelectProps {
  options: any[];
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
    <Box>
      <Autocomplete
        options={options}
        getOptionLabel={(option) => getOptionLabel(option)}
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
