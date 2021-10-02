import { Button, Grid, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import inputConfig from "./inputConfig";
import Result from "./Result";
import InputField from "./InputField";

const Form = () => {

  // Define Initial Value of Input State
  const inputInitialState = {
    sellingPrice: "",
    cost: "",
    postage: "",
    commission: "",
  }

  const resultInitialState = {
    profit: 0,
    profitRatio: 0,
  }

  // Define State
  const [input, setInput] = useState(inputInitialState);
  const [result, setResult] = useState(resultInitialState);

  // Define Inputs' onChange Event Handler
  const handleChange = (event) => {
    const {name, value} = event.target
    setInput({ ...input, [name]: value });
    console.log(input, result);
  };


  useEffect(() => {
    const timerId = setTimeout(() => {
      const {sellingPrice, cost, postage, commission} = input
      if (sellingPrice && cost && commission) {
        let profit =
          sellingPrice - (sellingPrice * commission) / 100 - cost - postage;
        let profitRatio = (sellingPrice - profit) / 100;
        setResult({profit, profitRatio})
      } else {
        setResult({...resultInitialState})
      }
    }, 500);

    return () => clearTimeout(timerId);
    
  }, [input])

  // Define Button's onClick Event Handler
  const onResetButtonClick = () => {
    setInput({ ...inputInitialState });
    setResult({...resultInitialState})
  };

  return (
    <Grid container spacing={{ xs: 2, sm: 4 }} justifyContent="center">
      <Grid item mt={2} xs={12} lg={7}>
        <Paper
          component="form"
          autoComplete="off"
          sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
        >
          <InputField
            state={input.sellingPrice}
            input={inputConfig.sellingPrice}
            onChange={handleChange}
          />
          <InputField
            state={input.cost}
            input={inputConfig.cost}
            onChange={handleChange}
          />
          <InputField
            state={input.postage}
            input={inputConfig.postage}
            onChange={handleChange}
          />
          <InputField
            state={input.commission}
            input={inputConfig.commission}
            onChange={handleChange}
          />
        </Paper>
      </Grid>
      <Grid item xs={12} lg={7}>
        {/* Show Results of Calculation */}
        <Result profit={result.profit} profitRatio={result.profitRatio} />
      </Grid>
      <Grid item xs={12} lg={7}>
        {/* Reset Button to Clear All Values */}
        <Button
          fullWidth
          color="secondary"
          variant="contained"
          onClick={onResetButtonClick}
        >
          リセット
        </Button>
      </Grid>
    </Grid>
  );
};

export default Form;
