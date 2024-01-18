import { Dispatch, SetStateAction } from "react";
import { toast } from "sonner";

export function toggleState(setState: Dispatch<SetStateAction<boolean>>): void {
  setState((prevState) => !prevState);
}

export function map(e1: any, e2: any): Map<boolean, any> {
  return new Map([
    [true, e1],
    [false, e2],
  ]);
}

export function getNextElement<T>(
  array: T[],
  currentIndex: number,
  setState: Dispatch<SetStateAction<number>>,
) {
  const nextIndex = (currentIndex + 1) % array.length; // Calculate the next index with wrap-around
  setState(nextIndex);
  return nextIndex;
}

export const onError = (args: string[]) => {
  toast.error(args[0], {
    description: args[1],
  });
};

export const onSuccess = (args: string[]) => {
  toast.success(args[0], {
    description: args[1],
  });
};

export const onInfo = (args: string[]) => {
  toast.info(args[0], {
    description: args[1],
  });
};

export const onWarn = (args: string[]) => {
  toast.warning(args[0], {
    description: args[1],
  });
};

export const decimal = (
  num: string | number | undefined,
  digits: number,
): string => {
  if (num === undefined) return "0.00";
  const parsedNumber = typeof num === "string" ? parseFloat(num) : num;
  return parsedNumber.toLocaleString("en-US", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
};

export const formatNumber = (phoneNumber: string): number => {
  return parseInt(phoneNumber.replace(/[\(\)\-\+\s]/g, ""), 10);
};

export const limitText = (text: string | number) => {
  if (typeof text === "number") {
    const str = text.toString();
    return str.substring(0, 30);
  }
  if (text.length > 45) {
    return `${text.substring(0, 40)} ...`;
  }
  return text.substring(0, 45);
};

type CopyFnParams = {
  name: string;
  text: string;
};
type CopyFn = (params: CopyFnParams) => Promise<boolean>; // Return success

export const copyFn: CopyFn = async ({ name, text }) => {
  if (!navigator?.clipboard) {
    onWarn("Clipboard not supported");
    return false;
  }

  try {
    await navigator.clipboard.writeText(text);
    onSuccess(`${name ? "Copied: " + name : "Copied."}`, limitText(text));
    return true;
  } catch (error) {
    onError("Copy failed.");
    return false;
  }
};
