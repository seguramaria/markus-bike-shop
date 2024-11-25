type Finish = {
  id: string;
  type: string;
  label: string;
  price: { [key: string]: number };
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
};

export type BikeData = {
  frames: Frame[];
  finishes: Finish[];
  wheels: Wheel[];
  rims: Rim[];
  chains: Chain[];
};
