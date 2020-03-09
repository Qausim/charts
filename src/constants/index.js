export const biggerData = new Array(5).fill(0).map(() => ({
  name: "Page A",
  uv: Math.random() * 400,
  pv: Math.random() * 2400,
  amt: Math.random() * 2400
}));
"abcdefghij"
  .slice(0, biggerData.length)
  .split("")
  .forEach((name, ind) => {
    biggerData[ind].name = "PAGE " + name.toUpperCase();
  });

export const smallerData = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 }
];
