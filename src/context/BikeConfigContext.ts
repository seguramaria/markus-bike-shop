import { createContext } from "react";
import { BikeConfig, Payload } from "types";

type BikeConfigContextType = {
  bikeConfig: BikeConfig;
  totalPrice: number;
  updateConfig: (field: keyof BikeConfig, value: string) => void;
  handleReset: () => void;
  handleSubmit: () => void;
  isFormValid: boolean;
  orderDetails: Payload | null;
  loading: boolean;
  error: string | null;
};

const defaultContextValue: BikeConfigContextType = {
  bikeConfig: {
    frameType: "",
    frameFinish: "",
    wheelType: "",
    rimColor: "",
    chainType: "",
  },
  totalPrice: 0,
  updateConfig: () => {},
  handleReset: () => {},
  handleSubmit: () => {},
  isFormValid: false,
  orderDetails: {
    bikeConfig: {
      frameType: "",
      frameFinish: "",
      wheelType: "",
      rimColor: "",
      chainType: "",
    },
    totalPrice: 0,
  },
  loading: false,
  error: "",
};

export const BikeConfigContext =
  createContext<BikeConfigContextType>(defaultContextValue);
