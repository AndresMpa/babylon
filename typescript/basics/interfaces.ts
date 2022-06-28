// Enums
enum Color {
  red = "Red",
  green = "Green",
  blue = "Blue",
}

// Interfaces
interface SquareInterface {
  height: number;
  width: number;
  color?: Color;
}

// Demo vars
let demoSquare: SquareInterface = {
  height: 6,
  width: 4,
  color: Color.blue,
};

//Functions

const areaCalculator: any = (squareArea: SquareInterface): number => {
  return squareArea.width * squareArea.height;
};

// Over writting functions
//
// Note: When you're over writting functions you can't use 
// arrow functions
demoSquare.toString = function() {
  return this.color ? `A ${this.color} squeare` : `A squeare`;
};

// Calculated vars

const demoSquareArea: number = areaCalculator(demoSquare);

// Logs
const dataFromInterface: any = (): any => {
  console.log(demoSquareArea);
  console.log(demoSquare.toString());
};

export { dataFromInterface };
