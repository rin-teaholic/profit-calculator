import { useEffect, useState } from 'react'

const useInput = () => {
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
  const [dbcInput, setDbcInput] = useState(inputInitialState)

  const handleChange = (event) => {
    const { name, value } = event.target
    setInput({ ...input, [name]: parseFloat(value) });
  };

  const clearInputValue = () => {
    setInput(...inputInitialState)
    setResult({ ...resultInitialState })
  }

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDbcInput({ ...input })
    }, 500)

    return () => clearTimeout(timerId);
  }, [input]);

  useEffect(() => {
    const { sellingPrice, cost, postage, commission } = input
    if (sellingPrice && cost && commission) {
      let profit =
        sellingPrice - (sellingPrice * commission) / 100 - cost - postage;
      let profitRatio = (sellingPrice - profit) / 100;
      setResult({ profit, profitRatio })
    } else {
      setResult({ ...resultInitialState })
    }
  }, [dbcInput])

  return [input, result, handleChange, clearInputValue]
}

export default useInput
