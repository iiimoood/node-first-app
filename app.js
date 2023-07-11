const fs = require('fs');

genders = ['M', 'F'];
maleNames = ['James', 'William', 'Benjamin', 'Alexander', 'Henry'];
femaleNames = ['Emily', 'Olivia', 'Sophia', 'Ava', 'Charlotte'];

lastNames = [
  'Smith',
  'Johnson',
  'Williams',
  'Brown',
  'Jones',
  'Davis',
  'Miller',
  'Wilson',
  'Moore',
  'Taylor',
];

const randChoice = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

people = [];

for (let i = 0; i < 20; i++) {
  const person = {};
  person.gender = randChoice(genders);
  if (person.gender === 'M') {
    person.firstName = randChoice(maleNames);
  } else {
    person.firstName = randChoice(femaleNames);
  }
  person.lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  person.age = Math.floor(Math.random() * (78 - 18 + 1)) + 18;
  person.email = `${person.firstName.toLowerCase()}.${person.lastName.toLowerCase()}@gmail.com`;

  people.push(person);
}

fs.writeFile('people.json', JSON.stringify(people), (err) => {
  if (err) throw err;
  console.log('File has been successfully generated! Check people.json');
});
