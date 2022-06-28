export const dataType = () => {
  //Boolean
  let muted: boolean = true;
  muted = false;
  console.log(muted);

  // Number
  let age = "6";
  let numberA: number = 8;
  let numberB: number = 4;
  let res: number = parseInt(age) + numberB + numberA;
  console.log(res);

  // Strings
  let name: string = "Testman";
  let greet = `Hi ${name}`;
  console.log(greet);

  //Array
  /*
   * Can be multi tiple, explicit types or one type
   * */

  let people: string[] = []; // Single type
  people = ["Bob", "Dylan", "Maryan", "Jenna", "Glen"];
  //people.push(200) -> The data type doesn't macht
  console.log(people);

  // An explicit array of 2 types
  let peopleWithAge: Array<string | number> = [];
  peopleWithAge.push("Richard");
  peopleWithAge.push(26);
  console.log(peopleWithAge);

  // Enums
  enum Color {
    red = "Red",
    green = "Green",
    blue = "Blue",
  }

  let favoriteColor: Color = Color.green;
  console.log(`My favorite color is ${favoriteColor}`);

  // A not explicit var
  let notStrictDataTypeVar: any = "Someting";
  notStrictDataTypeVar = { type: ["Now", "you", "are", "an", "array"] };
  console.log(notStrictDataTypeVar);

  let obj: object = {
    name: "obj",
    type: "object",
  };

  console.log(obj);
};
