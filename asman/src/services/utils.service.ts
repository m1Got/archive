import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const phoneMask = "+998 (__) ___-__-__";

export const clamp = (number: number, min: number, max: number) =>
  Math.min(Math.max(number, min), max);

export function later(delay: number) {
  return new Promise(function (resolve) {
    setTimeout(resolve, delay);
  });
}

export const afterSeconds = (seconds: number) => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + seconds);
  return time;
};

export function isDev(): boolean {
  const development: boolean =
    !import.meta.env.NODE_ENV || import.meta.env.NODE_ENV === "development";

  return development;
}

export function getRandomArbitrary({
  min = 0,
  max = 1,
  toFixed = false,
  fixCount = 2,
}) {
  const random = Math.random();
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
