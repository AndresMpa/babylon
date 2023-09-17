objetive = `I will learn how to use JS as a pro`;
whatIHaveToDo = `I have to `;
thingsToLearn = [
  `make a snippet for using this kind of strings`,
  `learn loops`,
  `learn methods`,
  `get used to this strings`,
  `use JS for something else different to web`,
];

learnPosition = objetive.search("learn");
important = objetive.substr(learnPosition, 5).toUpperCase();
objetive = objetive.replace('learn', important)

console.log(objetive);

for (let eachSkill of thingsToLearn) {
  console.log(whatIHaveToDo + eachSkill);
}
