import { bikeData } from "@data/bikeData";

export const getFrameId = (frameType: string) => {
  const frame = bikeData.features.frames.find((f) => f.variant === frameType);
  return frame ? frame.id : null;
};

export const getWheelId = (wheelType: string) => {
  const wheel = bikeData.features.wheels.find((w) => w.variant === wheelType);
  return wheel ? wheel.id : null;
};

export const isWheelCompatible = (wheelId: number, frameType: string) => {
  const frameId = getFrameId(frameType);
  return !bikeData.incompatibilities.some(
    (incompatibility) =>
      incompatibility.item1_type === "Frame" &&
      incompatibility.item2_type === "Wheel" &&
      incompatibility.item1_id === frameId &&
      incompatibility.item2_id === wheelId
  );
};

export const isRimCompatible = (rimId: number, wheelType: string) => {
  const wheelId = getWheelId(wheelType);
  return !bikeData.incompatibilities.some(
    (incompatibility) =>
      incompatibility.item1_type === "Wheel" &&
      incompatibility.item2_type === "Rim" &&
      incompatibility.item1_id === wheelId &&
      incompatibility.item2_id === rimId
  );
};
