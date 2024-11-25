import { createContext } from "react";

type BikeConfigContextType = {
  bikeConfig: {
    frameType: string;
    frameFinish: string;
    wheelType: string;
    rimColor: string;
    chainType: string;
  };
  totalPrice: number;
  updateConfig: (field: string, value: string) => void;
  handleReset: () => void;
  handleSubmit: (e: React.FormEvent) => void;
  isFormValid: boolean;
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
};

export const BikeConfigContext =
  createContext<BikeConfigContextType>(defaultContextValue);
