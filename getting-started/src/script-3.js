function createPerson(name, age) {
  return {
    name,
    age: age ? age : parent(Math.random() * 100),
  };
}

function analysePeopleAge(people, underageRule) {
  const total = people.length;
  const underagePeople = people.filter((person) => underageRule(person.age));
  return {
    underage: underagePeople.length,
    over18: total - underagePeople.length,
  };
}

module.exports = {
  createPerson,
  analysePeopleAge,
};
