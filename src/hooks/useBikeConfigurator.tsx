import { useState, useMemo } from "react";
import { bikeData } from "@data/bikeData";
import { BikeConfig, Payload } from "types";

export const useBikeConfigurator = () => {
  const [orderDetails, setOrderDetails] = useState<Payload | null>(null);
  const [bikeConfig, setBikeConfig] = useState<BikeConfig>({
    frameType: "",
    frameFinish: "",
    wheelType: "",
    rimColor: "",
    chainType: "",
  });

  const updateConfig = (field: keyof BikeConfig, value: string) => {
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

  const getFramePrice = (frameType: string): number => {
    const frame = bikeData.features.frames.find((f) => f.variant === frameType);
    return frame ? parseFloat(frame.price) : 0;
  };

  const getFinishPrice = (frameType: string, finishVariant: string): number => {
    const frame = bikeData.features.frames.find((f) => f.variant === frameType);
    const finish = frame?.finishes.find((f) => f.variant === finishVariant);
    return finish ? parseFloat(finish.price) : 0;
  };

  const getWheelPrice = (wheelType: string): number => {
    const wheel = bikeData.features.wheels.find((f) => f.variant === wheelType);
    return wheel ? parseFloat(wheel.price) : 0;
  };

  const getRimPrice = (rimColor: string): number => {
    const rim = bikeData.features.rims.find((r) => r.rim_color === rimColor);
    return rim ? parseFloat(rim.price) : 0;
  };

  const getChainPrice = (chainType: string): number => {
    const chain = bikeData.features.chains.find((f) => f.variant === chainType);
    return chain ? parseFloat(chain.price) : 0;
  };

  const totalPrice = useMemo(() => {
    const framePrice = getFramePrice(bikeConfig.frameType);
    const finishPrice = getFinishPrice(
      bikeConfig.frameType,
      bikeConfig.frameFinish
    );
    const wheelPrice = getWheelPrice(bikeConfig.wheelType);
    const rimPrice = getRimPrice(bikeConfig.rimColor);
    const chainPrice = getChainPrice(bikeConfig.chainType);

    return framePrice + finishPrice + wheelPrice + rimPrice + chainPrice;
  }, [bikeConfig]);

  const handleSubmit = () => {
    const payload: Payload = {
      bikeConfig,
      totalPrice: totalPrice,
    };
    setOrderDetails(payload);
  };

  const isFormValid = Object.values(bikeConfig).every((value) => value !== "");

  return {
    bikeConfig,
    totalPrice,
    updateConfig,
    handleReset,
    handleSubmit,
    isFormValid,
    orderDetails,
  };
};
