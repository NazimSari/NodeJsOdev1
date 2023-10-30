const yariCap = process.argv[2];

function Alan(yariCap) {
  return Math.PI * yariCap * yariCap;
}

console.log(`Yarıçapı ${yariCap} olan dairenin alanı: ${Alan(yariCap)}`);
