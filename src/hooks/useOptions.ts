// src/hooks/useOptions.ts
import { useState } from "react";

const defaultOptions = {
  reality: "real",
  brutality: "light",
  detailed: false,
  population: false,
};

export const useOptions = () => {
  const [options, setOptions] = useState(defaultOptions);

  const handleOptionChange = (key: string, value: string | boolean) => {
    setOptions((prev) => ({ ...prev, [key]: value }));
  };

  return { options, handleOptionChange, setOptions };
};
