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
