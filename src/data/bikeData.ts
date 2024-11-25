import { BikeData } from "types";

export const bikeData: BikeData = {
  frames: [
    {
      id: "1Full",
      type: "full-suspension",
      label: "Full suspension",
      price: 130,
      compatibleWheels: ["mountain", "fat"],
      finishPrices: {
        matte: 30,
        shiny: 50,
      },
    },
    {
      id: "2Diam",
      type: "diamond",
      label: "Diamond",
      price: 110,
      compatibleWheels: ["road", "mountain"],
      finishPrices: {
        matte: 20,
        shiny: 35,
      },
    },
    {
      id: "3Step",
      type: "step-through",
      label: "Step through",
      price: 100,
      compatibleWheels: ["road"],
      finishPrices: {
        matte: 10,
        shiny: 30,
      },
    },
  ],
  finishes: [
    {
      id: "1Matt",
      type: "matte",
      label: "Matte",
    },
    {
      id: "2Shin",
      type: "shiny",
      label: "Shiny",
    },
  ],
  wheels: [
    {
      id: "1Road",
      type: "road",
      label: "Road wheels",
      price: 80,
      compatibleRims: ["red", "black", "blue"],
    },
    {
      id: "2Mount",
      type: "mountain",
      label: "Mountain wheels",
      price: 100,
      compatibleRims: ["black", "blue"],
    },
    {
      id: "3Fat",
      type: "fat",
      label: "Fat bike wheels",
      price: 120,
      compatibleRims: ["black", "blue"],
    },
  ],
  rims: [
    {
      id: "1Red",
      type: "red",
      label: "Red",
      price: 15,
    },
    {
      id: "2Black",
      type: "black",
      label: "Black",
      price: 10,
    },
    {
      id: "3Blue",
      type: "blue",
      label: "Blue",
      price: 20,
    },
  ],
  chains: [
    {
      id: "1Single",
      type: "single-speed",
      label: "Single-speed chain",
      price: 43,
    },
    {
      id: "2Eight",
      type: "8-speed",
      label: "8-speed chain",
      price: 60,
    },
  ],
};
