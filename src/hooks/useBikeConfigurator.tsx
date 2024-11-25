import { useState } from "react";
import { bikeData } from "../data/bikeData";

export const useBikeConfigurator = () => {
  const [bikeConfig, setBikeConfig] = useState({
    frameType: "",
    frameFinish: "",
    wheelType: "",
    rimColor: "",
    chainType: "",
  });

  const updateConfig = (field: string, value: string) => {
    setBikeConfig((prev) => ({ ...prev, [field]: value }));
  };

  const handleReset = () => {
    setBikeConfig({
      frameType: "",
      frameFinish: "",
      wheelType: "",
      rimColor: "",
      chainType: "",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", bikeConfig);
  };

  const isFormValid = Object.values(bikeConfig).every((value) => value !== "");

  return {
    bikeConfig,
    updateConfig,
    handleReset,
    handleSubmit,
    isFormValid,
    bikeData,
  };
};
