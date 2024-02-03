
const person={
    name:'Kabir Hussan',
    age: 24,
    university: 'SEC',
    profession: 'developer',
    dept: 'CSE',

   skills:{

    lang:['Eng', 'Bengali', 'Japanese'],
    progamLang:['c', 'c++', 'java', 'Javascript']
    
   }
}
delete person.dept;
console.log(person);
console.log(person.skills.progamLang);
