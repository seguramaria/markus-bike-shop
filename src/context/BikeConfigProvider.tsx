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
    loading,
    error,
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
        loading,
        error,
      }}
    >
      {children}
    </BikeConfigContext.Provider>
  );
};
