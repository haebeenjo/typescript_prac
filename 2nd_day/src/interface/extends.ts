// interface Person {
//   name: string;
// }

// interface Developer extends Person {
//   skill: string;
// }

// let fe = {} as Developer;

// fe.name = "josh";
// fe.skill = "TypeScript";

interface Person {
    name: string;
  }
  
  interface Drinker {
    drink: string;
  }
  
  interface Developer extends Person, Drinker {
    skill: string;
  }
  
  let fe = {} as Developer;
  fe.name = 'josh';
  fe.skill = 'TypeScript';
  fe.drink = 'Beer';