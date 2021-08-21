// Parametros en un arrow Function...


// Parametros
const aprendiendo = (tecnologia) => console.log(`aprendiendo ${tecnologia}`);
aprendiendo('JavaScript');

// si es un solo parmetro no ocupamos el parentesis
const aprendiendo = tecnologia => console.log(`aprendiendo ${tecnologia}`);
aprendiendo('JavaScript');

// multiples parametros si requieren parentesis
const aprendiendo = (tecn1, tecn2) => console.log(`Aprendiendo ${tecn1} ${tecn2}`);
aprendiendo('JS', 'ES');

