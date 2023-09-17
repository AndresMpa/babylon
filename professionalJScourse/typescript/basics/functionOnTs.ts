// Simple arrow function
const adder = (numberA: number, numberB: number): number => {
  console.log(numberA + numberB);
  return numberA + numberB;
};

// A function that return another function that return a number
const createAdder: any = (inputNumber: number): any => {
  return (createdNumber: number): number => {
    return inputNumber + createdNumber;
  };
};

// This function accept a default value to firstName setted as "User", it also
// accepts lastName as undefined or string if it is undefined it means that
// lastName was not provided if it was it'll be concatenated to the final
// output, it means that at invoking time this function don't need
// parameters
const fullName: any = (firstName: string = "User", lastName?: string): string => {
  return `${firstName} ${lastName || ""}`;
};

export { adder, createAdder, fullName };
