const circleArea = (r) => {
  const alan = Math.PI * r * r;
  console.log(alan);
};

circleArea(2);

const circleCircumference = (r) => {
  const cevre = 2 * Math.PI * r;
  console.log(cevre);
};

circleCircumference(3);

module.exports = {
  circleArea,
  circleCircumference,
};
