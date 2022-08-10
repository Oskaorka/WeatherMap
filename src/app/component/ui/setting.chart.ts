export const options: any = {
  responsive: true,
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    legend: false,
    title: {
      display: false,
    },
  },
};
export function everyN(array: any, n: any) {
  return array.filter((item: any, index: any) => !((index + 1) % n));
}
