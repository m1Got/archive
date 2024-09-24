import { useState } from "react";

export function useRandomArb({
  min = 0,
  max = 1,
  toFixed = false,
  fixCount = 2,
}) {
  const [random, setRandom] = useState(Math.random());
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  const floor = (nmb: number) => Math.floor(nmb);
  const isToFixed = (nmb: number) => (toFixed ? nmb.toFixed(fixCount) : nmb);

  return {
    max: Number(isToFixed(random * max)),
    int: Number(isToFixed(floor(random * max))),
    btw: Number(isToFixed(random * (max - min) + min)),
    btwInt: Number(
      isToFixed(floor(random * (maxFloored - minCeiled) + minCeiled)),
    ),
    btwInc: Number(
      isToFixed(floor(random * (maxFloored - minCeiled + 1) + minCeiled)),
    ),
  };
}
