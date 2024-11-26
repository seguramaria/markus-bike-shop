import { useState, useMemo, useEffect } from "react";
import { BikeConfig, BikeFeatures, Payload } from "types";
import { bikeData } from "@data/bikeData";

export const useBikeConfigurator = () => {
  const [bikeFeaturesData, setBikeFeaturesData] = useState<BikeFeatures | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [orderDetails, setOrderDetails] = useState<Payload | null>(null);
  const [bikeConfig, setBikeConfig] = useState<BikeConfig>({
    frameType: "",
    frameFinish: "",
    wheelType: "",
    rimColor: "",
    chainType: "",
  });

  // Set useMockData to true to use mock data for previewing the bike configurator.
  // If you want to test the backend, make sure to run the Markus Bike Shop API project
  // and set useMockData to false to fetch data from the live API.
  const useMockData = true;

  useEffect(() => {
    const fetchBikeData = async () => {
      try {
        if (useMockData) {
          setBikeFeaturesData(bikeData.features);
          setLoading(false);
          return;
        }

        const response = await fetch("http://localhost:3000/bike_features");
        if (!response.ok) {
          throw new Error("Error fetching");
        }
        const data = await response.json();
        setBikeFeaturesData(data.features);
      } catch {
        setError("Error fetching datAa");
      } finally {
        setLoading(false);
      }
    };

    fetchBikeData();
  }, [useMockData]);

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
    const frame = bikeFeaturesData?.frames.find((f) => f.variant === frameType);
    return frame ? parseFloat(frame.price) : 0;
  };

  const getFinishPrice = (frameType: string, finishVariant: string): number => {
    const frame = bikeFeaturesData?.frames.find((f) => f.variant === frameType);
    const finish = frame?.finishes.find((f) => f.variant === finishVariant);
    return finish ? parseFloat(finish.price) : 0;
  };

  const getWheelPrice = (wheelType: string): number => {
    const wheel = bikeFeaturesData?.wheels.find((f) => f.variant === wheelType);
    return wheel ? parseFloat(wheel.price) : 0;
  };

  const getRimPrice = (rimColor: string): number => {
    const rim = bikeFeaturesData?.rims.find((r) => r.rim_color === rimColor);
    return rim ? parseFloat(rim.price) : 0;
  };

  const getChainPrice = (chainType: string): number => {
    const chain = bikeFeaturesData?.chains.find((f) => f.variant === chainType);
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
    loading,
    error,
  };
};
