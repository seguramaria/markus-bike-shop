import { useState, useMemo } from "react";
import { bikeData } from "@data/bikeData";

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

  const totalPrice = useMemo(() => {
    const framePrice =
      bikeData.frames.find((frame) => frame.type === bikeConfig.frameType)
        ?.price || 0;
    const finishPrice =
      bikeData.finishes.find((finish) => finish.type === bikeConfig.frameFinish)
        ?.price[bikeConfig.frameType] || 0;
    const wheelPrice =
      bikeData.wheels.find((wheel) => wheel.type === bikeConfig.wheelType)
        ?.price || 0;
    const rimPrice =
      bikeData.rims.find((rim) => rim.type === bikeConfig.rimColor)?.price || 0;
    const chainPrice =
      bikeData.chains.find((chain) => chain.type === bikeConfig.chainType)
        ?.price || 0;

    return framePrice + finishPrice + wheelPrice + rimPrice + chainPrice;
  }, [bikeConfig]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", bikeConfig, totalPrice);
  };

  const isFormValid = Object.values(bikeConfig).every((value) => value !== "");

  return {
    bikeConfig,
    totalPrice,
    updateConfig,
    handleReset,
    handleSubmit,
    isFormValid,
  };
};
