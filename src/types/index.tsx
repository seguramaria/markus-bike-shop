type Finish = {
  id: string;
  type: string;
  label: string;
};

type Wheel = {
  id: string;
  type: string;
  label: string;
  price: number;
  compatibleRims: string[];
};

type Rim = {
  id: string;
  type: string;
  label: string;
  price: number;
};

type Chain = {
  id: string;
  type: string;
  label: string;
  price: number;
};

type Frame = {
  id: string;
  type: string;
  label: string;
  price: number;
  compatibleWheels: string[];
  finishPrices: {
    [key: string]: number;
  };
};

export type BikeData = {
  frames: Frame[];
  finishes: Finish[];
  wheels: Wheel[];
  rims: Rim[];
  chains: Chain[];
};
