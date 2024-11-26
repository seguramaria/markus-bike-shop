type Finish = {
  variant: string;
  price: string;
  label: string;
};

type Wheel = {
  id: number;
  variant: string;
  price: string;
  label: string;
};

type Rim = {
  id: number;
  rim_color: string;
  label: string;
  price: string;
};

type Chain = {
  id: number;
  variant: string;
  price: string;
  label: string;
};

export type Frame = {
  id: number;
  variant: string;
  price: string;
  label: string;
  finishes: Finish[];
};

export type BikeFeatureType = "frames" | "wheels" | "rims" | "chains";

export type BikeFeatures = {
  frames: Frame[];
  finishes: Finish[];
  wheels: Wheel[];
  rims: Rim[];
  chains: Chain[];
};

export type BikeConfig = {
  frameType: string;
  frameFinish: string;
  wheelType: string;
  rimColor: string;
  chainType: string;
};

export type Payload = {
  bikeConfig: BikeConfig;
  totalPrice: number;
};
