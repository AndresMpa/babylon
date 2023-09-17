const pi = Math.PI;

/*
 * Perimeter by figures:
 *
 * sqr -> Square
 * trg -> Triangle
 * crc -> Circle
 * */

const sqr_perimeter = (base, heigth) => 2 * base + 2 * heigth;
const trg_perimeter = (base, sideA, sideB) => base + sideA + sideB;
const crc_perimeter = (radious) => radious * 2 * pi;

/*
 * Area by figures:
 *
 * sqr -> Square
 * trg -> Triangle
 * crc -> Circle
 * */
const sqr_area = (base, heigth) => base * heigth;
const trg_area = (base, heigth) => (base * heigth) / 2;
const crc_area = (radious) => radious * radious * pi;

const trg_height = (sideA, sideB, sideC) => {
  if (sideA == sideB && sideA == sideC && sideB == sideC) {
    return -1;
  } else if (sideA == sideB) {
    return Math.sqrt(Math.pow(sideA, 2) - Math.pow(sideC / 2, 2));
  } else if (sideA == sideC) {
    return Math.sqrt(Math.pow(sideC, 2) - Math.pow(sideB / 2, 2));
  } else if (sideB == sideC) {
    return Math.sqrt(Math.pow(sideB, 2) - Math.pow(sideA / 2, 2));
  }
};

console.log("Expected: 2.83");
console.log(trg_height(3, 3, 2));
console.log(trg_height(3, 2, 3));
console.log(trg_height(2, 3, 3));

console.log("Expected: -1");
console.log(trg_height(2, 2, 2));
