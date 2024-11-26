import { useBikeConfigurator } from "@hooks/useBikeConfigurator";
import { BikeConfigContext } from "./BikeConfigContext";

type BikeConfigProviderProps = {
  children: React.ReactNode;
};

export const BikeConfigProvider = ({ children }: BikeConfigProviderProps) => {
  const {
    bikeConfig,
    updateConfig,
    handleReset,
    handleSubmit,
    isFormValid,
    totalPrice,
    orderDetails,
  } = useBikeConfigurator();

  return (
    <BikeConfigContext.Provider
      value={{
        bikeConfig,
        updateConfig,
        handleReset,
        handleSubmit,
        isFormValid,
        totalPrice,
        orderDetails,
      }}
    >
      {children}
    </BikeConfigContext.Provider>
  );
};
