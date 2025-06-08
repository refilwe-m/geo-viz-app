export const generateRandomData = (binCount: number = 10): number[] => {
  return Array.from({ length: binCount }, () =>
    Math.floor(Math.random() * 100)
  );
};
