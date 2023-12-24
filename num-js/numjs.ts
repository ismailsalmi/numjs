interface ArrayRange {
  params: [number?, number?, number?];
}
interface NumJS {
  aadd: (arr: number[] | number[][]) => any[];
  arange: (...arr: ArrayRange["params"]) => number[];
  chunk: (
    array: any[],
    size: number
  ) => {
    data: number[];
    get: (col: number, row: number) => number;
    set: (col: number, row: number, value: number) => void;
  };
  duplicates: (array: any[]) => number[];
  min: (array: any[]) => number;
  max: (array: any[]) => number;
  sum: (array: any[]) => number;
  zeros: (rows: number, cols: number) => number[][];
  ones: (rows: number, cols: number) => number[][];
}
const sum = (array: any[]): number => {
  if (Array.isArray(array)) {
    const flat = array.flat(Infinity);
    return flat.reduce((a, b) => a + b, 0);
  }
  return 0;
};

const max = (array: any[]): number => {
  if (Array.isArray(array)) {
    const flat = array.flat(Infinity);
    return Math.max(...flat);
  }
  return 0;
};
const min = (array: any[]): number => {
  if (Array.isArray(array)) {
    const flat = array.flat(Infinity);
    return Math.min(...flat);
  }
  return 0;
};

const duplicates = (array: any[]): number[] => {
  const set = new Set<number>();
  const dp = Array();
  if (Array.isArray(array)) {
    const flat = array.flat(Infinity);
    for (let i of flat) {
      if (set.has(i)) {
        dp.push(i);
      } else {
        set.add(i);
      }
    }
  }
  const rm = new Set(dp).values();
  return Array.from(rm);
};

const chunk = (
  array: any[],
  size: number = 0
): {
  data: number[];
  get: (col: number, row: number) => number;
  set: (col: number, row: number, value: number) => void;
} => {
  const ls: any = [];
  if (Array.isArray(array)) {
    const flat = array.flat(Infinity);
    if (size > 0) {
      for (let i = 0; i < flat.length; i += size) {
        ls.push(flat.slice(i, i + size));
      }
    } else {
      ls.push(flat);
    }
  }
  return {
    data: ls,
    get: (col: number, row: number) => ls[col][row],
    set: (col: number, row: number, value: number) => {
      ls[col][row] = value;
    },
  };
};

const zeros = (rows: number, cols: number): number[][] => {
  const ls = [];
  const arr = Array.from({ length: cols }, () => 0);
  for (let i = 0; i < rows; i++) {
    ls.push(arr);
  }
  return ls;
};
const ones = (rows: number, cols: number): number[][] => {
  const ls = [];
  const arr = Array.from({ length: cols }, () => 1);
  for (let i = 0; i < rows; i++) {
    ls.push(arr);
  }
  return ls;
};

const arange = (...arr: ArrayRange["params"]): number[] => {
  const ls: number[] = [];

  if (arr.length === 1) {
    for (let i = 0; i < arr[0]!; i++) {
      ls.push(i);
    }
  } else if (arr.length === 2) {
    if (arr[0]! > arr[1]!) {
      for (let i = arr[0]!; i > arr[1]!; i--) {
        ls.push(i);
      }
    } else {
      for (let i = arr[0]!; i < arr[1]!; i++) {
        ls.push(i);
      }
    }
  } else {
    if (arr[0]! > arr[1]!) {
      for (let i = arr[0]!; i > arr[1]!; i -= arr[2]!) {
        ls.push(i);
      }
    } else {
      for (let i = arr[0]!; i < arr[1]!; i += arr[2]!) {
        ls.push(i);
      }
    }
  }
  return ls;
};

const aadd = (arr: number[] | number[][]): any[] => {
  const ls: any[] = [];
  if (arr[0] && (arr[0] as unknown as number[][]).length) {
    for (let i = 0; i < arr.length; i++) {
      ls.push([...(arr[i] as number[])].map((x) => x * 2));
    }
    return ls;
  }
  for (let i = 0; i < arr.length; i++) {
    ls.push((arr[i] as number) * 2);
  }
  return ls;
};

export const numJS: NumJS = {
  aadd,
  zeros,
  ones,
  sum,
  max,
  min,
  duplicates,
  chunk,
  arange,
};
