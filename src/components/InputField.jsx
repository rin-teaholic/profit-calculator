import { InputAdornment, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const InputField = ({ input, state, onChange }) => {


  return (
    <Box width={{ xs: "100%", lg: "40%" }} maxWidth={280} p={{ xs: 2, md: 3 }}>
      <TextField
        fullWidth
        variant="standard"
        type="number"
        name={input.name}
        required={input.required}
        id={input.id}
        label={input.label}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">{input.endAdornment}</InputAdornment>
          ),
        }}
        value={state}
        onChange={onChange}
      />
    </Box>
  );
};

export default InputField;
